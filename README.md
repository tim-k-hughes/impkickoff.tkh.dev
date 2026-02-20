# Triple Whale Onboarding Booking Hub

✨ **Live app:** [triplewhale-onboarding-kickoff.netlify.app
](https://triplewhale-onboarding-kickoff.netlify.app/)
## Purpose
This repo contains a single-page booking hub used as `{{booking_link}}` in the welcome email.  
The page routes customers to book by region first (`Americas`, `EMEA`, `APAC`) with a `worldwide` fallback.

## Files
- `index.html`: Single-page booking hub UI and client-side link binding.
- `booking-page-links.js`: Centralized link config for booking buttons and checklist/resource links.

## Handoff Context (From Prior Thread)
Goal: build a single-page booking hub to use as `{{booking_link}}` in the welcome email, so customers choose Americas, EMEA, or APAC first, with a worldwide fallback link.

Built file: `index.html`  
Built file: `booking-page-links.js`

What was implemented:
- Initial landing page UI in `index.html`
- Three regional booking cards (`Americas`, `EMEA`, `APAC`) plus a “worldwide availability” link
- Copy focused on “pick your nearest region first; use worldwide if needed”
- Editable link config in `booking-page-links.js`:

```js
window.BOOKING_PAGE_LINKS = {
  regionBookingLinks: {
    americas: "https://example.com/americas",
    emea: "https://example.com/emea",
    apac: "https://example.com/apac"
  },
  globalBookingLinks: {
    worldwide: "https://example.com/worldwide"
  },
  resourceChecklistLinks: {
    beforeKickoff: [
      { label: "Triple Pixel", href: "https://example.com/triple-pixel" }
    ],
    kickoffOutcomes: [
      { label: "Summary Dashboard", href: "https://example.com/summary-dashboard" }
    ]
  }
};
```

- `index.html` loads `booking-page-links.js` and maps URLs via `data-link` and `data-resource-list`, so booking and checklist links are editable in one place.
- Added onboarding-themed content sections from the welcome email:
  - “Connect what you can (optional)” with Triple Pixel, integrations, and tracking/UTM rules
  - “Kickoff agenda” with Summary, Attribution, Creative Analysis, and Cohort/Segments
  - Note that Customer Success handoff happens after kickoff

Current status noted in that prior thread:
- Brand kit restyle request (Triple Whale colors/typography/tone rules) had been submitted but was not yet applied
- Links were still placeholder URLs in `booking-page-links.js`

## Current Status (Updated Feb 20, 2026)
- Brand-kit styling has now been applied to `index.html` (color, typography, spacing, tone, CTA/focus states).
- Booking and checklist URLs in `booking-page-links.js` are still placeholders and should be replaced with production links.
# tw-onboarding-router
# tw-onboarding-router
