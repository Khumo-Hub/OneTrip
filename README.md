# OneTrip — Bright Compass pilot

An accessible, framework-free website for preparing South Africans for everyday appointments and administrative tasks.

## What works in this private build

- Homepage, Explore Services, service guides, Prepare My Visit wizard and personalised checklists.
- Five structured pilot journeys (Smart ID, adult passport, Gauteng driving-licence-card renewal, Capitec personal-account onboarding and UNISA undergraduate application preparation).
- Conditional requirements and a service-specific Trip Check result.
- Optional on-device saving, checklist progress tracking, print/Save as PDF, and safe sharing of generic service links.
- About, How It Works, FAQs, Contact preview, Privacy and Terms preview, and 404 page.
- Responsive styles, keyboard-operable controls and print-specific styles.

## Run locally

No install or framework build is needed. Use Python's HTTP server or any static file server:

```bash
cd onetrip
npm run serve
```

Open `http://localhost:8000`. For service-specific questions, click **Prepare my visit**.

## Test

```bash
npm test
```

Tests are powered by Node's built-in test runner; no dependencies are installed.

## Hosting

Upload the contents of `dist/` to the web root of a conventional static host (e.g. Hostinger `public_html`) or configure Netlify's publish directory to `dist`. Keep the relative folder structure intact. This is suitable for testing as an unpublished project; public launch is **not yet approved**.

## Content and privacy safeguards

See `CONTENT_REGISTER.md` for authoritative sources and outstanding review gates. Client-side choices contain no identity or financial numbers. Session state only contains the selected guide and general answer labels. A saved checklist is stored on the device only when the visitor requests it and can be cleared.

The contact page currently helps users **copy** feedback but does **not** send it. It is explicitly labelled as a preview. A real contact integration, final legal copy and source-review sign-off are required before public launch.

## Project layout

```text
onetrip/
  dist/
    index.html, prepare.html, checklist.html, services.html, ...
    assets/css/styles.css
    assets/js/guides.js  # Content and branching rules
    assets/js/logic.js   # Tested pure checklist functions
    assets/js/main.js    # UI and interaction controllers
  tests/checklists.test.js
  CONTENT_REGISTER.md
  README.md
```
