// ============================================
// AD TEMPLATE CONFIGURATION
// ============================================
// Brand: World Car Kia
// Campaign: Kia SUV Finder
// Ad Unit: 300x600
// Version: 1.0.0
//
// This config follows the standardized structure used across all ad units
// for consistent brand content mapping, state management, and tracking.

window.AD_CONFIG = {

  // ============================================
  // META - Ad Identity & Metadata
  // ============================================
  meta: {
    adUnit: "300x600",                                        // Ad dimensions
    adTitle: "World Car Kia - Kia SUV Finder - 300x600",     // Browser tab title
    client: "World Car Kia",                                  // Brand name
    campaign: "Kia SUV Finder",                               // Campaign name
    version: "1.0.0"                                          // Template version
  },

  // ============================================
  // THEME - Visual Design System
  // ============================================
  theme: {
    colors: {
      // Background colors
      backgroundAd: "#edf1f4",                   // Outer ad and cards-grid background
      backgroundHeader: "#ffffff",               // Header bar background
      backgroundFooter: "#05141f",               // Footer bar background
      backgroundBannerStart: "#0c2b44",          // Finder banner gradient start (left)
      backgroundBannerEnd: "#123b58",            // Finder banner gradient end (right)
      backgroundNavigation: "#0c2b44",           // Detail navigation bar background
      backgroundCard: "#ffffff",                 // Individual vehicle card background
      backgroundArrowBtn: "#e8edf0",             // Card arrow button default state
      backgroundArrowBtnActive: "#ea0029",       // Card arrow button hover/active/focus state
      backgroundPill: "#edf1f4",                 // Feature highlight pill background
      backgroundFeatureStart: "#f8fafb",         // Detail feature image gradient start
      backgroundFeatureMid: "#dde5ea",           // Detail feature image gradient midpoint
      backgroundFeatureEnd: "#cbd7df",           // Detail feature image gradient end

      // Border colors
      borderAd: "#d8dde1",                       // Outer ad container border
      borderHeader: "#e6eaed",                   // Header bottom divider border
      borderCard: "rgba(12,43,68,0.1)",          // Vehicle card default border
      borderCardActive: "#ea0029",               // Vehicle card hover/active/focus border

      // Text colors
      textWhite: "#ffffff",                      // General white text on dark backgrounds
      textFooterDealerDim: "rgba(255,255,255,0.58)", // Dealer name label in footer (dimmed)
      textBannerTag: "#d6e2ea",                  // Finder banner tag label text
      textBannerSubheadline: "rgba(255,255,255,0.78)", // Finder banner subheadline text
      textCardCategory: "#657688",               // Vehicle category label on card
      textCardName: "#0c2b44",                   // Vehicle name on card
      textCardTagline: "#65717b",                // Vehicle tagline on card
      textNavCategory: "#dce6ec",                // Category label in detail navigation bar
      textDetailTag: "#657688",                  // Detail view "Meet your match" tag text
      textModelTagline: "#657688",               // Model tagline below name in detail view
      textFeatureLabel: "#657688",               // Year/model label on feature image
      textModelName: "#0c2b44",                  // Large model name heading in detail view
      textBestFor: "#263f54",                    // Best for description body copy
      textPill: "#425a6e",                       // Feature highlight pill text

      // Accent colors
      accentRed: "#ea0029",                      // Kia red for CTAs and active accents

      // Shadow colors
      shadowCard: "rgba(12,43,68,0.08)",          // Card drop shadow

      // Banner decorative overlay colors
      bannerStreakHigh: "rgba(255,255,255,0.26)",  // Finder banner light streak — bright band
      bannerStreakLow: "rgba(255,255,255,0.18)",   // Finder banner light streak — soft band
      bannerRadialStart: "rgba(101,118,136,0.9)", // Finder banner radial highlight — center
      bannerRadialEnd: "rgba(101,118,136,0)"      // Finder banner radial highlight — fade edge
    },
    typography: {
      fontPrimary: "'Inter', sans-serif",         // Primary font - UI labels and body text
      fontSecondary: "Arial, sans-serif",          // Secondary font - headings and navigation labels
      customFonts: [
        {
          family: "Inter",
          source: "google",
          url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        }
      ]
    },
    assets: {
      logoWorldCar: "assets/world-car-logo.png", // World Car dealer co-brand logo
      logoKia: "assets/kia-logo.png"             // Kia brand logo
    }
  },

  // ============================================
  // CONTENT - All Text & Vehicle Data
  // ============================================
  content: {
    dealer: {
      name: "World Car Kia",                     // min 8 chars, max 20 chars
      location: "San Antonio, TX"                // min 8 chars, max 20 chars
    },
    finder: {
      tagLabel: "SUV Finder",                    // min 6 chars, max 14 chars
      headline: "Your Kia. Your size.",          // min 15 chars, max 28 chars
      subheadline: "Find the SUV that fits your crew.", // min 20 chars, max 45 chars
      shopAllCta: {
        text: "Shop All SUVs",                   // min 8 chars, max 18 chars
        minChars: 8,
        maxChars: 18,
        action: "externalLink",
        url: "https://www.worldcarkia.com/search/?cy=78233&md=9096&md=175&md=173&md=8496" // All Kia SUV inventory landing page URL
      }
    },
    navigation: {
      backLabel: "All SUVs",                     // min 5 chars, max 12 chars
      detailTagLabel: "Meet your match"           // min 8 chars, max 20 chars
    },
    vehicleOrder: ["seltos", "sportage", "sorento", "telluride"], // Grid display order: row-by-row, left to right
    vehicles: {
      seltos: {
        id: "seltos",
        name: "Seltos",                          // min 5 chars, max 10 chars
        category: "Small 2-row",                 // min 8 chars, max 16 chars
        tagline: "Compact & city-ready",         // min 12 chars, max 28 chars
        year: "2026",
        bestFor: "Urban drivers and smaller households who want an SUV that is easy to maneuver and park.", // min 50 chars, max 120 chars
        highlights: [
          "5-passenger seating",                 // min 8 chars, max 24 chars
          "Available AWD",                       // min 8 chars, max 24 chars
          "Compact footprint"                    // min 8 chars, max 24 chars
        ],
        image: "assets/seltos.png",
        shopCta: {
          text: "Shop Seltos",                   // min 8 chars, max 16 chars
          minChars: 8,
          maxChars: 16,
          action: "externalLink",
          url: "https://www.worldcarkia.com/search/?cy=78233&md=9096"       // Seltos inventory page URL
        }
      },
      sportage: {
        id: "sportage",
        name: "Sportage",                        // min 5 chars, max 10 chars
        category: "Compact 2-row",               // min 8 chars, max 16 chars
        tagline: "Versatile everyday space",     // min 12 chars, max 28 chars
        year: "2026",
        bestFor: "Daily drivers who want more passenger and cargo flexibility without moving up to a 3-row SUV.", // min 50 chars, max 120 chars
        highlights: [
          "5-passenger seating",                 // min 8 chars, max 24 chars
          "Available AWD",                       // min 8 chars, max 24 chars
          "Flexible cargo space"                 // min 8 chars, max 24 chars
        ],
        image: "assets/sportage.png",
        shopCta: {
          text: "Shop Sportage",                 // min 8 chars, max 16 chars
          minChars: 8,
          maxChars: 16,
          action: "externalLink",
          url: "https://www.worldcarkia.com/search/?cy=78233&md=175"     // Sportage inventory page URL
        }
      },
      sorento: {
        id: "sorento",
        name: "Sorento",                         // min 5 chars, max 10 chars
        category: "Midsize 3-row",               // min 8 chars, max 16 chars
        tagline: "Flexible family seating",      // min 12 chars, max 28 chars
        year: "2026",
        bestFor: "Growing families who want three rows without moving up to a larger SUV.", // min 50 chars, max 120 chars
        highlights: [
          "3-row seating",                       // min 8 chars, max 24 chars
          "Up to 7 passengers",                  // min 8 chars, max 24 chars
          "Available AWD"                        // min 8 chars, max 24 chars
        ],
        image: "assets/sorento.png",
        shopCta: {
          text: "Shop Sorento",                  // min 8 chars, max 16 chars
          minChars: 8,
          maxChars: 16,
          action: "externalLink",
          url: "https://www.worldcarkia.com/search/?cy=78233&md=173"      // Sorento inventory page URL
        }
      },
      telluride: {
        id: "telluride",
        name: "Telluride",                       // min 5 chars, max 12 chars
        category: "Large 3-row",                 // min 8 chars, max 16 chars
        tagline: "Room for the whole crew",      // min 12 chars, max 28 chars
        year: "2026",
        bestFor: "Larger families and road-trippers who prioritize passenger space and comfort.", // min 50 chars, max 120 chars
        highlights: [
          "3-row seating",                       // min 8 chars, max 24 chars
          "Up to 8 passengers",                  // min 8 chars, max 24 chars
          "Available AWD"                        // min 8 chars, max 24 chars
        ],
        image: "assets/telluride.png",
        shopCta: {
          text: "Shop Telluride",                // min 8 chars, max 16 chars
          minChars: 8,
          maxChars: 16,
          action: "externalLink",
          url: "https://www.worldcarkia.com/search/?cy=78233&md=8496"    // Telluride inventory page URL
        }
      }
    }
  },

  // ============================================
  // PIXELS - Third-party Tracking Pixels
  // ============================================
  pixels: {
    stackadapt: {
      enabled: false,
      sdkUrl: "https://tags.srv.stackadapt.com/events.js",   // StackAdapt events SDK

      // Conversion pixel tokens — fired on primary CTA clicks
      conversion: {
        shopAll: ""   // Shop All SUVs CTA conversion token
      },

      // Retargeting pixel token — fired on all interactive element engagements
      retargeting: {
        token: ""   // Retargeting token
      }
    }
  },

  // ============================================
  // TRACKING - Analytics Events
  // ============================================
  tracking: {
    enabled: true,
    events: {
      ad_loaded: {
        name: "ad_loaded",
        enabled: true,
        category: "engagement"
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      card_clicked: {
        name: "card_clicked",
        enabled: true,
        category: "engagement"
        // convPixel: "",
        // rtPixel: ""
      },
      cta_clicked: {
        name: "cta_clicked",
        enabled: true,
        category: "conversion"
        // convPixel: "https://pixel.provider.com/conversion?event=cta_click",
        // rtPixel: "https://pixel.provider.com/retarget?event=cta_click"
      },
      state_changed: {
        name: "state_changed",
        enabled: true,
        category: "engagement"
        // convPixel: "",
        // rtPixel: ""
      }
    }
  }

};
