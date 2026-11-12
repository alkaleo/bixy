// ============================================
// AD TEMPLATE CONFIGURATION
// ============================================
// Brand: Hy-Vee
// Campaign: Recipes & Ingredient Explorer
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
    adUnit: "300x600",                                                          // Ad dimensions
    adTitle: "Hy-Vee - Recipes & Ingredient Explorer - 300x600",             // Browser tab title
    client: "Hy-Vee",                                                           // Brand name
    campaign: "Recipes & Ingredient Explorer",                                // Campaign name
    version: "1.0.0"                                                            // Template version
  },

  // ============================================
  // THEME - Visual Design System
  // ============================================
  theme: {
    colors: {
      backgroundPrimary: "#f7f2e9", // Main ad background
      backgroundHeader: "#d82117", // Header background
      backgroundCard: "#ffffff", // Recipe card background
      backgroundMedia: "#f6f0e7", // Hero fallback background
      backgroundMeta: "#f6f0e7", // Time and serving pill background
      backgroundIngredientMeta: "#edf7f5", // Ingredient-count pill background
      backgroundIngredientCard: "#fffaf4", // Ingredient card background
      backgroundImageStage: "#ffffff", // Ingredient image stage background
      backgroundMealTag: "rgba(37,31,29,0.88)", // Active recipe meal tag background
      backgroundBreakfastLabel: "#fff1c9", // Breakfast navigation label background
      backgroundLunchLabel: "#dff3f6", // Lunch navigation label background
      backgroundDinnerLabel: "#fde5e2", // Dinner navigation label background
      buttonPrimaryBg: "#d82117", // Shop and full-recipe button background
      buttonPrimaryText: "#ffffff", // Shop and full-recipe button text
      textPrimary: "#231f1d", // Recipe and ingredient title text
      textSecondary: "#7a736d", // Recipe description text
      textSection: "#d82117", // Section heading text
      textIngredientAmount: "#167572", // Ingredient amount text
      textIngredientCount: "#167572", // Ingredient-count pill text
      textMealTag: "#ffffff", // Active recipe meal tag text
      textBreakfastLabel: "#8b6200", // Breakfast navigation label text
      textLunchLabel: "#14727b", // Lunch navigation label text
      textDinnerLabel: "#bf3932", // Dinner navigation label text
      borderCard: "#eadfd5", // Recipe card border
      borderIngredientCard: "#eadfd4", // Ingredient card border
      borderNavigation: "#ded4ca", // Inactive recipe navigation border
      borderNavigationActive: "#d82117", // Active recipe navigation border
      borderMealTag: "rgba(255,255,255,0.34)", // Active recipe meal tag border
      borderMealDot: "rgba(255,255,255,0.65)", // Meal indicator dot border
      mealBreakfastDot: "#e7b346", // Breakfast meal indicator
      mealLunchDot: "#24a1b2", // Lunch meal indicator
      mealDinnerDot: "#e4675f", // Dinner meal indicator
      scrollbarTrack: "#e8ddd3", // Ingredient scrollbar track
      scrollbarThumb: "#d82117", // Ingredient scrollbar thumb
      focusOutline: "#167572", // Keyboard focus outline
      cardShadow: "rgba(78,53,35,0.12)", // Recipe card shadow
      buttonHoverShadow: "rgba(0,0,0,0.16)", // Main shop button hover shadow
      mealTagShadow: "rgba(23,17,14,0.22)", // Active recipe meal tag shadow
      transparent: "transparent" // Hidden native scrollbar color
    },
    typography: {
      fontPrimary: "'Montserrat:Regular', 'Montserrat', sans-serif", // Primary body font stack
      fontPrimaryBold: "'Montserrat:Bold', 'Montserrat', sans-serif", // Primary display font stack
      fontSecondary: "'Arial', sans-serif", // CTA fallback font stack
      customFonts: [
        {
          family: "Montserrat:Bold",
          source: "cdn",
          weight: 700,
          style: "normal",
          display: "swap",
          sources: [
            {
              url: "https://static.figma.com/font/Montserrat_wght__2",
              format: "woff2"
            }
          ]
        },
        {
          family: "Montserrat:Regular",
          source: "cdn",
          weight: 400,
          style: "normal",
          display: "swap",
          sources: [
            {
              url: "https://static.figma.com/font/Montserrat_wght__2",
              format: "woff2"
            }
          ]
        }
      ]
    },
    assets: {
      logo: "assets/hyvee-logo.svg", // Brand logo
      circleDecor: "assets/circle-decor.svg" // Header decoration
    }
  },

  // ============================================
  // AUTO-ADVANCE - Recipe Rotation Settings
  // ============================================
  autoAdvance: {
    enabled: true, // Enable automatic recipe rotation
    intervalMs: 7000, // Milliseconds each recipe remains active (min 1000)
    pauseOnHover: true, // Pause while a pointer hovers anywhere over the ad
    stopOnInteraction: true, // Permanently stop after pointer, click, or keyboard interaction
    pauseWhenHidden: true // Pause while the browser tab is not visible
  },

  // ============================================
  // CONTENT - Labels & Recipe Data
  // ============================================
  content: {
    logo: {
      src: "assets/hyvee-logo.svg", // Brand logo image
      alt: "Hy-Vee logo" // min 8 chars, max 24 chars
    },
    labels: {
      ingredientSection: "SHOP THE INGREDIENTS", // min 16 chars, max 24 chars
      moreIdeasSection: "MORE MEAL IDEAS", // min 12 chars, max 20 chars
      ingredientScrollbar: "Ingredient list scrollbar" // min 18 chars, max 32 chars
    },
    buttons: {
      ingredientShop: {
        text: "SHOP", // min 4 chars, max 7 chars
        minChars: 4,
        maxChars: 7,
        action: "externalLink"
      },
      fullRecipe: {
        text: "VIEW FULL RECIPE", // min 10 chars, max 20 chars
        minChars: 10,
        maxChars: 20,
        action: "externalLink"
      }
    },
    initialRecipeId: "breakfast",
    recipes: [
      {
        id: "breakfast",
        meal: "BREAKFAST", // min 5 chars, max 12 chars
        title: "Berry-Granola Parfaits", // min 12 chars, max 28 chars
        navTitle: "Berry-Granola Parfaits", // min 10 chars, max 24 chars
        description: "Fresh berries, vanilla yogurt and crunchy granola.", // min 30 chars, max 58 chars
        time: "5 MIN", // min 4 chars, max 8 chars
        serves: "SERVES 2", // min 7 chars, max 10 chars
        ingredientCount: "5 INGREDIENTS", // min 11 chars, max 15 chars
        mealTheme: "breakfast",
        heroImage: "assets/recipe-berry-granola-parfaits.png", // Recipe hero and navigation image
        heroAlt: "Berry-granola parfaits with fresh berries", // min 24 chars, max 55 chars
        heroPosition: "center 50%",
        fullRecipeUrl: "https://www.hy-vee.com/discover/recipes/berry-granola-parfaits",
        ingredients: [
          {
            amount: "1 CUP NEEDED", // min 6 chars, max 18 chars
            name: "Fresh Strawberries", // min 8 chars, max 30 chars
            image: "assets/ingredient-strawberries.png", // Ingredient product image
            alt: "Fresh strawberries package", // min 12 chars, max 40 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/267295/fresh-strawberries-1lb"
          },
          {
            amount: "1 CUP NEEDED", // min 6 chars, max 18 chars
            name: "Driscoll's Red Raspberries", // min 8 chars, max 30 chars
            image: "assets/ingredient-raspberries.png", // Ingredient product image
            alt: "Driscoll's red raspberries package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/71321/driscoll-s-red-raspberries-6-oz"
          },
          {
            amount: "2 CUPS NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Vanilla Yogurt", // min 8 chars, max 30 chars
            image: "assets/ingredient-vanilla-yogurt.png", // Ingredient product image
            alt: "Hy-Vee vanilla yogurt container", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/152291/hy-vee-low-fat-vanilla-yogurt"
          },
          {
            amount: "1 CUP NEEDED", // min 6 chars, max 18 chars
            name: "Good Graces Protein Granola", // min 8 chars, max 30 chars
            image: "assets/ingredient-granola.png", // Ingredient product image
            alt: "Good Graces protein granola package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/3335801/good-graces-gluten-free-oats-and-honey-protein-granola"
          },
          {
            amount: "2 TBSP NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Select Maple Syrup", // min 8 chars, max 30 chars
            image: "assets/ingredient-maple-syrup.png", // Ingredient product image
            alt: "Hy-Vee Select maple syrup bottle", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/22365/hy-vee-select-100-pure-maple-syrup"
          }
        ]
      },
      {
        id: "lunch",
        meal: "LUNCH", // min 5 chars, max 12 chars
        title: "Southwest Chicken Salad", // min 12 chars, max 28 chars
        navTitle: "Southwest Chicken Salad", // min 10 chars, max 24 chars
        description: "A colorful main-dish salad ready in 15 minutes.", // min 30 chars, max 58 chars
        time: "15 MIN", // min 4 chars, max 8 chars
        serves: "SERVES 4", // min 7 chars, max 10 chars
        ingredientCount: "7 INGREDIENTS", // min 11 chars, max 15 chars
        mealTheme: "lunch",
        heroImage: "assets/recipe-southwest-chicken-salad.png", // Recipe hero and navigation image
        heroAlt: "Southwest chicken salad with vegetables", // min 24 chars, max 55 chars
        heroPosition: "center 50%",
        fullRecipeUrl: "https://www.hy-vee.com/discover/recipes/southwest-chicken-salad",
        ingredients: [
          {
            amount: "1 PACKAGE NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Southwestern Chicken Strips", // min 8 chars, max 38 chars
            image: "assets/ingredient-southwest-chicken.png", // Ingredient product image
            alt: "Hy-Vee Southwestern chicken strips package", // min 12 chars, max 55 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/153289/hy-vee-grilled-southwestern-chicken-breast-strips"
          },
          {
            amount: "½ CUP NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Black Beans", // min 8 chars, max 30 chars
            image: "assets/ingredient-black-beans.png", // Ingredient product image
            alt: "Hy-Vee black beans can", // min 12 chars, max 40 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/58082/hy-vee-black-beans"
          },
          {
            amount: "1 TOMATO NEEDED", // min 6 chars, max 18 chars
            name: "Tomatoes on the Vine", // min 8 chars, max 30 chars
            image: "assets/ingredient-tomato.png", // Ingredient product image
            alt: "Fresh tomatoes on the vine", // min 12 chars, max 40 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/8824/tomatoes-on-the-vine"
          },
          {
            amount: "1 PACKAGE NEEDED", // min 6 chars, max 18 chars
            name: "Dole American Blend Salad", // min 8 chars, max 30 chars
            image: "assets/ingredient-salad-blend.png", // Ingredient product image
            alt: "Dole American Blend salad package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/59348/dole-american-blend-salad-12-oz"
          },
          {
            amount: "¾ CUP NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Mexican Cheese", // min 8 chars, max 30 chars
            image: "assets/ingredient-mexican-cheese.png", // Ingredient product image
            alt: "Hy-Vee Mexican cheese package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/57210/hy-vee-finely-shredded-mexican-natural-cheese"
          },
          {
            amount: "2 TBSP NEEDED", // min 6 chars, max 18 chars
            name: "Fresh Green Onions", // min 8 chars, max 30 chars
            image: "assets/ingredient-green-onions.png", // Ingredient product image
            alt: "Fresh green onions", // min 12 chars, max 40 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/8652/green-onions-scallions"
          },
          {
            amount: "½ CUP NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Light Ranch Dressing", // min 8 chars, max 32 chars
            image: "assets/ingredient-light-ranch.png", // Ingredient product image
            alt: "Hy-Vee light ranch dressing bottle", // min 12 chars, max 48 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/3917539/hy-vee-light-ranch-dressing"
          }
        ]
      },
      {
        id: "dinner",
        meal: "DINNER", // min 5 chars, max 12 chars
        title: "Beef Noodle Bowl", // min 12 chars, max 28 chars
        navTitle: "Beef Noodle Bowl", // min 10 chars, max 24 chars
        description: "Beef, veggies and Sriracha turn ramen into a meal.", // min 30 chars, max 58 chars
        time: "10 MIN", // min 4 chars, max 8 chars
        serves: "SERVES 1", // min 7 chars, max 10 chars
        ingredientCount: "6 INGREDIENTS", // min 11 chars, max 15 chars
        mealTheme: "dinner",
        heroImage: "assets/recipe-beef-noodle-bowl.png", // Recipe hero and navigation image
        heroAlt: "Beef noodle bowl with vegetables and egg", // min 24 chars, max 55 chars
        heroPosition: "center 50%",
        fullRecipeUrl: "https://www.hy-vee.com/discover/recipes/beef-noodle-bowl",
        ingredients: [
          {
            amount: "1 CUP NEEDED", // min 6 chars, max 18 chars
            name: "Maruchan Beef Ramen", // min 8 chars, max 30 chars
            image: "assets/ingredient-beef-ramen.png", // Ingredient product image
            alt: "Maruchan beef ramen package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/52763/maruchan-instant-lunch-beef-flavor-ramen-noodles"
          },
          {
            amount: "1 CUP NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Asian Vegetables", // min 8 chars, max 30 chars
            image: "assets/ingredient-asian-vegetables.png", // Ingredient product image
            alt: "Hy-Vee Asian vegetables package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/57391/hy-vee-asian-vegetables"
          },
          {
            amount: "3 OZ NEEDED", // min 6 chars, max 18 chars
            name: "Di Lusso Roast Beef", // min 8 chars, max 30 chars
            image: "assets/ingredient-roast-beef.png", // Ingredient product image
            alt: "Di Lusso sliced roast beef package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/29189/di-lusso-premium-sliced-choice-rare-roast-beef"
          },
          {
            amount: "½ TSP NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Sriracha Sauce", // min 8 chars, max 30 chars
            image: "assets/ingredient-sriracha.png", // Ingredient product image
            alt: "Hy-Vee Sriracha sauce bottle", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/3992957/hy-vee-sriracha-chili-sauce"
          },
          {
            amount: "1 EGG NEEDED", // min 6 chars, max 18 chars
            name: "Hy-Vee Hard-Boiled Eggs", // min 8 chars, max 30 chars
            image: "assets/ingredient-hard-boiled-eggs.png", // Ingredient product image
            alt: "Hy-Vee hard-boiled eggs package", // min 12 chars, max 45 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/3129726/hy-vee-eggs-hard-cooked-6ct"
          },
          {
            amount: "TO TASTE", // min 6 chars, max 18 chars
            name: "Hy-Vee Black Pepper", // min 8 chars, max 30 chars
            image: "assets/ingredient-black-pepper.png", // Ingredient product image
            alt: "Hy-Vee ground black pepper container", // min 12 chars, max 48 chars
            shopUrl: "https://www.hy-vee.com/aisles-online/p/22603/hy-vee-ground-black-pepper"
          }
        ]
      }
    ]
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
      },
      recipe_selected: {
        name: "recipe_selected",
        enabled: true,
        category: "engagement"
      },
      ingredients_scrolled: {
        name: "ingredients_scrolled",
        enabled: true,
        category: "engagement"
      },
      ingredient_shop_clicked: {
        name: "ingredient_shop_clicked",
        enabled: true,
        category: "conversion"
        // convPixel: "https://pixel.provider.com/conversion?event=ingredient_shop",
        // rtPixel: "https://pixel.provider.com/retarget?event=ingredient_shop"
      },
      full_recipe_clicked: {
        name: "full_recipe_clicked",
        enabled: true,
        category: "conversion"
        // convPixel: "https://pixel.provider.com/conversion?event=full_recipe",
        // rtPixel: "https://pixel.provider.com/retarget?event=full_recipe"
      }
    }
  }
};
