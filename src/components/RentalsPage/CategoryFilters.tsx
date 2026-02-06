"use client";

import { Camera, Bike, Laptop, Wrench, LayoutGrid } from "lucide-react";
import type { ElementType } from "react";
import type { RentalCategory } from "@/dataForDetails/rental.types";

type CategoryFilter = RentalCategory | "All";

type CategoryOption = {
  label: CategoryFilter;
  icon: ElementType;
};

export default function CategoryFilters({
  active,
  onSelect,
}: {
  active: CategoryFilter;
  onSelect: (c: CategoryFilter) => void;
}) {
  const categories: CategoryOption[] = [
    { label: "All", icon: LayoutGrid },
    { label: "Cameras", icon: Camera },
    { label: "Bikes", icon: Bike },
    { label: "Laptops", icon: Laptop },
    { label: "Tools", icon: Wrench },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar">
      {categories.map(({ label, icon: Icon }) => {
        const isActive = active === label;

        return (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
              isActive
                ? "bg-[#5A80E9] border-[#5A80E9] text-white shadow-[0_0_20px_rgba(90,128,233,0.3)]"
                : "bg-[#12131C] border-white/5 text-[#C5C8D7] hover:border-white/20 hover:text-white"
            }`}
          >
            <Icon size={16} />
            <span className="font-bold text-sm">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
