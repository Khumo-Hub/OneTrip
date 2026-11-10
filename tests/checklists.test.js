import test from 'node:test';
import assert from 'node:assert/strict';
import {guides,getGuide,categories} from '../dist/assets/js/guides.js';
import {buildChecklist,getTripAdvice,matchesRule,checklistKey,secureServiceLink} from '../dist/assets/js/logic.js';

test('Eight named pilot guides from three real categories',()=>{
  assert.deepEqual(guides.map(g=>g.id),['smart-id','passport','licence-renewal','bank-account','university-application','nbt-registration','nsfas-funding','vehicle-disc-renewal']);
  assert.equal(categories.length,3);
  for(const guide of guides)assert.ok(categories.some(c=>c.name===guide.category));
});

test('All guides have authoritative sources, reviewable content and unique item IDs',()=>{
  for(const guide of guides){
    assert.ok(guide.sources.length>0);
    assert.ok(guide.sources.every(s=>s.url.startsWith('https://')&&s.title));
    assert.equal(new Set(guide.items.map(i=>i.id)).size,guide.items.length);
    assert.ok(guide.questions.length>=2);
    assert.ok(guide.items.every(i=>i.group&&i.title&&i.detail));
    assert.ok(guide.questions.every(q=>q.options.length>=2));
  }
});

test('Every combination of pilot answers generates a valid checklist and trip check',()=>{
  let combinations=0;
  for(const guide of guides){
    const visit=(step,answers)=>{
      if(step===guide.questions.length){
        const list=buildChecklist(guide,answers);
        const advice=getTripAdvice(guide,answers);
        assert.ok(list.length>0);
        assert.ok(list.every(item=>matchesRule(item.when,answers)));
        assert.ok(['online','visit','check'].includes(advice.tone));
        assert.ok(advice.headline&&advice.detail);
        combinations++;
        return;
      }
      const q=guide.questions[step];
      for(const option of q.options)visit(step+1,{...answers,[q.id]:option.value});
    };
    visit(0,{});
  }
  assert.equal(combinations,110);
});

test('Incomplete and invented answers are rejected',()=>{
  assert.throws(()=>buildChecklist(getGuide('smart-id'),{}));
  assert.throws(()=>buildChecklist(getGuide('smart-id'),{reason:'anything',channel:'dha',appointment:'yes'}));
  assert.throws(()=>buildChecklist(getGuide('university-application'),{tertiary:'yes',international:'no'}));
});

test('Licence expiry triggers temporary-licence guidance',()=>{
  const guide=getGuide('licence-renewal');
  const base={eye:'no',centre:'smart'};
  assert.ok(buildChecklist(guide,{...base,expired:'yes'}).some(i=>i.id==='dl-expired'));
  assert.ok(!buildChecklist(guide,{...base,expired:'no'}).some(i=>i.id==='dl-expired'));
});

test('Banking checklist adapts to all five institutions and applicant circumstances',()=>{
  const guide=getGuide('bank-account');
  const base={sa:'yes',phone:'yes',bank:'capitec'};
  for(const bank of ['capitec','fnb','absa','nedbank','standard']){
    const list=buildChecklist(guide,{...base,bank});
    assert.ok(list.some(i=>i.id===`bank-${bank}`));
    assert.equal(list.filter(i=>i.id.startsWith('bank-')&&['capitec','fnb','absa','nedbank','standard'].includes(i.id.slice(5))).length,1);
  }
  assert.ok(buildChecklist(guide,{...base,sa:'no'}).some(i=>i.id==='bank-non-sa'));
  assert.ok(buildChecklist(guide,{...base,phone:'no'}).some(i=>i.id==='bank-branch'));
  assert.ok(!buildChecklist(guide,{...base,phone:'no'}).some(i=>i.id==='bank-phone'));
});

test('University application shows only the selected institution and extra prior-study requirements',()=>{
  const guide=getGuide('university-application');
  const base={international:'no',institution:'uj'};
  assert.ok(buildChecklist(guide,{...base,tertiary:'yes'}).some(i=>i.id==='uni-transcript'));
  assert.ok(!buildChecklist(guide,{...base,tertiary:'no'}).some(i=>i.id==='uni-transcript'));
  assert.ok(buildChecklist(guide,{...base,tertiary:'no'}).some(i=>i.id==='uni-uj'));
  assert.ok(!buildChecklist(guide,{...base,tertiary:'no'}).some(i=>i.id==='uni-up'));
});

test('NBT guidance adapts to venue/online choices and institution requirements',()=>{
  const guide=getGuide('nbt-registration');
  const base={requirement:'yes',format:'venue',date:'yes'};
  assert.ok(buildChecklist(guide,base).some(i=>i.id==='nbt-location'));
  assert.ok(buildChecklist(guide,{...base,format:'online'}).some(i=>i.id==='nbt-online'));
  assert.ok(buildChecklist(guide,{...base,requirement:'no'}).some(i=>i.id==='nbt-test'));
});

test('Vehicle licence disc renewal presents online and company-specific tasks',()=>{
  const guide=getGuide('vehicle-disc-renewal');
  const base={vehicle:'individual',notice:'yes',route:'online'};
  assert.equal(getTripAdvice(guide,base).tone,'online');
  assert.ok(buildChecklist(guide,base).some(i=>i.id==='disc-online'));
  assert.ok(buildChecklist(guide,{...base,vehicle:'company'}).some(i=>i.id==='disc-company'));
  assert.ok(buildChecklist(guide,{...base,route:'inperson'}).some(i=>i.id==='disc-visit'));
});

test('Local checklist keys and shared service URLs never contain a national ID',()=>{
  const key=checklistKey('smart-id',{reason:'replace',channel:'dha',appointment:'no'});
  assert.ok(key.startsWith('onetrip-checklist-'));
  assert.equal(secureServiceLink('passport'),'service.html?id=passport');
  assert.ok(!key.includes('identity-number'));
});
