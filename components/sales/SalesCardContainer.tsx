import { Calendar, Package, ShoppingCart, TrendingUp } from "lucide-react";
import React from "react";
import SalesCard from "./SalesCard";

const cardData = [
  {
    id: 1,
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
        <Package className="w-6 h-6 text-blue-500" />
      </div>
    ),
    title: "Total Products",
    value: "248",
    className: "col-span-1",
  },
  {
    id: 2,
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
        <ShoppingCart className="w-6 h-6 text-green-500" />
      </div>
    ),
    title: "Today's Sales",
    value: "₹12,450",
    className: "col-span-1",
  },
  {
    id: 3,
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100">
        <Calendar className="w-6 h-6 text-pink-500" />
      </div>
    ),
    title: "Cumulative Sales",
    value: "12",
    className: "col-span-1",
  },
  {
    id: 4,
    icon: (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100">
        <TrendingUp className="w-6 h-6 text-purple-500" />
      </div>
    ),
    title: "Revenue Growth",
    value: "+24%",
    className: "col-span-1",
  },
];

const SalesCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cardData.map((card) => (
        <SalesCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          value={card.value}
          className={card.className}
        />
      ))}
    </div>
  );
};

export default SalesCardContainer;
