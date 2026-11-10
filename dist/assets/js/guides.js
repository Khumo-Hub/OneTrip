// OneTrip's carefully bounded pilot preparation guides.
// This material is independently curated from the linked official sources.
// Publication requires a final human source review; these are not official services.

export const reviewedAt = '10 November 2026';

export const guides = [
  {
    id: 'smart-id',
    name: 'Smart ID card',
    category: 'Government & civic',
    icon: 'id-card',
    accent: 'teal',
    blurb: 'Find the right Home Affairs route and prepare before you visit.',
    audience: 'South Africans applying for an ID card',
    coverage: 'South Africa · available channels depend on eligibility and location',
    minutes: '3 min',
    overview: 'Whether you are replacing a card, switching from a green ID book or applying for the first time, the correct channel can differ. Start with your situation and confirm the current route with Home Affairs.',
    trip: {tone:'check', label:'Confirm your application channel', headline:'A physical identity check may be needed', detail:'Home Affairs and participating bank branches use different processes. Confirm eligibility and the location before travelling.'},
    questions: [
      {id:'reason', label:'What would you like to do?', options:[
        {value:'convert', label:'Switch from a green ID book'},
        {value:'replace', label:'Replace a lost or damaged Smart ID'},
        {value:'first', label:'Apply for a first ID (16 or older)'}
      ]},
      {id:'channel', label:'Where are you planning to apply?', options:[
        {value:'bank', label:'At a participating bank branch'},
        {value:'dha', label:'At a Home Affairs office'},
        {value:'unsure', label:'I need help choosing'}
      ]},
      {id:'appointment', label:'Have you checked whether your chosen location requires a booking?', options:[
        {value:'yes', label:'Yes, I checked'},
        {value:'no', label:'Not yet'}
      ]}
    ],
    items: [
      {id:'id-channel', group:'Before you leave', title:'Confirm the channel accepts your application type', detail:'Participating locations and services change. Follow the official Home Affairs service directory.'},
      {id:'id-identity', group:'Documents to check', title:'Check identity documents required for your situation', detail:'The exact documents vary for first-time, conversion and replacement applications. Use the official requirements before travelling.'},
      {id:'id-location', group:'Before you leave', title:'Confirm the selected office or bank branch', detail:'Check service availability and any required booking directly with the institution.'},
      {id:'id-fee', group:'Before you leave', title:'Check the applicable current fee and payment method', detail:'OneTrip does not collect fees or quote an unverified amount.'},
      {id:'id-old', group:'Documents to check', title:'Keep your existing green ID book ready', detail:'Ask the chosen provider whether you must bring the original.', when:{reason:'convert'}},
      {id:'id-replacement', group:'Documents to check', title:'Confirm replacement-specific evidence', detail:'If your card is lost or damaged, ask whether any additional declaration or evidence is required.', when:{reason:'replace'}},
      {id:'id-first', group:'Documents to check', title:'Check first-time ID requirements with Home Affairs', detail:'Rules for applicants aged 16 and over can differ from replacement-card services.', when:{reason:'first'}},
      {id:'id-bank', group:'Before you leave', title:'Verify this bank branch supports your ID application', detail:'Do not assume every participating bank can complete every application type.', when:{channel:'bank'}},
      {id:'id-booking', group:'Before you leave', title:'Find out whether you must book first', detail:'Use the official booking system or contact the location.', when:{appointment:'no'}}
    ],
    sources: [
      {title:'South African Government — Apply for an identity document', url:'https://www.gov.za/services/services-residents/citizenship/personal-identification/apply-for-identity-document'},
      {title:'Home Affairs — Digital partner-branch directory', url:'https://myhomeaffairsonline.dha.gov.za/'},
      {title:'Home Affairs — Branch appointment system', url:'https://services.dha.gov.za/#/authenticate/identity'}
    ]
  },
  {
    id: 'passport', name:'Adult passport application', category:'Government & civic', icon:'plane', accent:'orange',
    blurb:'Know what to check before you apply for a South African passport.',
    audience:'South African adults applying for a passport',
    coverage:'South Africa · adults only in this pilot', minutes:'3 min',
    overview:'A passport application involves identity verification. Requirements and booking availability can depend on the application route. This guide is limited to adult applicants.',
    trip:{tone:'visit',label:'A visit is usually part of this process',headline:'Prepare for an identity-verification visit',detail:'Confirm the application channel and any appointment requirements with Home Affairs. OneTrip cannot make the booking for you.'},
    questions:[
      {id:'reason',label:'Which situation describes you?',options:[
        {value:'standard',label:'I need an adult passport'},
        {value:'lost',label:'My previous passport was lost or stolen'},
        {value:'unsure',label:'I am not sure which application I need'}
      ]},
      {id:'id',label:'Do you have a South African identity document?',options:[
        {value:'yes',label:'Yes'}, {value:'no',label:'No or I need to replace it'}
      ]},
      {id:'booking',label:'Have you confirmed where and how to apply?',options:[
        {value:'yes',label:'Yes'}, {value:'no',label:'Not yet'}
      ]}
    ],
    items:[
      {id:'passport-id',group:'Documents to check',title:'Have your South African ID ready',detail:'The government states an adult applicant needs a South African identity document.'},
      {id:'passport-route',group:'Before you leave',title:'Check the official passport application route',detail:'Find an eligible office and check whether an appointment is required.'},
      {id:'passport-fee',group:'Before you leave',title:'Verify the current fee and payment method',detail:'Fees and channels must be confirmed with Home Affairs.'},
      {id:'passport-old',group:'Documents to check',title:'Confirm the process for a lost or stolen passport',detail:'Ask Home Affairs what additional steps or evidence apply.',when:{reason:'lost'}},
      {id:'passport-noid',group:'Before you leave',title:'Contact Home Affairs about the missing ID',detail:'Your application may need an ID-related step first. Do not travel without confirming.',when:{id:'no'}},
      {id:'passport-location',group:'Before you leave',title:'Confirm a suitable office and booking availability',detail:'Use the official branch appointment service where available.',when:{booking:'no'}}
    ],
    sources:[
      {title:'South African Government — Apply for a passport or travel document',url:'https://www.gov.za/services/services-residents/travel-outside-sa/apply-passport-or-travel-document'},
      {title:'Home Affairs — Branch appointment system',url:'https://services.dha.gov.za/#/authenticate/identity'}
    ]
  },
  {
    id:'licence-renewal',name:'Driving licence card renewal',category:'Government & civic',icon:'car-front',accent:'teal',
    blurb:'Get ready for your Gauteng driving licence testing centre visit.',
    audience:'Gauteng drivers renewing a driving licence card',coverage:'Gauteng pilot only · centre-specific rules may differ',minutes:'4 min',
    overview:'Renewing the physical driving licence card involves a visit to a driving licence testing centre. The documents, payment methods and booking arrangements must be checked with the selected centre.',
    trip:{tone:'visit',label:'A centre visit is required',headline:'Book and prepare for a DLTC visit',detail:'Gauteng Smart Licensing Centres use the NaTIS appointment portal. Confirm the arrangements for your chosen centre.'},
    questions:[
      {id:'expired',label:'Has your driving licence card expired?',options:[
        {value:'no',label:'No, it is still valid'}, {value:'yes',label:'Yes, it has expired'}, {value:'unsure',label:'I am not sure'}
      ]},
      {id:'eye',label:'Do you already have an optometrist eye-test report?',options:[
        {value:'yes',label:'Yes'}, {value:'no',label:'No'}
      ]},
      {id:'centre',label:'What sort of centre will you use?',options:[
        {value:'smart',label:'A Gauteng Smart Licensing Centre'}, {value:'other',label:'Another DLTC / not sure'}
      ]}
    ],
    items:[
      {id:'dl-id',group:'Documents to check',title:'Bring acceptable identification and a copy',detail:'Check whether your ID, old driving licence card or valid South African passport is accepted at the chosen centre.'},
      {id:'dl-address',group:'Documents to check',title:'Prepare proof of residential address',detail:'The government lists proof of address and alternatives for certain situations.'},
      {id:'dl-photo',group:'Documents to check',title:'Confirm the number and type of ID photographs',detail:'The number can vary by DLTC. Ask before paying for photographs.'},
      {id:'dl-form',group:'Before you leave',title:'Check the DL1 and NCP forms',detail:'The official renewal guidance lists these forms. Confirm how your centre supplies them.'},
      {id:'dl-cost',group:'Before you leave',title:'Check the centre-specific fee and accepted payment method',detail:'OneTrip does not quote a single fee for all locations.'},
      {id:'dl-book',group:'Before you leave',title:'Confirm or make your appointment',detail:'Use the official NaTIS portal where your chosen centre requires a booking.'},
      {id:'dl-eye',group:'Documents to check',title:'Bring your valid eye-test report',detail:'Check the acceptable age and format with the DLTC.',when:{eye:'yes'}},
      {id:'dl-eye-centre',group:'Before you leave',title:'Allow time for an eye test at the centre',detail:'The official renewal process includes an eye test.',when:{eye:'no'}},
      {id:'dl-expired',group:'Before you leave',title:'Ask about a temporary driving licence',detail:'An expired card may require an additional application and fee while awaiting the new card.',when:{expired:'yes'}},
      {id:'dl-unsure',group:'Before you leave',title:'Check the expiry date on your card',detail:'Confirm whether additional temporary-licence steps apply.',when:{expired:'unsure'}},
      {id:'dl-smart',group:'Before you leave',title:'Check NaTIS availability for your Smart Licensing Centre',detail:'Gauteng advises motorists to book online.',when:{centre:'smart'}}
    ],
    sources:[
      {title:'South African Government — Renew driving licence',url:'https://www.gov.za/services/driving-licence/renew-driving-licence'},
      {title:'Gauteng — Smart Licensing Centres and booking',url:'https://www.gov.za/news/media-statements/gauteng-roads-and-transport-encourages-motorists-utilise-smart-licensing'},
      {title:'NaTIS — Official online booking portal',url:'https://online.natis.gov.za/#/'}
    ]
  },
  {
    id:'bank-account',name:'Open a bank account',category:'Banking & financial',icon:'wallet',accent:'orange',
    blurb:'Compare the first steps at five major banks and check if you can apply online.',
    audience:'People considering a personal bank account',coverage:'South Africa · product and applicant eligibility vary',minutes:'4 min',
    institutions:['Capitec','FNB','Absa','Nedbank','Standard Bank'],
    overview:'Opening a bank account is no longer automatically a branch errand. Different banks offer different digital onboarding routes and eligibility rules. Choose your bank to build a sensible preparation list; always check the account-specific details directly with that bank.',
    trip:{tone:'check',label:'Digital options vary by bank',headline:'Check the online route before travelling',detail:'Several banks offer online account opening for eligible applicants, but approval and identity checks depend on the account and your circumstances. OneTrip does not open accounts.'},
    questions:[
      {id:'bank',label:'Which bank are you considering?',options:[{value:'capitec',label:'Capitec'},{value:'fnb',label:'FNB'},{value:'absa',label:'Absa'},{value:'nedbank',label:'Nedbank'},{value:'standard',label:'Standard Bank'}]},
      {id:'sa',label:'Will you apply with a South African ID?',options:[{value:'yes',label:'Yes'},{value:'no',label:'No / I use a passport'}]},
      {id:'phone',label:'Can you use a smartphone for the application?',options:[{value:'yes',label:'Yes'},{value:'no',label:'No'}]}
    ],
    items:[
      {id:'bank-account-type',group:'Before you begin',title:'Choose the specific bank account and compare its costs',detail:'Check monthly fees, transaction charges, eligibility and account terms on the bank’s official site.'},
      {id:'bank-identity',group:'Documents to check',title:'Prepare the identity documents your bank requires',detail:'Identity verification rules vary by bank and product. Never enter ID numbers or banking credentials on OneTrip.'},
      {id:'bank-phone',group:'Online steps',title:'Explore the bank’s official app or online application',detail:'Download only from the institution’s website or a recognised app store. The app may require ID verification.',when:{phone:'yes'}},
      {id:'bank-branch',group:'Before you leave',title:'Contact the chosen bank about a branch-assisted route',detail:'Ask for branch opening hours, documents and whether a visit is necessary.',when:{phone:'no'}},
      {id:'bank-non-sa',group:'Documents to check',title:'Confirm the bank’s non-citizen applicant requirements',detail:'Passport, residence, visa or permit requirements may differ. Check eligibility before applying.',when:{sa:'no'}},
      {id:'bank-capitec',group:'Official bank route',title:'Follow Capitec’s account-opening guidance',detail:'Capitec describes a mobile app route for eligible applicants.',when:{bank:'capitec'}},
      {id:'bank-fnb',group:'Official bank route',title:'Review FNB’s account options and digital application',detail:'Use FNB’s official account comparison and onboarding instructions.',when:{bank:'fnb'}},
      {id:'bank-absa',group:'Official bank route',title:'Check Absa’s online account-opening instructions',detail:'Confirm whether your selected account supports digital onboarding.',when:{bank:'absa'}},
      {id:'bank-nedbank',group:'Official bank route',title:'Review Nedbank’s Money app or online account route',detail:'Check the requirements for the specific Nedbank account you select.',when:{bank:'nedbank'}},
      {id:'bank-standard',group:'Official bank route',title:'Review Standard Bank’s account-opening options',detail:'Eligibility for app-based onboarding depends on your circumstances and account choice.',when:{bank:'standard'}}
    ],
    sources:[
      {title:'Capitec — Open a personal account',url:'https://www.capitecbank.co.za/personal/transact/open-an-account/'},
      {title:'FNB — Everyday bank accounts',url:'https://www.fnb.co.za/bank/entry-banking.html'},
      {title:'Absa — Open a bank account online',url:'https://www.absa.co.za/personal/bank/an-account/explore/'},
      {title:'Nedbank — MiGoals account opening',url:'https://personal.nedbank.co.za/bank/bank-accounts/everyday-banking/migoals/ready-to-apply.html'},
      {title:'Standard Bank — Open an account online',url:'https://www.standardbank.co.za/southafrica/personal/learn/how-to-open-a-bank-account-online'}
    ]
  },
  {
    id:'university-application',name:'Apply to university',category:'Education',icon:'graduation-cap',accent:'teal',
    blurb:'Prepare your application for UNISA, UJ, UP, Wits or TUT.',
    audience:'Prospective undergraduate applicants',coverage:'Five South African universities · each has its own deadlines',minutes:'4 min',
    institutions:['UNISA','UJ','UP','Wits','TUT'],
    overview:'There is no single admissions checklist for every university. You can prepare your documents, programme choices and contact details now, then verify the current application window, criteria and fees on your chosen institution’s website.',
    trip:{tone:'online',label:'Check the institution’s online portal',headline:'Start with the official university website',detail:'These institutions provide online application information or portals. Do not assume every programme is currently open or that every applicant has the same requirements.'},
    questions:[
      {id:'institution',label:'Which institution are you applying to?',options:[{value:'unisa',label:'University of South Africa (UNISA)'},{value:'uj',label:'University of Johannesburg (UJ)'},{value:'up',label:'University of Pretoria (UP)'},{value:'wits',label:'University of the Witwatersrand (Wits)'},{value:'tut',label:'Tshwane University of Technology (TUT)'}]},
      {id:'tertiary',label:'Have you studied at another tertiary institution?',options:[{value:'yes',label:'Yes'},{value:'no',label:'No'}]},
      {id:'international',label:'Are you applying as an international student?',options:[{value:'yes',label:'Yes'},{value:'no',label:'No'}]}
    ],
    items:[
      {id:'uni-course',group:'Before you apply',title:'Choose your qualification and check minimum entry requirements',detail:'Check the current prospectus, subject requirements and available study modes at your chosen institution.'},
      {id:'uni-window',group:'Before you apply',title:'Confirm that applications are open for your programme',detail:'Deadlines vary by institution, qualification and academic year. OneTrip does not display live openings.'},
      {id:'uni-contact',group:'Before you apply',title:'Use your own working email address and mobile number',detail:'Keep login and application reference details secure.'},
      {id:'uni-school',group:'Documents to prepare',title:'Gather your school results and identity document',detail:'Check required copies, formats and file sizes on the university’s official application page.'},
      {id:'uni-transcript',group:'Documents to prepare',title:'Gather your tertiary academic records',detail:'You may need a full transcript and qualification evidence from prior institutions.',when:{tertiary:'yes'}},
      {id:'uni-international',group:'Documents to prepare',title:'Review international applicant requirements',detail:'Check passport, academic evaluation and visa-related rules directly with the university.',when:{international:'yes'}},
      {id:'uni-uj',group:'Institution-specific check',title:'Use UJ’s free official undergraduate application channel',detail:'UJ states its own admissions criteria and warns against third-party application agents.',when:{institution:'uj'}},
      {id:'uni-up',group:'Institution-specific check',title:'Review UP’s programme and document instructions',detail:'UP lists ID/passport, school results and academic records where applicable; confirm the current fee.',when:{institution:'up'}},
      {id:'uni-wits',group:'Institution-specific check',title:'Check Wits programme-specific selection requirements',detail:'Some Wits programmes may require an NBT, interview, portfolio or other selection step.',when:{institution:'wits'}},
      {id:'uni-tut',group:'Institution-specific check',title:'Read TUT’s current undergraduate guide',detail:'Check programme details and faculty-specific closing dates on the official website.',when:{institution:'tut'}},
      {id:'uni-unisa',group:'Institution-specific check',title:'Review UNISA’s qualification and admission rules',detail:'Confirm the availability of your qualification in the current application cycle.',when:{institution:'unisa'}},
      {id:'uni-fee',group:'Before you apply',title:'Verify whether an application fee applies',detail:'Fee rules vary across universities and applicants. Pay only through official channels.'}
    ],
    sources:[
      {title:'UNISA — Undergraduate admissions',url:'https://www.unisa.ac.za/sites/corporate/default/Apply-for-admission/Undergraduate-qualifications/Apply-for-admission'},
      {title:'UJ — Important information before you apply',url:'https://www.uj.ac.za/admission-aid/undergraduate/important-information-before-you-apply/'},
      {title:'UP — Online application instructions',url:'https://www.up.ac.za/online-application/online-application-instructions'},
      {title:'Wits — Apply to Wits',url:'https://www.wits.ac.za/undergraduate/apply-to-wits/'},
      {title:'TUT — Undergraduate study',url:'https://www.tut.ac.za/study-at-tut/undergraduate/'}
    ]
  },
  {
    id:'nbt-registration',name:'Register for the NBT',category:'Education',icon:'graduation-cap',accent:'orange',
    blurb:'Get ready to book your National Benchmark Test through the official NBT portal.',
    audience:'Learners and university applicants who may need the NBT',coverage:'South Africa · test requirements differ by programme',minutes:'4 min',
    overview:'The National Benchmark Test Project manages NBT bookings. OneTrip helps you check which tests your institution requires, choose a suitable date and prepare for the registration process. You must register and pay through official NBT channels.',
    trip:{tone:'check',label:'Register online; check the test format',headline:'Book through the official NBT site',detail:'Your university determines whether you need the AQL test, the MAT test or both. Test delivery arrangements and venues depend on the date and test option.'},
    questions:[
      {id:'requirement',label:'Have you checked whether your institution requires NBTs?',options:[{value:'yes',label:'Yes, I know my requirement'},{value:'no',label:'Not yet'}]},
      {id:'format',label:'How are you planning to write?',options:[{value:'venue',label:'At a test venue'},{value:'online',label:'Online, if available'},{value:'unsure',label:'Not sure yet'}]},
      {id:'date',label:'Have you checked the test dates against your university deadline?',options:[{value:'yes',label:'Yes'},{value:'no',label:'Not yet'}]}
    ],
    items:[
      {id:'nbt-identity',group:'Before booking',title:'Have your official ID or passport ready',detail:'The NBT registration process requires the applicant’s identity information; enter it only at nbt.ac.za.'},
      {id:'nbt-test',group:'Before booking',title:'Check which NBTs your institution requires',detail:'The university, faculty or programme determines test requirements—not the NBT Project.',when:{requirement:'no'}},
      {id:'nbt-dates',group:'Before booking',title:'Check available dates, sites and result deadlines',detail:'Allow enough time for results to reach the university before its deadline.',when:{date:'no'}},
      {id:'nbt-location',group:'Before booking',title:'Select your preferred city and test site',detail:'Venue capacity and date availability can change.',when:{format:'venue'}},
      {id:'nbt-online',group:'Before booking',title:'Read the official online-test conditions carefully',detail:'Confirm your device, internet connection and programme eligibility if considering the online format.',when:{format:'online'}},
      {id:'nbt-unclear',group:'Before booking',title:'Check which test format is accepted',detail:'Review current official options and any institution-specific restrictions.',when:{format:'unsure'}},
      {id:'nbt-reference',group:'After registration',title:'Save your NBT username, reference and payment instructions',detail:'The official NBT guidance explains that the Lesaka EasyPay number helps verify payment. OneTrip does not collect fees.'},
      {id:'nbt-confirm',group:'Before test day',title:'Check your booking confirmation and venue details',detail:'Follow the official NBT communications for the correct venue and arrival instructions.'}
    ],
    sources:[
      {title:'NBT — How to book a test',url:'https://www.nbt.ac.za/content/how-book-test'},
      {title:'NBT — Book a test',url:'https://nbt.ac.za/node/30'},
      {title:'NBT — Test dates',url:'https://nbt.ac.za/content/calendar-test-0'}
    ]
  },
  {
    id:'nsfas-funding',name:'Prepare an NSFAS application',category:'Education',icon:'document',accent:'teal',
    blurb:'Understand the myNSFAS process and prepare without sharing private details here.',
    audience:'Prospective qualifying students seeking financial aid',coverage:'South Africa · subject to current funding cycle',minutes:'3 min',
    overview:'NSFAS applications must be made through the official myNSFAS service. Funding cycles, eligibility and supporting document requirements can change, so use this guide to prepare—not to determine whether applications are open or whether you qualify.',
    trip:{tone:'online',label:'Online application information',headline:'Check the current NSFAS application cycle',detail:'Confirm the official opening and closing dates before preparing a submission on myNSFAS. OneTrip never asks for your ID number, income or documents.'},
    questions:[
      {id:'account',label:'Do you already have a myNSFAS account?',options:[{value:'yes',label:'Yes'},{value:'no',label:'No'}]},
      {id:'documents',label:'Have you checked which supporting documents apply to you?',options:[{value:'yes',label:'Yes'},{value:'no',label:'Not yet'}]},
      {id:'cycle',label:'Have you checked the current funding application dates?',options:[{value:'yes',label:'Yes'},{value:'no',label:'Not yet'}]}
    ],
    items:[
      {id:'nsfas-cycle',group:'Before you apply',title:'Check if the correct funding cycle is currently accepting applications',detail:'Only NSFAS can confirm live dates and availability.',when:{cycle:'no'}},
      {id:'nsfas-account',group:'Online steps',title:'Create your myNSFAS profile through the official website',detail:'Keep your login credentials private; you will need your own contact and identity information.',when:{account:'no'}},
      {id:'nsfas-login',group:'Online steps',title:'Sign in to your existing myNSFAS profile',detail:'Avoid creating duplicate accounts and never share one-time passwords.',when:{account:'yes'}},
      {id:'nsfas-eligibility',group:'Before you apply',title:'Read the current eligibility and funding rules',detail:'Admission to a programme and eligibility for funding are separate decisions.'},
      {id:'nsfas-docs',group:'Documents to prepare',title:'Review your personal supporting-document list',detail:'NSFAS may request consent, income evidence or other documents depending on your circumstances.',when:{documents:'no'}},
      {id:'nsfas-apply',group:'Online steps',title:'Complete, review and submit the application on myNSFAS',detail:'Upload only to the official service. Save your reference and check application status directly there.'}
    ],
    sources:[{title:'NSFAS — How to apply',url:'https://www.nsfas.org.za/content/how-to-apply.html'},{title:'NSFAS — Official website',url:'https://www.nsfas.org.za/'}]
  },
  {
    id:'vehicle-disc-renewal',name:'Renew a vehicle licence disc',category:'Government & civic',icon:'car-front',accent:'orange',
    blurb:'See whether you can renew online through NaTIS and avoid the queue.',
    audience:'Registered vehicle owners renewing a licence disc',coverage:'South Africa · vehicle and local rules may differ',minutes:'3 min',
    overview:'The government provides an online NaTIS vehicle licence renewal route, as well as certain in-person options. Check whether your vehicle qualifies, and verify your renewal notice and the correct payment amount before proceeding.',
    trip:{tone:'online',label:'Official online renewal option',headline:'You may be able to avoid the queue',detail:'Eligible motorists can use the official NaTIS online portal and arrange delivery of the disc. Availability and fees must be confirmed on the portal.'},
    tripRules:[{when:{vehicle:'company'},trip:{tone:'check',label:'Additional business steps may apply',headline:'Check the registered owner’s requirements',detail:'Company-owned vehicles and proxy arrangements may require extra documents or a different route.'}}],
    questions:[
      {id:'vehicle',label:'Who owns the vehicle?',options:[{value:'individual',label:'It is registered in my name'},{value:'company',label:'It is registered to a company or organisation'}]},
      {id:'notice',label:'Do you have your vehicle licence renewal notice?',options:[{value:'yes',label:'Yes'},{value:'no',label:'No'}]},
      {id:'route',label:'Where would you prefer to renew?',options:[{value:'online',label:'Online, if eligible'},{value:'inperson',label:'At a licensing authority or selected post office'}]}
    ],
    items:[
      {id:'disc-date',group:'Before you renew',title:'Check the disc expiry date and any late renewal amounts',detail:'Late renewal penalties and arrears may apply.'},
      {id:'disc-online',group:'Online steps',title:'Use the official NaTIS online renewal portal',detail:'Sign in to view motor renewals, select the relevant vehicle and review the amount before paying.',when:{route:'online'}},
      {id:'disc-visit',group:'Before you leave',title:'Confirm your chosen licensing office or post office supports renewals',detail:'Check opening hours, forms and accepted payment methods.',when:{route:'inperson'}},
      {id:'disc-notice',group:'Documents to check',title:'Find the correct renewal application form',detail:'If you do not have the renewal notice, check the official ALV application instructions.',when:{notice:'no'}},
      {id:'disc-person',group:'Documents to check',title:'Have identity and address evidence ready if visiting',detail:'The government lists proof of residential address and specific alternatives.',when:{vehicle:'individual',route:'inperson'}},
      {id:'disc-company',group:'Documents to check',title:'Check company certificate and proxy documents',detail:'Official requirements may include the business certificate, proxy ID and a proxy letter.',when:{vehicle:'company'}},
      {id:'disc-delivery',group:'Before you renew',title:'Confirm delivery arrangements for an online renewal',detail:'Check and protect the personal information entered on the official NaTIS service.',when:{route:'online'}}
    ],
    sources:[{title:'South African Government — Renew motor vehicle licence',url:'https://www.gov.za/services/register-motor-vehicle/renew-motor-vehicle-licence'},{title:'NaTIS — Official online portal',url:'https://online.natis.gov.za/'}]
  }
];

export const categories = [
  {name:'Government & civic',slug:'government',description:'Documents, licences and renewals without the guesswork.',icon:'landmark',image:'government.webp'},
  {name:'Banking & financial',slug:'banking',description:'Explore your bank options and prepare with confidence.',icon:'wallet',image:'banking.webp'},
  {name:'Education',slug:'education',description:'Applications, tests and study-funding preparation.',icon:'graduation-cap',image:'education.webp'}
];

export const getGuide = (id) => guides.find((g) => g.id === id);
