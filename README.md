# OneTrip — Bright Compass

**[Visit the live OneTrip website](https://onetrip-sa.netlify.app)**

OneTrip is a mobile-friendly South African website that helps people prepare for everyday appointments, applications and administrative tasks. It turns general guidance into service-specific preparation checklists and helps visitors identify things to confirm **before travelling**.

> **Public pilot / informational demo.** OneTrip is independently developed and is not affiliated with Home Affairs, banks, universities, NBT, NSFAS or NaTIS. Requirements, fees, service availability and deadlines can change. Always confirm details with the relevant official provider. The content register records outstanding human source reviews before the service can be considered production-ready.

## What you can do

- Browse services across **Government & civic**, **Banking & financial** and **Education**.
- Answer a few questions to generate a conditional preparation checklist.
- See a **Trip Check** explaining what to confirm before a visit.
- Save checklist progress on your own device, print or save as PDF, or share a generic service link.
- Find links to relevant official information sources.

### Eight pilot guides

| Category | Guide | Supported choices |
| --- | --- | --- |
| Government & civic | Smart ID card | First issue, conversion and replacement preparation |
| Government & civic | Adult passport | Adult applications and lost-passport considerations |
| Government & civic | Driving licence card renewal | Gauteng pilot |
| Government & civic | Vehicle licence disc renewal | Online and in-person preparation |
| Banking & financial | Open a personal bank account | Capitec, FNB, Absa, Nedbank and Standard Bank |
| Education | Apply to university | UNISA, UJ, UP, Wits and TUT |
| Education | Register for the NBT | National Benchmark Test booking preparation |
| Education | Prepare an NSFAS application | Application preparation and official portal guidance |

**OneTrip does not submit applications, book appointments, open bank accounts, accept payments or guarantee eligibility.**

## Live deployment

- **Website:** https://onetrip-sa.netlify.app
- **GitHub repository:** https://github.com/Khumo-Hub/OneTrip
- **Branch:** `main`
- **Host:** Netlify
- **Base directory:** repository root
- **Build command:** none
- **Publish directory:** `dist`

The Netlify project is linked to GitHub for deployments from the `main` branch. The production website is publicly accessible; its source repository has separate visibility settings.

## Technology

HTML5, CSS3 and vanilla JavaScript (ES modules), with no frontend framework or runtime dependencies.

## Run locally

```bash
npm run serve
```

Open http://localhost:8000. The server serves files from `dist/`. Python 3 is required for this command.

## Run tests

```bash
npm test
```

The suite uses Node.js's built-in test runner and checks guide branching, checklist logic, page structure and asset references.

## Project structure

```text
dist/
  index.html, services.html, prepare.html, checklist.html, ...
  assets/css/styles.css
  assets/js/guides.js
  assets/js/logic.js
  assets/js/main.js
  assets/images/
tests/
CONTENT_REGISTER.md
README.md
package.json
```

## Privacy, content and limitations

- The site does not request ID numbers, bank credentials, financial details or uploaded identity documents.
- Optional saved checklists are stored locally on the visitor's device.
- The contact page is a **preview**: it lets a visitor copy feedback, but does not send a message to OneTrip.
- Privacy and terms pages still require business/operator details and legal review.
- The eight guides require a named human review against official sources. See [CONTENT_REGISTER.md](CONTENT_REGISTER.md) for sources, review cadence and outstanding release work.
- Responsive, accessibility and real-device QA should be completed before treating this pilot as a finished commercial service.

---
Built for everyday South Africans: **One less trip. A lot less stress.**
