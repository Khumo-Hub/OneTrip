import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dist=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const pages=readdirSync(dist).filter(name=>name.endsWith('.html'));

test('Every page has an accessible document shell, title and static assets',()=>{
  assert.ok(pages.length>=12);
  for(const file of pages){
    const html=readFileSync(path.join(dist,file),'utf8');
    assert.match(html,/<html lang="en-ZA">/);
    assert.match(html,/<meta name="viewport"/);
    assert.match(html,/<title>[^<]+<\/title>/);
    assert.match(html,/<main id="app"/);
    assert.match(html,/<script type="module" src="assets\/js\/main.js"/);
    assert.match(html,/<link rel="stylesheet" href="assets\/css\/styles.css"/);
  }
});

test('Static pages referenced in UI exist',()=>{
  const js=readFileSync(path.join(dist,'assets/js/main.js'),'utf8');
  const refs=[...js.matchAll(/(?:href=\\?"|href=|['"`])([a-z][a-z-]+\.html)(?:[?'"`])/g)].map(x=>x[1]);
  for(const ref of [...new Set(refs)])assert.ok(existsSync(path.join(dist,ref)),`Missing page: ${ref}`);
  assert.ok(existsSync(path.join(dist,'assets/favicon.svg')));
  for(const image of ['hero.webp','government.webp','banking.webp','education.webp']){
    assert.ok(existsSync(path.join(dist,'assets/images',image)),`Missing photo: ${image}`);
  }
});

test('Every SVG UI icon has a consistent explicit size to prevent oversized arrows',()=>{
  const js=readFileSync(path.join(dist,'assets/js/main.js'),'utf8');
  const css=readFileSync(path.join(dist,'assets/css/styles.css'),'utf8');
  assert.match(js,/class="ui-icon/);
  assert.match(js,/width="20" height="20"/);
  assert.match(css,/\.ui-icon\{[^}]*width:20px/);
});

test('No public-facing links contain invented business contact details',()=>{
  const htmls=pages.map(name=>readFileSync(path.join(dist,name),'utf8')).join('\n');
  const main=readFileSync(path.join(dist,'assets/js/main.js'),'utf8');
  assert.doesNotMatch(htmls+main,/@onetrip\.(com|co\.za)/);
  assert.match(main,/It has NOT been sent/);
});
