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
  bookingButtons: {
    americasCard: { dataLinkKey: "americas", url: "https://example.com/americas" },
    emeaCard: { dataLinkKey: "emea", url: "https://example.com/emea" },
    apacCard: { dataLinkKey: "apac", url: "https://example.com/apac" }
  },
  additionalCoverageLink: {
    worldwideAvailability: { dataLinkKey: "worldwide", url: "https://example.com/worldwide" }
  },
  checklistSections: {
    beforeKickoff: {
      sectionKey: "beforeKickoff",
      items: [{ label: "Triple Pixel", url: "https://example.com/triple-pixel" }]
    },
    kickoffOutcomes: {
      sectionKey: "kickoffOutcomes",
      items: [{ label: "Summary Dashboard", url: "https://example.com/summary-dashboard" }]
    }
  }
};
```

- `index.html` loads `booking-page-links.js` and maps URLs via `data-link` and `data-resource-list`, so booking and checklist links are editable in one place.
- For booking buttons and worldwide link, edit `url` values under objects with `dataLinkKey`.
- For checklist bullets, add/remove items under `checklistSections.<section>.items`.
- Added onboarding-themed content sections from the welcome email:
  - “Connect what you can (optional)” with Triple Pixel, integrations, and tracking/UTM rules
  - “Kickoff agenda” with Summary, Attribution, Creative Analysis, and Cohort/Segments
  - Note that Customer Success handoff happens after kickoff

Current status noted in that prior thread:
- Brand kit restyle request (Triple Whale colors/typography/tone rules) had been submitted but was not yet applied
- Links were still placeholder URLs in `booking-page-links.js`

## Current Status (Updated Mar 19, 2026)
- Brand-kit styling has now been applied to `index.html` (color, typography, spacing, tone, CTA/focus states).
- Booking URLs in `booking-page-links.js` are still placeholders and should be replaced with production links.
- The two onboarding resource cards now support MSP-aware link sets in `booking-page-links.js`.

## MSP-Aware Resource Links
The page now reads lowercase `?msp=`, `?headless=`, `?package=`, and `?add-on=` from the URL and swaps the onboarding resource cards accordingly.

- Supported values: `Shopify`, `WooCommerce`, `BigCommerce`, `custom`
- Matching is case-insensitive and ignores spaces / punctuation
- Missing, blank, or unknown `msp` values fall back to the `tw_msp` cookie when present, otherwise default to Shopify
- A valid `?msp=` value updates the `tw_msp` cookie
- Blank or invalid `?msp=` values do not overwrite the cookie
- `?headless=true` swaps the Triple Pixel install bullet to one shared headless setup URL and updates the `tw_headless` cookie
- `?headless=false` turns those extra docs off and updates the `tw_headless` cookie
- If `headless` is missing, the page falls back to `tw_headless` when present, otherwise defaults to `false`
- Missing, blank, or unknown `package` values fall back to `tw_package` when present, otherwise default to `advanced`
- A valid `?package=` value updates the `tw_package` cookie
- Blank or invalid `?package=` values do not overwrite the cookie
- `?package=starter` removes Sonar Optimize from configuration and hides Creative Analysis, Cohort Analysis, and Customer Segments from activation
- `?package=professional` includes the full advanced/default activation set plus MMM and Incrementality
- Missing, blank, or `?package=advanced` keeps the default experience
- `?add-on=conversion` adds a separate bottom-of-card Conversion add-on callout under Configuration with a Setup Custom Events guide
- `?add-on=retention` adds a separate bottom-of-card Retention add-on callout under Activation with a Sync customer segments guide
- Missing, blank, or unknown `add-on` values leave the two sections unchanged

Edit platform-specific resource links in:

- `booking-page-links.js` -> `checklistSections.beforeKickoff.itemsByMsp`
- `booking-page-links.js` -> `checklistSections.beforeKickoff.headlessItemOverrides`
- `booking-page-links.js` -> `checklistSections.<section>.packageOverrides`
- `booking-page-links.js` -> `checklistSections.<section>.addonOverrides`
- `booking-page-links.js` -> `checklistSections.kickoffOutcomes.items`

Configuration remains MSP-aware, and `headless=true` now overrides the Triple Pixel install item with a shared headless URL. Activation uses one shared resource list for all brands unless a package rule trims specific trainings. Add-ons now render as separate bottom-of-card callouts instead of blending into the main checklist. Resource bullets can also include multiple inline links in a single bullet when needed (for example, one action with separate links for Sonar Send and Sonar Optimize). Section timing labels, titles, descriptions, package rules, and add-on rules all live in `booking-page-links.js`, so copy and URLs can be maintained in one place. The page also surfaces a small platform context label for non-Shopify MSPs so revisits still visibly reflect the active platform when needed.

## Brand Personalization
The hero copy now reads `?brand=` from the URL and personalizes the headline and supporting copy when a brand name is available.

- A valid `?brand=` value updates the `tw_brand` cookie
- If `brand` is missing, the page falls back to `tw_brand` when present
- Blank `brand` values do not overwrite the cookie
- If both the URL and cookie have values, the URL wins and the cookie is updated
- If a new `?brand=` value differs from the stored `tw_brand`, the page clears the persisted onboarding cookies first so the new brand starts from a clean state before any fresh query params are applied
- The main hero headline stays fixed as `Welcome to Triple L`, and the brand now appears in a smaller supporting line when available

## Geo Recommendation Persistence
The recommended region highlight now uses `geo` from the URL first and falls back to a cookie on later visits.

- A valid `?geo=` value updates the `tw_geo` cookie
- If there is no valid `geo` query param, the page falls back to `tw_geo`
- If both the URL and cookie have values, the URL wins and the cookie is updated
# tw-onboarding-router
# tw-onboarding-router
