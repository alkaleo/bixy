// ============================================
// AD TEMPLATE CONFIGURATION
// ============================================
// Brand: Ultra Mobile
// Campaign: Scratch & Save
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
    adTitle: "Ultra Mobile - Scratch & Save - 300x600", // Browser tab title
    client: "Ultra Mobile",         // Brand name
    campaign: "Scratch & Save",     // Campaign name
    version: "1.0.0"                // Template version
  },
  
  // ============================================
  // THEME - Visual Design System
  // ============================================
  theme: {
    colors: {
      // Background
      backgroundPrimary: "#663399",              // Main ad background
      backgroundGradientStart: "#412064",        // Background gradient start
      backgroundGradientEnd: "#663399",          // Background gradient end
      
      // Card
      cardBg: "#ffffff",                         // Card background
      cardTextPrimary: "#000000",                // Primary text on card
      cardTextSecondary: "#639",                 // Secondary/accent text on card
      cardGradientBlueStart: "#663399",          // Left gradient start (decorative blur)
      cardGradientBlueEnd: "#2aa9d4",            // Left gradient end (decorative blur)
      cardGradientPinkStart: "#f35ab3",          // Right gradient start (decorative blur)
      cardGradientPinkEnd: "#661ed9",            // Right gradient end (decorative blur)
      cardScratchOverlayStart: "#e5d8fb",        // Scratch overlay gradient start
      cardScratchOverlayEnd: "#b48bf4",          // Scratch overlay gradient end
      cardOutline: "#663399",                    // Card scratch canvas outline
      
      // Button
      buttonCtaBg: "#d4421e",                    // CTA button background
      buttonCtaHoverBg: "#b8381a",               // CTA button hover background
      buttonCtaText: "#ffffff",                  // CTA button text
      
      // UI elements
      dividerLine: "#846d91",                    // Horizontal divider line
      borderPrimary: "#846d91",                  // Primary border color
      
      // Text
      textLight: "#ffffff",                      // Light text
      textDark: "#000000",                       // Dark text
      
      // Shadows
      shadowDark: "rgba(0, 0, 0, 0.2)",          // Dark shadow
      shadowLight: "rgba(0, 0, 0, 0.25)",        // Light shadow
      shadowButtonCtaHover: "rgba(212, 66, 30, 0.4)",   // CTA button hover shadow
      shadowButtonCtaActive: "rgba(212, 66, 30, 0.3)"   // CTA button active shadow
    },
    
    typography: {
      fontPrimary: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSecondary: "'ITC Avant Garde Gothic Pro', 'Avant Garde', sans-serif",
      
      customFonts: [
        {
          family: "Proxima Nova",
          source: "local",
          weight: 300,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/proxima-nova-light.woff2", format: "woff2" },
            { url: "assets/fonts/proxima-nova-light.woff", format: "woff" }
          ]
        },
        {
          family: "Proxima Nova",
          source: "local",
          weight: 600,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/proxima-nova-semibold.woff2", format: "woff2" },
            { url: "assets/fonts/proxima-nova-semibold.woff", format: "woff" }
          ]
        },
        {
          family: "Proxima Nova",
          source: "local",
          weight: 700,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/proxima-nova-bold.woff2", format: "woff2" },
            { url: "assets/fonts/proxima-nova-bold.woff", format: "woff" }
          ]
        },
        {
          family: "Proxima Nova",
          source: "local",
          weight: 800,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/proxima-nova-extrabold.woff2", format: "woff2" },
            { url: "assets/fonts/proxima-nova-extrabold.woff", format: "woff" }
          ]
        },
        {
          family: "Proxima Nova",
          source: "local",
          weight: 900,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/proxima-nova-black.woff2", format: "woff2" },
            { url: "assets/fonts/proxima-nova-black.woff", format: "woff" }
          ]
        },
        {
          family: "ITC Avant Garde Gothic Pro",
          source: "local",
          weight: 400,
          style: "normal",
          display: "swap",
          sources: [
            { url: "assets/fonts/itc-avant-garde-400.woff2", format: "woff2" },
            { url: "assets/fonts/itc-avant-garde-400.woff", format: "woff" }
          ]
        }
      ]
    }
  },
  
  // ============================================
  // CONTENT - All Text & Button Labels
  // ============================================
  content: {
    // Brand Logo
    logo: {
      src: "assets/ultra-logo.png", // Ultra Mobile logo (74x30px)
      alt: "Ultra Mobile Logo" // Alt text for accessibility (min 8, max 25)
    },
    
    // Main Headlines
    headlines: {
      main: "Scratch & Save.", // Container: 140px, Font: 40px weight 900 (factor 0.6), Char width: 24px, Max per line: 5 chars, Lines: 3, Total max: 18 chars (min 8, max 18)
      tagline: "It's not magic—it's affordable." // Centered, ~270px width, Font: 14px weight 800 (factor 0.58), Char width: 8.12px, Max: 35 chars (min 20, max 35)
    },
    
    // Body Copy
    body: {
      intro: "Everything you want in wireless", // Container: 110px, Font: 12px weight 600 (factor 0.55), Char width: 6.6px, Max per line: 14 chars, Lines: 3, Total max: 42 chars (min 20, max 42)
      introSecondary: "—just beneath the surface." // Same container and font as intro (min 20, max 42)
    },
    
    // Scratch Card Content
    scratchCard: {
      // Before Scratch - Overlay Text
      overlay: {
        title: "Scratch to Reveal", // Container: 220px, Font: 24px weight 900 (factor 0.6), Char width: 14.4px, Max: 13 chars per line, Lines: 2, Total max: 26 chars (min 10, max 26)
        subtitle: "An ultra Deal." // Container: 220px, Font: ~16px weight 600 (estimate), Char width: 8.8px, Max: 21 chars (min 8, max 21)
      },
      
      // After Scratch - Revealed Content
      revealed: {
        title: "Plans from", // Container: 220px, Font: 24px weight 900, Char width: 14.4px, Max: 13 chars (min 6, max 13)
        priceMain: "10", // Font: 78px, numeric display, designed for 1-5 digit prices (min 1, max 5)
        priceCurrency: "$", // Font: 45px, currency symbol (min 1, max 2)
        pricePeriod: "/mo", // Font: 39px, period indicator (min 2, max 5)
        description: "Free talk to 90+ countries. ", // Container: 220px, Font: 16px weight 600 (factor 0.55), Char width: 8.8px, Max per line: 21 chars, Lines: 2, Total max: 42 chars (min 20, max 42)
        descriptionSecondary: "No contracts. That's Ultra." // Same constraints as description (min 20, max 42)
      }
    },
    
    // Call-to-Action Buttons
    buttons: {
      shopNow: {
        text: "Shop Now",
        minChars: 5,        // Button width: 100px, ~20px padding, Font: 12px weight 700 (factor 0.58), Char width: 6.96px, Max: 9 chars
        maxChars: 9,
        action: "externalLink",
        url: "https://www.ultramobile.com" // Placeholder - replace with actual URL
      }
    },
    
    // Background Assets
    backgroundImage: {
      src: "assets/background-image.png", // Decorative background image (184x200px)
      alt: "" // Decorative, empty alt acceptable
    }
  },
  
  // ============================================
  // SCRATCH CARD CONFIG
  // ============================================
  scratchCard: {
    enabled: true,
    
    // Scratch Area Dimensions (matches Figma design)
    dimensions: {
      width: 270,
      height: 220
    },
    
    // Scratch Detection
    threshold: 95, // Percentage of area that needs to be scratched to auto-reveal (95%)
    
    // Brush Settings
    brush: {
      size: 60, // Brush diameter in pixels
      type: "round" // round or square
    },
    
    // Animation Settings
    animation: {
      enabled: true,
      autoRevealDuration: 800, // Duration of auto-reveal animation in ms
      fadeInDuration: 400 // Duration of content fade-in
    },
    
    // Touch/Mouse Settings
    interaction: {
      enableTouch: true,
      enableMouse: true,
      cursorType: "pointer" // Cursor style when hovering over scratch area
    },
    
    // Custom Cursor (Coin Icon)
    customCursor: {
      enabled: true,
      image: "assets/coin.svg", // Coin icon displayed as cursor during scratch interaction
      alt: "Scratch cursor" // MAX: 1 line
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
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345"
      },
      
      cta_clicked: {
        name: "cta_clicked",
        enabled: true,
        category: "interaction"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      
      scratch_started: {
        name: "scratch_started",
        enabled: true,
        category: "engagement"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      
      scratch_completed: {
        name: "scratch_completed",
        enabled: true,
        category: "conversion"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      },
      
      card_revealed: {
        name: "card_revealed",
        enabled: true,
        category: "engagement"
        
        // Optional: Conversion tracking pixel (any provider)
        // convPixel: "https://pixel.provider.com/conversion?id=12345",
        
        // Optional: Retargeting pixel (any provider)
        // rtPixel: "https://pixel.provider.com/retarget?id=67890"
      }
    },
    
    provider: "Google Analytics",
    trackingId: "UA-XXXXXXXXX-X" // Placeholder - replace with actual tracking ID
  }
  
};