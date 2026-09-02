import React from "react";
import { SUPPLY_CATEGORIES } from "@/data/suppliesData";
import { SupplyCard } from "./SupplyCard";

export const SuppliesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
      {SUPPLY_CATEGORIES.map((category) => (
        <SupplyCard key={category.id} category={category} />
      ))}
    </div>
  );
};
