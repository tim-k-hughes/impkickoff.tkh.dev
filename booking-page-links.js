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

  // Bulleted checklist links in the two info cards.
  // `sectionKey` must match `data-resource-list` in index.html.
  checklistSections: {
    beforeKickoff: {
      title: "Before kickoff (optional)",
      sectionKey: "beforeKickoff",
      items: [
        { label: "Triple Pixel", url: "https://example.com/triple-pixel" },
        { label: "Key integrations", url: "https://example.com/key-integrations" },
        { label: "Tracking settings and UTM rules", url: "https://example.com/tracking-and-utm-rules" }
      ]
    },
    kickoffOutcomes: {
      title: "Kickoff outcomes",
      sectionKey: "kickoffOutcomes",
      items: [
        { label: "Summary Dashboard", url: "https://example.com/summary-dashboard" },
        { label: "Attribution Dashboard", url: "https://example.com/attribution-dashboard" },
        { label: "Creative Analysis", url: "https://example.com/creative-analysis" },
        { label: "Cohort Analysis", url: "https://example.com/cohort-analysis" },
        { label: "Customer Segments", url: "https://example.com/customer-segments" }
      ]
    }
  }
};
