/**
 * The ads shown in the hero browser.
 *
 * Each ad is a self-contained HTML5 bundle (300x600) in /public/demos/<id>/.
 * To add one: drop a folder with an index.html into /public/demos and add a line here.
 * To replace a demo ad with a real one: overwrite the files in its folder.
 */
export type AdIcon = "car" | "cart" | "home" | "briefcase" | "fork" | "bag" | "signal" | "shield";

export type AdEntry = {
  /** Folder name under /public/demos */
  id: string;
  /** Tab label */
  label: string;
  icon: AdIcon;
  /** Fake publisher shown in the page mock next to the ad */
  publisher: string;
};

export const ADS: AdEntry[] = [
  { id: "auto", label: "Auto", icon: "car", publisher: "Daily Drive" },
  { id: "grocery", label: "Grocery", icon: "cart", publisher: "Easy Recipes" },
  { id: "real-estate", label: "Real Estate", icon: "home", publisher: "City News" },
  { id: "restaurants", label: "Restaurants", icon: "fork", publisher: "Weekend Guide" },
  { id: "communications", label: "Telecom", icon: "signal", publisher: "Tech Dispatch" },
  { id: "security", label: "Security", icon: "shield", publisher: "Home Journal" },
];
