// ============================================
// AD TEMPLATE CONFIGURATION
// ============================================
// Brand: McGrew Real Estate
// Campaign: Property & Floor Plan Explorer - Featured Homes
// Ad Unit: 300x600
// Version: 1.0.12
//
// This config follows the standardized structure used across all ad units
// for consistent brand content mapping, state management, and tracking.

window.AD_CONFIG = {

  // ============================================
  // META - AD IDENTITY & METADATA
  // ============================================
  meta: {
    adUnit: "300x600", // Ad dimensions
    adTitle: "McGrew Real Estate - Featured Homes - 300x600", // Browser tab title
    client: "McGrew Real Estate", // Brand name
    campaign: "Property & Floor Plan Explorer - Featured Homes", // Campaign name
    version: "1.0.12" // Template version
  },

  // ============================================
  // THEME - VISUAL DESIGN SYSTEM
  // ============================================
  theme: {
    colors: {
      // Background colors
      backgroundPrimary: "#272727", // Main browsing canvas
      backgroundHeader: "#ffffff", // Persistent logo header
      backgroundCard: "#ffffff", // Selected property details
      backgroundGallery: "#f2f2f2", // Gallery frame before an image loads
      backgroundFacts: "#f2f2f2", // Property facts row
      backgroundForm: "#f2f2f2", // Form screen
      backgroundFormContext: "#ffffff", // Selected property summary in form
      backgroundConfirmation: "#f2f2f2", // Confirmation screen
      backgroundConfirmationContext: "#ffffff", // Submitted property summary
      backgroundPrivacy: "#ffffff", // Privacy dialog panel
      modalOverlayBg: "rgba(0,0,0,0.42)", // Backdrop over the current form

      // Text colors
      textCollectionTitle: "#ffffff", // Collection heading
      textPropertyTitle: "#202020", // Selected property address
      textPropertyLocation: "#606060", // Selected property location
      textPriceLabel: "#606060", // Price caption
      textPriceValue: "#d31144", // Configured asking price
      textFactValue: "#202020", // Property fact values
      textFactLabel: "#202020", // Property fact captions
      textFormHeading: "#202020", // Form heading
      textFormContext: "#202020", // Property summary in form
      textFormLabel: "#202020", // Form field labels
      textFormConsent: "#606060", // Contact consent sentence
      textFormError: "#a50d34", // Validation and submission feedback
      textConfirmationHeading: "#202020", // Confirmation heading
      textConfirmationBody: "#202020", // Submission receipt sentence
      textConfirmationFollowup: "#606060", // Agent follow-up sentence
      textConfirmationAddress: "#202020", // Submitted property address
      textConfirmationLocation: "#606060", // Submitted property location
      textPrivacyTitle: "#202020", // Privacy dialog title
      textPrivacyBody: "#606060", // Privacy notice paragraphs

      // Button colors
      buttonCtaBg: "#d31144", // Request button background
      buttonCtaHoverBg: "#b30e39", // Request button hover background
      buttonCtaText: "#ffffff", // Request button label
      buttonExploreBg: "rgba(255,255,255,0)", // Listing clickout background
      buttonExploreHoverBg: "rgba(255,255,255,0.12)", // Listing clickout hover background
      buttonExploreBorder: "rgba(255,255,255,0.7)", // Listing clickout border
      buttonExploreText: "#ffffff", // Listing clickout label
      buttonSubmitBg: "#d31144", // Submit button background
      buttonSubmitHoverBg: "#b30e39", // Submit button hover background
      buttonSubmitText: "#ffffff", // Submit button label
      buttonSubmitDisabledBg: "#c9c9c9", // Submit button when consent or valid fields are missing, or submission is pending
      buttonSubmitDisabledText: "#606060", // Disabled submit label
      buttonSubmitSpinnerTrack: "rgba(96,96,96,0.22)", // Pending submission spinner track
      buttonSubmitSpinnerFill: "#606060", // Pending submission spinner progress
      buttonBrowseBg: "#d31144", // Return from confirmation background
      buttonBrowseHoverBg: "#b30e39", // Return from confirmation hover background
      buttonBrowseText: "#ffffff", // Return from confirmation label
      buttonBackBg: "rgba(255,255,255,0)", // Back button background
      buttonBackHoverBg: "rgba(211,17,68,0.07)", // Back button hover background
      buttonBackText: "#d31144", // Back button label and glyph
      buttonBackDisabledText: "#606060", // Back button while submission is pending
      buttonCollectionBg: "rgba(255,255,255,0)", // Collection arrow background
      buttonCollectionHoverBg: "rgba(255,255,255,0.12)", // Collection arrow hover background
      buttonCollectionText: "#ffffff", // Collection arrow glyphs
      buttonGalleryBg: "rgba(255,255,255,0.93)", // Gallery arrow disc background
      buttonGalleryHoverBg: "#ffffff", // Gallery arrow hover disc background
      buttonGalleryText: "#242424", // Gallery arrow glyphs
      buttonGalleryBorder: "rgba(0,0,0,0.13)", // Gallery arrow disc border
      buttonGalleryHoverBorder: "rgba(211,17,68,0.35)", // Gallery disc border on hover
      buttonGalleryHoverShadow: "rgba(0,0,0,0.18)", // Gallery disc elevation on hover
      buttonCollectionHoverBorder: "rgba(255,255,255,0.18)", // Collection control inset border on hover
      buttonCtaHoverShadow: "rgba(211,17,68,0.3)", // Request button elevation on hover
      buttonExploreHoverShadow: "rgba(0,0,0,0.18)", // Listing button elevation on hover
      buttonSubmitHoverShadow: "rgba(211,17,68,0.22)", // Submit button elevation on hover
      buttonBrowseHoverShadow: "rgba(211,17,68,0.22)", // Confirmation button elevation on hover
      buttonSheenEdge: "rgba(255,255,255,0)", // Edges of the CTA light sweep
      buttonSheenHighlight: "rgba(255,255,255,0.22)", // Center of the CTA light sweep
      buttonFocusRing: "#d31144", // Keyboard focus ring on controls
      buttonConsentLinkText: "#d31144", // Consent row policy link
      buttonConsentLinkHoverText: "#b30e39", // Consent row policy link on hover
      buttonPrivacyCloseBg: "rgba(255,255,255,0)", // Privacy close button background
      buttonPrivacyCloseHoverBg: "#f2f2f2", // Privacy close button on hover
      buttonPrivacyCloseIcon: "#606060", // Privacy close indicator
      buttonPrivacyBackBg: "#d31144", // Privacy return button background
      buttonPrivacyBackHoverBg: "#b30e39", // Privacy return button on hover
      buttonPrivacyBackText: "#ffffff", // Privacy return button label
      buttonPrivacyBackHoverShadow: "rgba(211,17,68,0.22)", // Privacy return button hover elevation
      buttonPrivacyPolicyText: "#d31144", // Full privacy policy link
      buttonPrivacyPolicyHoverText: "#b30e39", // Full privacy policy link on hover
      buttonPrivacyTermsText: "#d31144", // Full terms of use link
      buttonPrivacyTermsHoverText: "#b30e39", // Full terms of use link on hover

      // Thumbnail colors
      thumbnailBg: "#f2f2f2", // Thumbnail frame before an image loads
      thumbnailBorderActive: "#d31144", // Selected thumbnail inset border
      thumbnailBorderInactive: "#777777", // Unselected thumbnail inset border
      thumbnailBorderHover: "#ffffff", // Unselected thumbnail hover border
      thumbnailTextActive: "#ffffff", // Selected thumbnail caption
      thumbnailTextInactive: "#d7d7d7", // Unselected thumbnail caption
      thumbnailHoverShadow: "rgba(0,0,0,0.25)", // Thumbnail elevation on hover
      thumbnailSelectedGlow: "rgba(211,17,68,0.22)", // Selected thumbnail outer emphasis

      // Input colors
      inputBg: "#ffffff", // Form field background
      inputText: "#202020", // Entered field values
      inputPlaceholder: "#606060", // Optional placeholder text
      inputBorder: "#d7d7d7", // Default and filled field border
      inputFocusBorder: "#777777", // Focused field border
      inputFocusGlow: "rgba(119,119,119,0.15)", // Focused field outline
      inputErrorBorder: "#a50d34", // Invalid field border
      inputErrorIcon: "#a50d34", // Invalid field warning icon
      inputHoverBorder: "#a5a5a5", // Field border on hover before focus
      inputHoverShadow: "rgba(0,0,0,0.04)", // Field elevation on hover
      textFormLabelFocus: "#404040", // Label emphasis while editing a field

      // Consent checkbox colors
      checkboxBg: "#ffffff", // Unchecked consent box background
      checkboxBorder: "#777777", // Unchecked consent box border
      checkboxCheckedBg: "#d31144", // Checked consent box background
      checkboxCheckedBorder: "#d31144", // Checked consent box border
      checkboxHoverBorder: "#d31144", // Consent box border on hover
      checkboxFocusRing: "#d31144", // Consent keyboard focus ring
      checkboxErrorBorder: "#a50d34", // Missing required consent after attempted submission

      // Privacy scrollbar colors
      scrollbarPrivacyTrack: "#ededed", // Privacy scroll track
      scrollbarPrivacyThumb: "#9a9a9a", // Privacy scroll thumb
      scrollbarPrivacyThumbHover: "#d31144", // Privacy scroll thumb on hover or focus

      // Borders and shadows
      borderCanvas: "#d7d7d7", // Outer ad frame
      headerBorderBottom: "#d31144", // Header separator
      shadowGalleryArrow: "rgba(0,0,0,0.08)", // Gallery control shadow
      shadowCard: "rgba(0,0,0,0.06)", // Property card resting elevation
      shadowCardHover: "rgba(0,0,0,0.2)", // Property card elevation on hover
      borderPrivacyDivider: "#e8e8e8", // Privacy header and footer dividers
      shadowPrivacy: "rgba(0,0,0,0.22)", // Privacy panel elevation
      textFactHoverValue: "#d31144", // Fact value emphasis on hover

      // Gallery and confirmation indicators
      galleryLabelBg: "rgba(255,255,255,0.93)", // Photo view label background
      galleryLabelText: "#242424", // Photo view label text
      galleryCounterBg: "rgba(255,255,255,0.93)", // Photo counter background
      galleryCounterText: "#242424", // Photo counter text
      galleryLabelHoverBg: "#ffffff", // Photo label background on hover
      galleryLabelHoverText: "#d31144", // Photo label text on hover
      galleryLabelHoverShadow: "rgba(0,0,0,0.14)", // Photo label elevation on hover
      galleryCounterHoverBg: "#ffffff", // Photo counter background on hover
      galleryCounterHoverText: "#d31144", // Photo counter text on hover
      galleryCounterHoverShadow: "rgba(0,0,0,0.14)", // Photo counter elevation on hover
      confirmationRing: "rgba(211,17,68,0.22)", // Confirmation arrival ring
      confirmationIconBg: "#d31144", // Confirmation checkmark disc
      confirmationIconText: "#ffffff" // Confirmation checkmark glyph
    },
    typography: {
      fontPrimary: "'Lato', sans-serif", // Interface and form family
      fontSecondary: "'Lato', sans-serif", // Property and screen heading family
      customFonts: [
        {
          family: "Lato",
          source: "local",
          weight: 400,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/lato-400.woff2", format: "woff2" },
            { url: "assets/fonts/lato-400.woff", format: "woff" }
          ]
        },
        {
          family: "Lato",
          source: "local",
          weight: 700,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/lato-700.woff2", format: "woff2" },
            { url: "assets/fonts/lato-700.woff", format: "woff" }
          ]
        }
      ]
    },
    assets: {
      logo: "assets/mcgrew-logo.png", // Persistent brand logo
      iconCollectionPrevious: "assets/icon-collection-previous.svg", // Previous home options control
      iconCollectionNext: "assets/icon-collection-next.svg", // Next home options control
      iconGalleryPrevious: "assets/icon-gallery-previous.svg", // Previous property photo control
      iconGalleryNext: "assets/icon-gallery-next.svg", // Next property photo control
      iconConfirmationCheck: "assets/icon-confirmation-check.svg", // Request confirmation indicator
      iconConsentCheck: "assets/icon-consent-check.svg" // Consent checkmark from the approved design
    }
  },

  // ============================================
  // CONTENT - TEXT, BUTTONS & PROPERTIES
  // ============================================
  content: {
    logo: {
      alt: "" // min 0 chars, max 40 chars
    },
    accessibility: {
      adLabel: "McGrew Real Estate featured homes", // min 10 chars, max 70 chars
      collectionLabel: "Choose a featured home", // min 10 chars, max 45 chars
      collectionNavigationLabel: "Browse home pages", // min 8 chars, max 40 chars
      propertySelection: "Select {title}", // min 8 chars, max 70 chars
      galleryLabel: "Photos for {title}", // min 8 chars, max 70 chars
      galleryPrevious: "Previous image for {title}", // min 10 chars, max 80 chars
      galleryNext: "Next image for {title}", // min 10 chars, max 80 chars
      galleryCounter: "Image {current} of {total}", // min 8 chars, max 40 chars
      exploreLabel: "Explore home at {title} (opens in a new tab)", // min 15 chars, max 100 chars
      visibleProperties: "Showing home options {positions} of {total}" // min 15 chars, max 80 chars
    },
    headlines: {
      collection: "Featured Homes" // min 8 chars, max 28 chars
    },
    property: {
      priceLabel: "ASKING PRICE", // min 5 chars, max 18 chars
      imageCounter: "{current} of {total}", // min 6 chars, max 18 chars
      contextSeparator: " · " // min 1 chars, max 5 chars
    },
    buttons: {
      cta: {
        text: "Request Showing", // min 4 chars, max 18 chars
        minChars: 4,
        maxChars: 18,
        action: "openForm"
      },
      explore: {
        text: "Explore Home", // min 4 chars, max 18 chars
        minChars: 4,
        maxChars: 18,
        action: "externalLink",
        useClickTag: false // Secondary clickout keeps the selected property's destination
      },
      collectionPrevious: {
        icon: "iconCollectionPrevious", // Theme asset key for the control icon
        text: "Previous homes", // min 8 chars, max 25 chars
        minChars: 8,
        maxChars: 25,
        action: "previousProperties",
        ariaLabel: "Previous home options" // min 10 chars, max 45 chars
      },
      collectionNext: {
        icon: "iconCollectionNext", // Theme asset key for the control icon
        text: "Next homes", // min 8 chars, max 25 chars
        minChars: 8,
        maxChars: 25,
        action: "nextProperties",
        ariaLabel: "Next home options" // min 10 chars, max 45 chars
      },
      galleryPrevious: {
        icon: "iconGalleryPrevious", // Theme asset key for the control icon
        text: "Previous image", // min 8 chars, max 25 chars
        minChars: 8,
        maxChars: 25,
        action: "previousImage"
      },
      galleryNext: {
        icon: "iconGalleryNext", // Theme asset key for the control icon
        text: "Next image", // min 8 chars, max 25 chars
        minChars: 8,
        maxChars: 25,
        action: "nextImage"
      }
    },
    form: {
      heading: "See it in person.", // min 8 chars, max 23 chars
      backCta: {
        text: "Back", // min 4 chars, max 14 chars
        minChars: 4,
        maxChars: 14,
        action: "closeForm",
        glyph: "←" // min 1 chars, max 1 chars
      },
      fields: {
        name: {
          label: "Name", // min 4 chars, max 25 chars
          placeholder: "", // min 0 chars, max 30 chars
          required: true,
          maxLength: 100,
          error: "Please enter your name." // min 12 chars, max 80 chars
        },
        email: {
          label: "Email", // min 4 chars, max 25 chars
          placeholder: "", // min 0 chars, max 30 chars
          required: true,
          maxLength: 254,
          error: "Please enter a valid email address." // min 12 chars, max 80 chars
        },
        mobile: {
          label: "Phone (optional)", // min 4 chars, max 25 chars
          placeholder: "", // min 0 chars, max 30 chars
          required: false,
          maxLength: 30,
          minDigits: 10,
          maxDigits: 15,
          formatUS: true,
          error: "Please enter a valid phone number or leave it blank." // min 12 chars, max 80 chars
        },
        message: {
          label: "Message (optional)", // min 4 chars, max 25 chars
          placeholder: "", // min 0 chars, max 60 chars
          required: false,
          maxLength: 2000,
          error: "Please check your message." // min 12 chars, max 80 chars
        }
      },
      consent: {
        required: true, // Require an explicit unchecked-by-default consent choice
        text: "I agree to be contacted about my inquiry and accept the ", // min 20 chars, max 70 chars
        error: "Please agree to the Privacy & Terms before sending your request.", // min 20 chars, max 90 chars
        privacyCta: {
          text: "Privacy & Terms.", // min 10 chars, max 22 chars
          minChars: 10,
          maxChars: 22,
          action: "openPrivacy"
        }
      },
      submitCta: {
        text: "Send Showing Request", // min 8 chars, max 29 chars
        minChars: 8,
        maxChars: 29,
        action: "submitForm",
        pendingText: "Sending request…" // min 8 chars, max 29 chars
      },
      messages: {
        submissionError: "We couldn’t send your request. Please try again." // min 15 chars, max 90 chars
      }
    },
    privacy: {
      noticeVersion: "1.0.0", // Consent notice version captured with submitted leads
      title: "Privacy & Terms", // min 10 chars, max 24 chars
      contentLabel: "Privacy and terms content", // min 15 chars, max 45 chars
      scrollbarLabel: "Scroll Privacy and Terms", // min 15 chars, max 45 chars
      scrollProgress: "{percent}% scrolled", // min 8 chars, max 28 chars
      linkSeparator: "  ·  ", // min 1 chars, max 8 chars
      paragraphs: [
        "By submitting this form, you ask {advertiser} (the advertiser) to respond to your inquiry. The details you provide may include your name, email address, optional phone number, and information about your request.", // min 60 chars, max 500 chars
        "The advertiser may use these details to respond, provide requested information, and arrange follow-up related to your inquiry. If you provide a phone number, you may be contacted at that number about your request.", // min 60 chars, max 500 chars
        "Your information may be handled by service providers that host this form, deliver submissions, or manage the advertiser’s customer communications. The advertiser’s Privacy Policy explains its collection, use, sharing, retention, and protection of personal information.", // min 60 chars, max 500 chars
        "You may ask the advertiser to stop follow-up or ask about accessing, correcting, or deleting your information using the contact details in its Privacy Policy. Available rights and any limits depend on applicable law.", // min 60 chars, max 500 chars
        "This inquiry consent does not, by itself, authorize marketing text messages or automated or prerecorded marketing calls. Where separate consent is required for those communications, it must be obtained separately.", // min 60 chars, max 500 chars
        "Sending an inquiry does not complete a purchase or guarantee pricing, availability, eligibility, or an appointment. Any resulting offer or service is subject to the advertiser’s applicable terms and confirmation.", // min 60 chars, max 500 chars
        "The website or app showing this ad may have its own privacy notice and controls for cookies and advertising data. Those choices are separate from this inquiry." // min 60 chars, max 500 chars
      ],
      closeCta: {
        text: "Close Privacy and Terms", // min 10 chars, max 45 chars
        minChars: 10,
        maxChars: 45,
        action: "closePrivacy"
      },
      backCta: {
        text: "Back to Form", // min 8 chars, max 24 chars
        minChars: 8,
        maxChars: 24,
        action: "closePrivacy"
      },
      policyCta: {
        text: "Privacy Policy", // min 8 chars, max 24 chars
        minChars: 8,
        maxChars: 24,
        action: "externalLink",
        url: "https://www.askmcgrew.com/privacy-policy", // Advertiser's full privacy notice
        useClickTag: false // Preserve the configured policy destination
      },
      termsCta: {
        text: "Terms of Use", // min 8 chars, max 24 chars
        minChars: 8,
        maxChars: 24,
        action: "externalLink",
        url: "https://www.askmcgrew.com/terms-of-use", // Advertiser's full terms
        useClickTag: false // Preserve the configured terms destination
      }
    },
    confirmation: {
      heading: "Thank you!", // min 8 chars, max 18 chars
      body: "Your showing request has been received.", // min 15 chars, max 45 chars
      followup: "A McGrew agent will follow up with you.", // min 15 chars, max 48 chars
      browseCta: {
        text: "Browse homes", // min 4 chars, max 29 chars
        minChars: 4,
        maxChars: 29,
        action: "externalLink",
        url: "https://www.askmcgrew.com/", // Confirmation browsing destination
        useClickTag: false // Preserve the configured confirmation destination
      }
    },
    properties: [
      {
        id: "mg-166771",
        listingId: "166771",
        title: "4563 Larissa Drive", // min 8 chars, max 28 chars
        thumbnailLabel: "Larissa Dr.", // min 4 chars, max 16 chars
        location: "Lawrence, KS 66049", // min 8 chars, max 42 chars
        price: "$349,900", // min 4 chars, max 14 chars
        url: "https://www.askmcgrew.com/listing?id=166771_489", // Selected property listing destination
        thumbnail: {
          src: "assets/larissa-dr-01-exterior.jpg", // Property selection image
          alt: "", // min 0 chars, max 100 chars
          position: "center center" // Thumbnail crop position
        },
        facts: [
          {
            value: "3", // min 1 chars, max 8 chars
            label: "beds" // min 3 chars, max 8 chars
          },
          {
            value: "3", // min 1 chars, max 8 chars
            label: "baths" // min 3 chars, max 8 chars
          },
          {
            value: "1,593", // min 1 chars, max 8 chars
            label: "sq ft" // min 3 chars, max 8 chars
          }
        ],
        images: [
          {
            src: "assets/larissa-dr-01-exterior.jpg", // Selected property gallery image
            alt: "Exterior for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Exterior", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-02-living-room.webp", // Selected property gallery image
            alt: "Living room for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Living room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-03-kitchen.webp", // Selected property gallery image
            alt: "Kitchen for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Kitchen", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-04-dining-area.webp", // Selected property gallery image
            alt: "Dining area for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Dining area", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-05-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-06-bathroom.webp", // Selected property gallery image
            alt: "Bathroom for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Bathroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-07-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-08-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-09-laundry-room.webp", // Selected property gallery image
            alt: "Laundry room for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Laundry room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/larissa-dr-10-patio-yard.webp", // Selected property gallery image
            alt: "Patio & yard for 4563 Larissa Drive", // min 12 chars, max 100 chars
            label: "Patio & yard", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          }
        ]
      },
      {
        id: "mg-166725",
        listingId: "166725",
        title: "2208 Riviera Drive", // min 8 chars, max 28 chars
        thumbnailLabel: "Riviera Dr.", // min 4 chars, max 16 chars
        location: "Lawrence, KS 66047", // min 8 chars, max 42 chars
        price: "$419,500", // min 4 chars, max 14 chars
        url: "https://www.askmcgrew.com/listing?id=166725_489", // Selected property listing destination
        thumbnail: {
          src: "assets/riviera-dr-01-exterior.jpg", // Property selection image
          alt: "", // min 0 chars, max 100 chars
          position: "center center" // Thumbnail crop position
        },
        facts: [
          {
            value: "4", // min 1 chars, max 8 chars
            label: "beds" // min 3 chars, max 8 chars
          },
          {
            value: "3", // min 1 chars, max 8 chars
            label: "baths" // min 3 chars, max 8 chars
          },
          {
            value: "3,047", // min 1 chars, max 8 chars
            label: "sq ft" // min 3 chars, max 8 chars
          }
        ],
        images: [
          {
            src: "assets/riviera-dr-01-exterior.jpg", // Selected property gallery image
            alt: "Exterior for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Exterior", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-02-living-room.webp", // Selected property gallery image
            alt: "Living room for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Living room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-03-kitchen.webp", // Selected property gallery image
            alt: "Kitchen for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Kitchen", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-04-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-05-bathroom.webp", // Selected property gallery image
            alt: "Bathroom for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Bathroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-06-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-07-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-08-basement.webp", // Selected property gallery image
            alt: "Basement for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Basement", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-09-patio.webp", // Selected property gallery image
            alt: "Patio for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Patio", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/riviera-dr-10-backyard.webp", // Selected property gallery image
            alt: "Backyard for 2208 Riviera Drive", // min 12 chars, max 100 chars
            label: "Backyard", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          }
        ]
      },
      {
        id: "mg-166723",
        listingId: "166723",
        title: "1145 Emery Road", // min 8 chars, max 28 chars
        thumbnailLabel: "Emery Rd.", // min 4 chars, max 16 chars
        location: "Lawrence, KS 66044", // min 8 chars, max 42 chars
        price: "$580,000", // min 4 chars, max 14 chars
        url: "https://www.askmcgrew.com/listing?id=166723_489", // Selected property listing destination
        thumbnail: {
          src: "assets/emery-rd-01-exterior.jpg", // Property selection image
          alt: "", // min 0 chars, max 100 chars
          position: "center center" // Thumbnail crop position
        },
        facts: [
          {
            value: "4", // min 1 chars, max 8 chars
            label: "beds" // min 3 chars, max 8 chars
          },
          {
            value: "3", // min 1 chars, max 8 chars
            label: "baths" // min 3 chars, max 8 chars
          },
          {
            value: "2,677", // min 1 chars, max 8 chars
            label: "sq ft" // min 3 chars, max 8 chars
          }
        ],
        images: [
          {
            src: "assets/emery-rd-01-exterior.jpg", // Selected property gallery image
            alt: "Exterior for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Exterior", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-02-living-room.webp", // Selected property gallery image
            alt: "Living room for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Living room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-03-family-room.webp", // Selected property gallery image
            alt: "Family room for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Family room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-04-kitchen.webp", // Selected property gallery image
            alt: "Kitchen for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Kitchen", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-05-dining-room.webp", // Selected property gallery image
            alt: "Dining room for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Dining room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-06-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-07-bathroom.webp", // Selected property gallery image
            alt: "Bathroom for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Bathroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-08-attic-bedroom.webp", // Selected property gallery image
            alt: "Attic bedroom for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Attic bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-09-sunroom.webp", // Selected property gallery image
            alt: "Sunroom for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Sunroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/emery-rd-10-patio.webp", // Selected property gallery image
            alt: "Patio for 1145 Emery Road", // min 12 chars, max 100 chars
            label: "Patio", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          }
        ]
      },
      {
        id: "mg-166754",
        listingId: "166754",
        title: "1905 W 3rd Terrace", // min 8 chars, max 28 chars
        thumbnailLabel: "W 3rd Ter.", // min 4 chars, max 16 chars
        location: "Lawrence, KS 66044", // min 8 chars, max 42 chars
        price: "$215,000", // min 4 chars, max 14 chars
        url: "https://www.askmcgrew.com/listing?id=166754_489", // Selected property listing destination
        thumbnail: {
          src: "assets/w-3rd-ter-01-exterior.webp", // Property selection image
          alt: "", // min 0 chars, max 100 chars
          position: "center center" // Thumbnail crop position
        },
        facts: [
          {
            value: "2", // min 1 chars, max 8 chars
            label: "beds" // min 3 chars, max 8 chars
          },
          {
            value: "2", // min 1 chars, max 8 chars
            label: "baths" // min 3 chars, max 8 chars
          },
          {
            value: "1,257", // min 1 chars, max 8 chars
            label: "sq ft" // min 3 chars, max 8 chars
          }
        ],
        images: [
          {
            src: "assets/w-3rd-ter-01-exterior.webp", // Selected property gallery image
            alt: "Exterior for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Exterior", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-02-living-room.webp", // Selected property gallery image
            alt: "Living room for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Living room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-03-kitchen.webp", // Selected property gallery image
            alt: "Kitchen for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Kitchen", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-04-loft.webp", // Selected property gallery image
            alt: "Loft for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Loft", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-05-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-06-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-07-bathroom.webp", // Selected property gallery image
            alt: "Bathroom for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Bathroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-08-powder-room.webp", // Selected property gallery image
            alt: "Powder room for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Powder room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-09-laundry-room.webp", // Selected property gallery image
            alt: "Laundry room for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Laundry room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/w-3rd-ter-10-patio.webp", // Selected property gallery image
            alt: "Patio for 1905 W 3rd Terrace", // min 12 chars, max 100 chars
            label: "Patio", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          }
        ]
      },
      {
        id: "mg-166781",
        listingId: "166781",
        title: "996 E 750 Road", // min 8 chars, max 28 chars
        thumbnailLabel: "E 750 Rd.", // min 4 chars, max 16 chars
        location: "Lawrence, KS 66047", // min 8 chars, max 42 chars
        price: "$644,900", // min 4 chars, max 14 chars
        url: "https://www.askmcgrew.com/listing?id=166781_489", // Selected property listing destination
        thumbnail: {
          src: "assets/e-750-rd-01-exterior.webp", // Property selection image
          alt: "", // min 0 chars, max 100 chars
          position: "center center" // Thumbnail crop position
        },
        facts: [
          {
            value: "5", // min 1 chars, max 8 chars
            label: "beds" // min 3 chars, max 8 chars
          },
          {
            value: "4", // min 1 chars, max 8 chars
            label: "baths" // min 3 chars, max 8 chars
          },
          {
            value: "2,801", // min 1 chars, max 8 chars
            label: "sq ft" // min 3 chars, max 8 chars
          }
        ],
        images: [
          {
            src: "assets/e-750-rd-01-exterior.webp", // Selected property gallery image
            alt: "Exterior for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Exterior", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-02-living-room.webp", // Selected property gallery image
            alt: "Living room for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Living room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-03-kitchen.webp", // Selected property gallery image
            alt: "Kitchen for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Kitchen", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-04-dining-area.webp", // Selected property gallery image
            alt: "Dining area for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Dining area", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-05-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-06-bathroom.webp", // Selected property gallery image
            alt: "Bathroom for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Bathroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-07-basement.webp", // Selected property gallery image
            alt: "Basement for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Basement", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-08-deck.webp", // Selected property gallery image
            alt: "Deck for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Deck", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-09-workshop.webp", // Selected property gallery image
            alt: "Workshop for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Workshop", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/e-750-rd-10-aerial-view.webp", // Selected property gallery image
            alt: "Aerial view for 996 E 750 Road", // min 12 chars, max 100 chars
            label: "Aerial view", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          }
        ]
      },
      {
        id: "mg-166750",
        listingId: "166750",
        title: "4440 Roundabout Circle", // min 8 chars, max 28 chars
        thumbnailLabel: "Roundabout Cir.", // min 4 chars, max 16 chars
        location: "Lawrence, KS 66049", // min 8 chars, max 42 chars
        price: "$509,900", // min 4 chars, max 14 chars
        url: "https://www.askmcgrew.com/listing?id=166750_489", // Selected property listing destination
        thumbnail: {
          src: "assets/roundabout-cir-01-exterior.webp", // Property selection image
          alt: "", // min 0 chars, max 100 chars
          position: "center center" // Thumbnail crop position
        },
        facts: [
          {
            value: "4", // min 1 chars, max 8 chars
            label: "beds" // min 3 chars, max 8 chars
          },
          {
            value: "3", // min 1 chars, max 8 chars
            label: "baths" // min 3 chars, max 8 chars
          },
          {
            value: "3,107", // min 1 chars, max 8 chars
            label: "sq ft" // min 3 chars, max 8 chars
          }
        ],
        images: [
          {
            src: "assets/roundabout-cir-01-exterior.webp", // Selected property gallery image
            alt: "Exterior for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Exterior", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-02-living-room.webp", // Selected property gallery image
            alt: "Living room for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Living room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-03-kitchen.webp", // Selected property gallery image
            alt: "Kitchen for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Kitchen", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-04-dining-area.webp", // Selected property gallery image
            alt: "Dining area for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Dining area", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-05-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-06-bathroom.webp", // Selected property gallery image
            alt: "Bathroom for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Bathroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-07-recreation-room.webp", // Selected property gallery image
            alt: "Recreation room for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Recreation room", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-08-bedroom.webp", // Selected property gallery image
            alt: "Bedroom for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Bedroom", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-09-covered-patio.webp", // Selected property gallery image
            alt: "Covered patio for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Covered patio", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          },
          {
            src: "assets/roundabout-cir-10-backyard.webp", // Selected property gallery image
            alt: "Backyard for 4440 Roundabout Circle", // min 12 chars, max 100 chars
            label: "Backyard", // min 4 chars, max 25 chars
            position: "center center", // Gallery crop position
            fit: "cover" // Use contain for floor plans in companion templates
          }
        ]
      }
    ]
  },

  // ============================================
  // MEDIA - CAROUSEL BEHAVIOR
  // ============================================
  media: {
    carousel: {
      visibleItems: 3, // Maximum thumbnails shown together
      pageStep: 3, // Properties advanced by one collection gesture
      swipeThreshold: 35, // Horizontal travel required for paging in pixels
      gestureSlop: 12, // Travel before distinguishing a tap from a swipe
      axisRatio: 1.25, // Horizontal travel relative to vertical travel
      autoAdvance: {
        enabled: true, // Automatically feature the next property while browsing
        interval: 6000, // Time between featured properties in milliseconds
        pauseOnHover: true // Pause while the pointer is inside the entire ad frame
      }
    }
  },

  // ============================================
  // ANIMATIONS - MOTION & INTERACTION TIMING
  // ============================================
  animations: {
    enabled: true, // Enable motion while honoring reduced-motion preferences
    easing: "cubic-bezier(0.22,1,0.36,1)", // Entrance and content transition easing
    springEasing: "cubic-bezier(0.2,0.9,0.3,1.15)", // Selection and confirmation easing
    entranceDuration: 560, // Initial element entrance duration in milliseconds
    entranceStagger: 50, // Delay between entrance elements in milliseconds
    screenDuration: 320, // Crossfade duration between ad screens in milliseconds
    imageDuration: 520, // Photo crossfade duration in milliseconds
    imageDriftDuration: 700, // Photo hover zoom duration in milliseconds
    contentDuration: 380, // Property text reveal duration in milliseconds
    contentStagger: 35, // Delay between property text elements in milliseconds
    pageDuration: 320, // Thumbnail page arrival duration in milliseconds
    controlDuration: 220, // Hover and press response duration in milliseconds
    sheenDuration: 650, // CTA light sweep duration in milliseconds
    validationDuration: 260, // Invalid field indicator arrival duration in milliseconds
    loadingDuration: 800, // Pending submission spinner cycle in milliseconds
    confirmationDuration: 650, // Confirmation icon and ring arrival duration in milliseconds
    preloadDelay: 700, // Idle fallback delay for nearby photo preloading in milliseconds
    privacyDuration: 320, // Privacy dialog entrance duration in milliseconds
    privacyBackdropDuration: 200, // Privacy backdrop fade duration in milliseconds
    privacyExitDuration: 220 // Privacy dialog exit duration in milliseconds
  },

  // ============================================
  // STATES - INITIAL VIEW & SELECTION
  // ============================================
  states: {
    initial: "initial", // initial, formActive, or confirmation for review
    selectedPropertyId: "mg-166771", // Property featured on first load
    selectedImageIndex: 0, // Zero-based gallery position on first load
    thumbnailStart: 0 // Zero-based collection position on first load
  },

  // ============================================
  // LEAD - FORM SUBMISSION & WEBHOOK
  // ============================================
  lead: {
    webhook: {
      url: "YOUR_WEBHOOK_URL_HERE", // Replace with the campaign's HTTPS endpoint
      enabled: false, // Enable only after replacing the placeholder URL
      timeout: 15000, // Maximum submission duration in milliseconds

      // Metadata: Static values merged into webhook payload.
      // These values identify the campaign and source in your backend/CRM.
      metadata: {
        campaign: "McGrew Real Estate - Featured Homes",
        adUnit: "300x600",
        source: "programmatic_ad"
      },

      // Payload template: Defines the structure sent to webhook endpoint.
      // Empty strings are placeholders populated from form inputs and config.
      // firstName/lastName/email/mobile come from user input.
      // timestamp is generated at submit time.
      // campaign, adUnit, source come from metadata above.
      payloadTemplate: {
        firstName: "",
        lastName: "",
        fullName: "",
        email: "",
        mobile: "",
        message: "",
        consent: "", // Explicit inquiry consent choice
        consentTimestamp: "", // Time the consent checkbox was accepted
        consentVersion: "", // Version of the notice associated with consent
        privacyPolicyUrl: "", // Full privacy notice available at acceptance
        termsOfUseUrl: "", // Full terms available at acceptance
        timestamp: "",
        campaign: "",
        adUnit: "",
        source: "",
        propertyId: "",
        propertyAddress: "",
        listingUrl: ""
      }
    }
  },

  // ============================================
  // TRACKING - ANALYTICS EVENTS
  // ============================================
  tracking: {
    enabled: true,
    events: {
      ad_loaded: {
        name: "ad_loaded",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      cta_clicked: {
        name: "cta_clicked",
        enabled: true,
        category: "conversion",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      property_selected: {
        name: "property_selected",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      property_auto_advanced: {
        name: "property_auto_advanced",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      collection_paged: {
        name: "collection_paged",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      gallery_changed: {
        name: "gallery_changed",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      form_started: {
        name: "form_started",
        enabled: true,
        category: "conversion",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      form_submitted: {
        name: "form_submitted",
        enabled: true,
        category: "conversion",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      form_error: {
        name: "form_error",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      consent_changed: {
        name: "consent_changed",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      privacy_opened: {
        name: "privacy_opened",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      privacy_closed: {
        name: "privacy_closed",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      privacy_link_clicked: {
        name: "privacy_link_clicked",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      state_changed: {
        name: "state_changed",
        enabled: true,
        category: "engagement",

        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",

        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      }
    }
  }
};
