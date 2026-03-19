window.BOOKING_PAGE_LINKS = {
  // Main booking buttons on each region card.
  // `dataLinkKey` must match the `data-link` attribute in index.html.
  bookingButtons: {
    americasCard: {
      label: "Book Americas",
      dataLinkKey: "americas",
      url: "https://example.com/americas"
    },
    emeaCard: {
      label: "Book EMEA",
      dataLinkKey: "emea",
      url: "https://example.com/emea"
    },
    apacCard: {
      label: "Book APAC",
      dataLinkKey: "apac",
      url: "https://example.com/apac"
    }
  },

  // Secondary coverage link under "Need full team coverage?"
  // `dataLinkKey` must match the `data-link` attribute in index.html.
  additionalCoverageLink: {
    worldwideAvailability: {
      label: "View worldwide availability",
      dataLinkKey: "worldwide",
      url: "https://example.com/worldwide"
    }
  },

  // MSP-aware resource routing for the two onboarding cards.
  // The page uses lowercase `?msp=` and `?headless=` query params.
  // Matching is still case-insensitive; missing, empty, or unknown MSP values fall back to Shopify.
  // `?headless=true` adds extra setup docs for headless storefronts.
  resourceRouting: {
    queryParam: "msp",
    defaultMsp: "shopify",
    headlessQueryParam: "headless",
    defaultHeadless: false
  },

  // Bulleted checklist links in the two info cards.
  // `sectionKey` must match `data-resource-section` / `data-resource-list` in index.html.
  checklistSections: {
    beforeKickoff: {
      title: "Configuration before kickoff",
      description: "Phase 2 is configuration. Complete as much setup as you can before kickoff so we can validate everything faster on the call.",
      sectionKey: "beforeKickoff",
      itemsByMsp: {
        shopify: [
          { label: "Triple Pixel", url: "https://example.com/shopify/triple-pixel" },
          { label: "Key integrations", url: "https://example.com/shopify/key-integrations" },
          { label: "Tracking settings and UTM rules", url: "https://example.com/shopify/tracking-and-utm-rules" }
        ],
        woocommerce: [
          { label: "Triple Pixel", url: "https://example.com/woocommerce/triple-pixel" },
          { label: "Key integrations", url: "https://example.com/woocommerce/key-integrations" },
          { label: "Tracking settings and UTM rules", url: "https://example.com/woocommerce/tracking-and-utm-rules" }
        ],
        bigcommerce: [
          { label: "Triple Pixel", url: "https://example.com/bigcommerce/triple-pixel" },
          { label: "Key integrations", url: "https://example.com/bigcommerce/key-integrations" },
          { label: "Tracking settings and UTM rules", url: "https://example.com/bigcommerce/tracking-and-utm-rules" }
        ],
        custom: [
          { label: "Custom storefront prerequisites", url: "https://example.com/custom/storefront-prerequisites" },
          { label: "Data layer and event mapping", url: "https://example.com/custom/data-layer-and-event-mapping" },
          { label: "Tracking settings and UTM rules", url: "https://example.com/custom/tracking-and-utm-rules" },
          { label: "Integration planning", url: "https://example.com/custom/integration-planning" }
        ]
      },
      headlessItemsByMsp: {
        shopify: [
          { label: "Headless storefront pixel setup", url: "https://example.com/shopify/headless-pixel-setup" },
          { label: "Headless event verification", url: "https://example.com/shopify/headless-event-verification" }
        ],
        woocommerce: [
          { label: "Headless storefront pixel setup", url: "https://example.com/woocommerce/headless-pixel-setup" },
          { label: "Headless event verification", url: "https://example.com/woocommerce/headless-event-verification" }
        ],
        bigcommerce: [
          { label: "Headless storefront pixel setup", url: "https://example.com/bigcommerce/headless-pixel-setup" },
          { label: "Headless event verification", url: "https://example.com/bigcommerce/headless-event-verification" }
        ],
        custom: [
          { label: "Headless storefront pixel setup", url: "https://example.com/custom/headless-pixel-setup" },
          { label: "Headless event verification", url: "https://example.com/custom/headless-event-verification" }
        ]
      }
    },
    kickoffOutcomes: {
      title: "Activation after kickoff",
      description: "Phase 3 is activation. Leaving kickoff, your team should know what is configured, what still needs to be finished, and what to use as training begins.",
      sectionKey: "kickoffOutcomes",
      itemsByMsp: {
        shopify: [
          { label: "Summary Dashboard", url: "https://example.com/shopify/summary-dashboard" },
          { label: "Attribution Dashboard", url: "https://example.com/shopify/attribution-dashboard" },
          { label: "Creative Analysis", url: "https://example.com/shopify/creative-analysis" },
          { label: "Cohort Analysis", url: "https://example.com/shopify/cohort-analysis" },
          { label: "Customer Segments", url: "https://example.com/shopify/customer-segments" }
        ],
        woocommerce: [
          { label: "Summary Dashboard", url: "https://example.com/woocommerce/summary-dashboard" },
          { label: "Attribution Dashboard", url: "https://example.com/woocommerce/attribution-dashboard" },
          { label: "Creative Analysis", url: "https://example.com/woocommerce/creative-analysis" },
          { label: "Cohort Analysis", url: "https://example.com/woocommerce/cohort-analysis" },
          { label: "Customer Segments", url: "https://example.com/woocommerce/customer-segments" }
        ],
        bigcommerce: [
          { label: "Summary Dashboard", url: "https://example.com/bigcommerce/summary-dashboard" },
          { label: "Attribution Dashboard", url: "https://example.com/bigcommerce/attribution-dashboard" },
          { label: "Creative Analysis", url: "https://example.com/bigcommerce/creative-analysis" },
          { label: "Cohort Analysis", url: "https://example.com/bigcommerce/cohort-analysis" },
          { label: "Customer Segments", url: "https://example.com/bigcommerce/customer-segments" }
        ],
        custom: [
          { label: "Implementation path review", url: "https://example.com/custom/implementation-path-review" },
          { label: "Summary Dashboard", url: "https://example.com/custom/summary-dashboard" },
          { label: "Attribution Dashboard", url: "https://example.com/custom/attribution-dashboard" },
          { label: "Creative Analysis", url: "https://example.com/custom/creative-analysis" },
          { label: "Customer Segments", url: "https://example.com/custom/customer-segments" }
        ]
      }
    }
  }
};
