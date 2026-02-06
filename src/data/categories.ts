// src/data/categories.ts

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "cameras",
    label: "CAMERAS",
    icon: "📷",
  },
  {
    id: "drones",
    label: "DRONES",
    icon: "🚁",
  },
  {
    id: "laptops",
    label: "LAPTOPS",
    icon: "💻",
  },
  {
    id: "bikes",
    label: "BIKES",
    icon: "🏍️",
  },
  {
    id: "audio",
    label: "AUDIO",
    icon: "🎧",
  },
  {
    id: "gaming",
    label: "GAMING",
    icon: "🎮",
  },
  {
    id: "lighting",
    label: "LIGHTING",
    icon: "💡",
  },
  {
    id: "tools",
    label: "TOOLS",
    icon: "🛠️",
  },
];
