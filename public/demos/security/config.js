// ============================================
// AD TEMPLATE CONFIGURATION
// ============================================
// Brand: Vivint
// Campaign: Vivint Lead Generation - 300x600
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
    adUnit: "300x600",              // Ad dimensions
    adTitle: "Vivint - Lead Generation - 300x600", // Browser tab title
    client: "Vivint",               // Brand name
    campaign: "Vivint - Lead Generation - 300x600", // Campaign name
    version: "1.0.0"                // Template version
  },
  
  // ============================================
  // THEME - Visual Design System
  // ============================================
  theme: {
    colors: {
      // Background colors
      backgroundAd: "#ffffff",              // Main ad container background
      backgroundHeader: "#141c1c",          // Header bar background
      backgroundContent: "#212721",         // Content box background
      backgroundInput: "#f6f6f6",           // Input field background
      backgroundProgressBar: "#141c1c",     // Video progress bar container background
      backgroundVideoSection: "#ffffff",    // Video section background
      
      // Text colors
      textLight: "#ffffff",                 // Light text
      textDark: "#141c1c",                  // Dark text
      textSubtitle: "#c0d7da",              // Subtitle text
      
      // Input colors
      inputText: "#141c1c",                 // Text inside inputs
      inputPlaceholder: "rgba(20, 28, 28, 0.5)", // Placeholder text
      inputFocusBorder: "#e2b95d",          // Input border when focused
      inputFocusGlow: "rgba(226, 185, 93, 0.15)", // Glow effect for focused inputs
      
      // Button colors
      buttonSubmitBg: "#e2b95d",            // Submit button background
      buttonSubmitText: "#141c1c",          // Text on submit button
      buttonCallBg: "#edf2f2",              // Call button background
      buttonCallText: "#141c1c",            // Text on call button
      buttonCallBorder: "#141c1c",          // Border for call button
      buttonDisabledBg: "#ffffff",          // Disabled button background
      buttonDisabledText: "rgba(20, 28, 28, 0.5)",   // Disabled button text
      buttonDisabledBorder: "rgba(20, 28, 28, 0.5)", // Disabled button border
      buttonBackBg: "#ffffff",              // Back button background
      buttonBackText: "#141c1c",            // Back button text
      buttonBackBorder: "rgba(20, 28, 28, 0.5)", // Back button border
      buttonFocusOutline: "#e2b95d",        // Focus outline for all buttons
      
      // Border colors
      borderLight: "#f0f4f4",               // Light borders (header, inputs)
      borderDark: "#909999",                // Border for ad container
      
      // Video progress bar
      progressBarBg: "#5f7775",             // Progress bar track background
      progressBarFill: "#ffffff",           // Progress bar fill
      
      // Functional colors
      error: "#DC2626",                     // Error states
      
      // Shadow colors
      shadowIcon: "rgba(0, 0, 0, 0.15)",    // Drop shadow for mute/unmute icon
      shadowVideoProgress: "rgba(0, 0, 0, 0.11)", // Shadow for video progress bar
      shadowButtonHover: "rgba(0, 0, 0, 0.15)"    // Shadow for button hover states
    },
    
    typography: {
      fontPrimary: "'Vivint Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      
      customFonts: [
        {
          family: "Vivint Circular",
          source: "local",
          weight: 400,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/vivint-circular-regular.woff2", format: "woff2" },
            { url: "assets/fonts/vivint-circular-regular.woff", format: "woff" }
          ]
        },
        {
          family: "Vivint Circular",
          source: "local",
          weight: 500,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/vivint-circular-medium.woff2", format: "woff2" },
            { url: "assets/fonts/vivint-circular-medium.woff", format: "woff" }
          ]
        },
        {
          family: "Vivint Circular",
          source: "local",
          weight: 700,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/vivint-circular-bold.woff2", format: "woff2" },
            { url: "assets/fonts/vivint-circular-bold.woff", format: "woff" }
          ]
        }
      ]
    },
    
    assets: {
      logo: "assets/vivint-logo.png",
      iconName: "assets/icon-name.png",
      iconPhone: "assets/icon-phone.png",
      iconEmail: "assets/icon-email.png",
      iconSpeakerMute: "assets/icon-speaker-mute.png",
      iconSpeakerUnmute: "assets/icon-speaker-unmute.png",
      iconPhoneLarge: "assets/icon-phone-large.png" // Large phone icon for confirmation
    },
    
    ui: {
      animations: {
        fadeDuration: 400,          // ms
        hoverLift: "2px",
        transitionTiming: "ease-in-out",
        scaleOnFade: true,
        scaleAmount: 0.95
      },
      
      states: {
        initial: "form",            // form | confirmation | terms
        enableStateMemory: true     // Remember previous state for back navigation
      }
    }
  },
  
  // ============================================
  // MEDIA - Video/Image Content
  // ============================================
  // Abstracted to support multiple media types (video, carousel, static)
  media: {
    type: "video",                  // video | static | carousel
    
    video: {
      src: "assets/vivint-video.mp4",
      poster: null,                 // Optional poster image
      fallbackSrc: null,            // Optional fallback video source
      autoplay: true,
      loop: true,
      muted: true,
      controls: false,
      showMuteButton: true,
      progressBar: {
        enabled: true,
        updateInterval: 100,        // ms
        allowRewind: true,          // Allow user to click/drag backward
        allowForward: false         // Prevent seeking forward
      }
    }
  },
  
  // ============================================
  // CONTENT - All User-Facing Text
  // ============================================
  content: {
    headlines: {
      primary: {
        line1: "Fill out the form below", // Container: 240px, Font: 20px weight 500 (factor 0.55), Char width: 11px, Max per line: 18 chars (min 10, max 18)
        line2: "to get a FREE quote"      // Container: 240px, Font: 20px weight 500 (factor 0.55), Char width: 11px, Max per line: 18 chars (min 10, max 18)
      },
      subtitle: "Or click-to-call below for expert assistance." // Container: 240px, Font: 11px weight 500 (factor 0.55), Char width: 6.05px, Max per line: 33 chars, Lines: 2, Total max: 66 chars (min 30, max 66)
    },
    
    // Terms & Conditions
    terms: {
      title: "Terms & Conditions", // Container: 240px, Font: 20px weight 500, Char width: 11px, Max: 18 chars (min 10, max 18)
      subtitle: "By clicking \"Accept\", you agree by electronic signature to:", // Container: 240px, Font: 11px weight 500, Char width: 6.05px, Max per line: 33 chars, Lines: 3, Total max: 99 chars (min 40, max 99)
      
      items: [
        {
          number: "1.",
          text: "the ",
          linkText: "Electronic Disclosure Agreement",
          linkUrl: "https://www.vivint.com/legal/electronic-disclosure-consent",
          suffix: ";"                // linkText wraps if needed, designed for ~32 chars visible (min 25, max 45)
        },
        {
          number: "2.",
          text: "receive recurring communications from Vivint at the telephone number and email address you provide on this form, including autodialed calls, texts, and prerecorded messages (consent not required to make a purchase; reply \"STOP\" to opt-out of texts or \"HELP\" for help); and",
          linkText: null,
          linkUrl: null,
          suffix: ""                 // Full paragraph text, wraps multiple lines (min 200, max 280)
        },
        {
          number: "3.",
          text: "Vivint's ",
          linkText: "Terms of Service",
          middleText: " and ",
          linkText2: "Privacy Policy",
          linkUrl: "https://www.vivint.com/legal/terms-of-use",
          linkUrl2: "https://www.vivint.com/legal/privacy-policy",
          suffix: "."                // Combined linkText + middleText + linkText2, wraps if needed (min 25, max 50)
        }
      ]
    },
    
    // Confirmation screen
    confirmation: {
      title: "Thanks for reaching out!", // Container: 240px, Font: 20px weight 500, Char width: 11px, Max: 18 chars (min 10, max 27)
      subtitle: "Peace of mind starts here.", // Container: 240px, Font: 11px weight 500, Char width: 6.05px, Max per line: 33 chars, Lines: 1 (min 20, max 33)
      bodyText: "Our security experts will be in touch to customize a system for your home or answer any questions you have.", // Container: 240px, Font: 12px weight 400 (factor 0.5), Char width: 6px, Max per line: 34 chars, Lines: 5, Total max: 170 chars (min 80, max 170)
      callToAction: "Or skip the line and call now." // Container: 240px, Font: 12px weight 500 (factor 0.55), Char width: 6.6px, Max per line: 31 chars, Lines: 2, Total max: 62 chars (min 25, max 62)
    },
    
    // Button labels
    buttons: {
      submit: {
        text: "Get FREE Quote",
        minChars: 8,            // 2-button layout: 132px - 38px padding = 94px, Font: 12px weight 500, Char width: 6.6px, Max: 12 chars
        maxChars: 12,
        action: "submitForm"
      },
      submitDisabled: {
        text: "Get FREE Quote",
        minChars: 8,            // Same constraints as submit button
        maxChars: 12,
        action: "submitForm"
      },
      call: {
        text: "123.456.7890",
        minChars: 8,            // 2-button layout with icon: 94px - 22px (icon+gap) = 72px, Max: 9 chars (NOTE: current text exceeds limit)
        maxChars: 9,
        icon: true,
        url: "tel:+11234567890",
        action: "externalLink"
      },
      accept: {
        text: "Accept",
        minChars: 4,            // 2-button layout: 94px available, Max: 12 chars
        maxChars: 12,
        action: "acceptTerms"
      },
      back: {
        text: "Back",
        minChars: 4,            // 2-button layout: 94px available, Max: 12 chars
        maxChars: 12,
        action: "back"
      }
    }
  },
  
  // ============================================
  // FLOW - Lifecycle (Declarative Only)
  // ============================================
  flow: {
    initialState: "form",
    states: ["idle", "engaged", "form", "submitting", "success", "error"],
    legalState: "legal"
  },
  
  // ============================================
  // LEAD - Fields, Validation, Webhook
  // ============================================
  lead: {
    enabled: true,
    
    fields: [
      {
        id: "name",
        type: "text",
        placeholder: "First and Last Name", // Input width: ~185px, Font: 14px weight 400 (factor 0.5), Char width: 7px, Max: 22 chars (min 10, max 22)
        required: true,
        validation: "text",
        errorMessage: "Please enter your name", // Same constraints as placeholder (min 15, max 30)
        icon: "iconName"
      },
      {
        id: "phone",
        type: "tel",
        placeholder: "Phone Number", // Input width: ~185px, Font: 14px weight 400, Char width: 7px, Max: 22 chars (min 8, max 22)
        required: true,
        validation: "phone",
        errorMessage: "Please enter a valid phone", // Same constraints as placeholder (min 20, max 35)
        icon: "iconPhone"
      },
      {
        id: "email",
        type: "email",
        placeholder: "Email Address", // Input width: ~185px, Font: 14px weight 400, Char width: 7px, Max: 22 chars (min 10, max 22)
        required: true,
        validation: "email",
        errorMessage: "Please enter a valid email", // Same constraints as placeholder (min 20, max 35)
        icon: "iconEmail"
      }
    ],
    
    validation: {
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phoneMinDigits: 10,
      showErrorsOnTouch: true
    },
    
    phoneFormat: {
      enableFormatting: true,
      format: "+1 (XXX) XXX-XXXX",
      formatAlt: "(XXX) XXX-XXXX",
      minDigits: 10
    },
    
    webhook: {
      url: "YOUR_WEBHOOK_URL_HERE",
      enabled: true,
      nonBlocking: true,
      timeout: 5000,
      
      // Metadata: Static values merged into webhook payload.
      // These values identify the campaign and source in your backend/CRM.
      metadata: {
        campaign: "Vivint - Lead Generation - 300x600",
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
        email: "",
        mobile: "",
        timestamp: "",
        campaign: "",
        adUnit: "",
        source: ""
      }
    }
  },
  
  // ============================================
  // TRACKING - Analytics Configuration
  // ============================================
  tracking: {
    enabled: true,
    provider: "custom",             // stackadapt | google | custom | none
    
    events: {
      adLoad: { 
        enabled: true, 
        name: "ad_loaded"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345"
      },
      videoPlay: { 
        enabled: true, 
        name: "video_played"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      videoMute: { 
        enabled: true, 
        name: "video_muted" 
      },
      videoUnmute: { 
        enabled: true, 
        name: "video_unmuted" 
      },
      formStart: { 
        enabled: true, 
        name: "form_started"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      formComplete: { 
        enabled: true, 
        name: "form_completed" 
      },
      formSubmit: { 
        enabled: true, 
        name: "form_submitted"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      termsView: { 
        enabled: true, 
        name: "terms_viewed" 
      },
      termsAccept: { 
        enabled: true, 
        name: "terms_accepted"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      termsDecline: { 
        enabled: true, 
        name: "terms_declined" 
      },
      callClick: { 
        enabled: true, 
        name: "call_clicked"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      confirmationView: { 
        enabled: true, 
        name: "confirmation_viewed" 
      }
    }
  },
  
  // ============================================
  // COMPLIANCE - Legal / Privacy
  // ============================================
  compliance: {
    mode: "gated",
    requiredBeforeSubmit: true,
    googleAdManager: {
      clickTagEnabled: true,
      defaultClickTag: "http://www.google.com"
    },
    textSelectable: false,
    accessibility: {
      ariaLabels: true,
      keyboardNavigation: true
    }
  }
};