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

  // Resource routing for the two onboarding cards.
  // The page uses lowercase `?msp=`, `?headless=`, `?package=`, and `?addon=` query params.
  // `?add-on=` is also accepted as a legacy alias for add-on routing.
  // Matching is case-insensitive. Missing, empty, or unknown MSP values fall back to Shopify.
  resourceRouting: {
    queryParam: "msp",
    defaultMsp: "shopify",
    headlessQueryParam: "headless",
    defaultHeadless: false,
    packageQueryParam: "package",
    defaultPackage: "advanced",
    addonQueryParam: "addon",
    addonQueryParamAliases: ["add-on"]
  },

  // Bulleted checklist links in the two info cards.
  // `sectionKey` must match `data-resource-section` / `data-resource-list` in index.html.
  checklistSections: {
    beforeKickoff: {
      timingLabel: "Going into kickoff",
      title: "Configuration",
      description: "Complete as much setup as you can before your kickoff so we can validate faster on the call and create a clear path into activation.",
      sectionKey: "beforeKickoff",
      headlessItemOverrides: {
        triplePixel: {
          url: "https://example.com/headless/triple-pixel"
        }
      },
      itemsByMsp: {
        shopify: [
          { itemKey: "triplePixel", label: "Install your Triple Pixel", url: "https://example.com/shopify/triple-pixel" },
          { label: "Connect Integrations", url: "https://example.com/shopify/key-integrations" },
          { label: "Add required UTMs", url: "https://example.com/shopify/tracking-and-utm-rules" },
          {
            itemKey: "sonar",
            label: "Enable",
            linkLabelWhenSingleLink: true,
            links: [
              { linkKey: "sonarSend", label: "Sonar Send", url: "https://example.com/shopify/sonar-send" },
              { linkKey: "sonarOptimize", label: "Sonar Optimize", url: "https://example.com/shopify/sonar-optimize" }
            ]
          },
          { label: "Configure and install your Post Purchase Survey", url: "https://example.com/shopify/post-purchase-survey" },
          {
            itemKey: "costs",
            label: "Define",
            links: [
              { linkKey: "cogs", label: "COGS", url: "https://example.com/shopify/cogs" },
              { linkKey: "shippingCosts", label: "Shipping Costs", url: "https://example.com/shopify/shipping-costs" },
              { linkKey: "handlingFees", label: "Handling Fees", url: "https://example.com/shopify/handling-fees" },
              { linkKey: "expenses", label: "Expenses", url: "https://example.com/shopify/expenses" }
            ]
          },
          {
            itemKey: "mapping",
            label: "Map",
            linkJoinStyle: "comma",
            links: [
              { linkKey: "subscriptionOrders", label: "Subscription Orders", url: "https://example.com/shopify/subscription-orders" },
              { linkKey: "affiliatesAndInfluencers", label: "Affiliates and Influencers", url: "https://example.com/shopify/affiliates-and-influencers" }
            ]
          }
        ],
        woocommerce: [
          { itemKey: "triplePixel", label: "Install your Triple Pixel", url: "https://example.com/woocommerce/triple-pixel" },
          { label: "Connect Integrations", url: "https://example.com/woocommerce/key-integrations" },
          { label: "Add required UTMs", url: "https://example.com/woocommerce/tracking-and-utm-rules" },
          {
            itemKey: "sonar",
            label: "Enable",
            linkLabelWhenSingleLink: true,
            links: [
              { linkKey: "sonarSend", label: "Sonar Send", url: "https://example.com/woocommerce/sonar-send" },
              { linkKey: "sonarOptimize", label: "Sonar Optimize", url: "https://example.com/woocommerce/sonar-optimize" }
            ]
          },
          { label: "Configure and install your Post Purchase Survey", url: "https://example.com/woocommerce/post-purchase-survey" },
          {
            itemKey: "costs",
            label: "Define",
            links: [
              { linkKey: "cogs", label: "COGS", url: "https://example.com/woocommerce/cogs" },
              { linkKey: "shippingCosts", label: "Shipping Costs", url: "https://example.com/woocommerce/shipping-costs" },
              { linkKey: "handlingFees", label: "Handling Fees", url: "https://example.com/woocommerce/handling-fees" },
              { linkKey: "expenses", label: "Expenses", url: "https://example.com/woocommerce/expenses" }
            ]
          },
          {
            itemKey: "mapping",
            label: "Map",
            linkJoinStyle: "comma",
            links: [
              { linkKey: "subscriptionOrders", label: "Subscription Orders", url: "https://example.com/woocommerce/subscription-orders" },
              { linkKey: "affiliatesAndInfluencers", label: "Affiliates and Influencers", url: "https://example.com/woocommerce/affiliates-and-influencers" }
            ]
          }
        ],
        bigcommerce: [
          { itemKey: "triplePixel", label: "Install your Triple Pixel", url: "https://example.com/bigcommerce/triple-pixel" },
          { label: "Connect Integrations", url: "https://example.com/bigcommerce/key-integrations" },
          { label: "Add required UTMs", url: "https://example.com/bigcommerce/tracking-and-utm-rules" },
          {
            itemKey: "sonar",
            label: "Enable",
            linkLabelWhenSingleLink: true,
            links: [
              { linkKey: "sonarSend", label: "Sonar Send", url: "https://example.com/bigcommerce/sonar-send" },
              { linkKey: "sonarOptimize", label: "Sonar Optimize", url: "https://example.com/bigcommerce/sonar-optimize" }
            ]
          },
          { label: "Configure and install your Post Purchase Survey", url: "https://example.com/bigcommerce/post-purchase-survey" },
          {
            itemKey: "costs",
            label: "Define",
            links: [
              { linkKey: "cogs", label: "COGS", url: "https://example.com/bigcommerce/cogs" },
              { linkKey: "shippingCosts", label: "Shipping Costs", url: "https://example.com/bigcommerce/shipping-costs" },
              { linkKey: "handlingFees", label: "Handling Fees", url: "https://example.com/bigcommerce/handling-fees" },
              { linkKey: "expenses", label: "Expenses", url: "https://example.com/bigcommerce/expenses" }
            ]
          },
          {
            itemKey: "mapping",
            label: "Map",
            linkJoinStyle: "comma",
            links: [
              { linkKey: "subscriptionOrders", label: "Subscription Orders", url: "https://example.com/bigcommerce/subscription-orders" },
              { linkKey: "affiliatesAndInfluencers", label: "Affiliates and Influencers", url: "https://example.com/bigcommerce/affiliates-and-influencers" }
            ]
          }
        ],
        custom: [
          { itemKey: "triplePixel", label: "Install your Triple Pixel", url: "https://example.com/custom/triple-pixel" },
          { label: "Connect Integrations", url: "https://example.com/custom/key-integrations" },
          { label: "Add required UTMs", url: "https://example.com/custom/tracking-and-utm-rules" },
          {
            itemKey: "sonar",
            label: "Enable",
            linkLabelWhenSingleLink: true,
            links: [
              { linkKey: "sonarSend", label: "Sonar Send", url: "https://example.com/custom/sonar-send" },
              { linkKey: "sonarOptimize", label: "Sonar Optimize", url: "https://example.com/custom/sonar-optimize" }
            ]
          },
          { label: "Configure and install your Post Purchase Survey", url: "https://example.com/custom/post-purchase-survey" },
          {
            itemKey: "costs",
            label: "Define",
            links: [
              { linkKey: "cogs", label: "COGS", url: "https://example.com/custom/cogs" },
              { linkKey: "shippingCosts", label: "Shipping Costs", url: "https://example.com/custom/shipping-costs" },
              { linkKey: "handlingFees", label: "Handling Fees", url: "https://example.com/custom/handling-fees" },
              { linkKey: "expenses", label: "Expenses", url: "https://example.com/custom/expenses" }
            ]
          },
          {
            itemKey: "mapping",
            label: "Map",
            linkJoinStyle: "comma",
            links: [
              { linkKey: "subscriptionOrders", label: "Subscription Orders", url: "https://example.com/custom/subscription-orders" },
              { linkKey: "affiliatesAndInfluencers", label: "Affiliates and Influencers", url: "https://example.com/custom/affiliates-and-influencers" }
            ]
          }
        ]
      },
      packageOverrides: {
        starter: {
          hiddenLinkKeysByItemKey: {
            sonar: ["sonarOptimize"]
          }
        }
      },
      addonOverrides: {
        conversion: {
          callout: {
            badgeLabel: "Included add-on",
            title: "Conversion",
            description: "Your team has access to this add-on setup guide as part of onboarding.",
            items: [
              { label: "Setup Custom Events", url: "https://example.com/add-ons/conversion/setup-custom-events" }
            ]
          }
        }
      }
    },
    kickoffOutcomes: {
      timingLabel: "Leaving kickoff",
      title: "Activation",
      description: "After your kickoff, your team should know what is configured, what still needs to be finished, and what to focus on as activation begins.",
      sectionKey: "kickoffOutcomes",
      items: [
        { itemKey: "summaryDashboard", label: "Summary Dashboard", url: "https://example.com/activation/summary-dashboard" },
        { itemKey: "attributionDashboard", label: "Attribution Dashboard", url: "https://example.com/activation/attribution-dashboard" },
        { itemKey: "creativeAnalysis", label: "Creative Analysis", url: "https://example.com/activation/creative-analysis" },
        { itemKey: "cohortAnalysis", label: "Cohort Analysis", url: "https://example.com/activation/cohort-analysis" },
        { itemKey: "customerSegments", label: "Customer Segments", url: "https://example.com/activation/customer-segments" },
        { itemKey: "aiVisibility", label: "AI Visibility", url: "https://example.com/activation/ai-visibility" },
        { itemKey: "moby", label: "Moby", url: "https://example.com/activation/moby" }
      ],
      packageOverrides: {
        starter: {
          hiddenItemKeys: ["creativeAnalysis", "cohortAnalysis", "customerSegments"]
        },
        professional: {
          additionalItems: [
            { itemKey: "mmm", label: "Getting Started with MMM", url: "https://example.com/activation/mmm" },
            { itemKey: "incrementality", label: "Getting Started with Incrementality", url: "https://example.com/activation/incrementality" }
          ]
        }
      },
      addonOverrides: {
        retention: {
          callout: {
            badgeLabel: "Included add-on",
            title: "Retention",
            description: "Your team has access to this add-on guide as activation gets underway.",
            items: [
              { label: "Sync customer segments", url: "https://example.com/add-ons/retention/sync-customer-segments" }
            ]
          }
        }
      }
    }
  }
};
