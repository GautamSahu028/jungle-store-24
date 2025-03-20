import {
  AlertTriangle,
  Calendar,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
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
    valueColor: "text-purple-600",
    className: "col-span-1",
  },
];

const recentSales = [
  {
    id: 1,
    product: "Safari Hat",
    customer: "John Doe",
    amount: "₹1,250",
    date: "2025-03-19",
  },
  {
    id: 2,
    product: "Jungle Boots",
    customer: "Jane Smith",
    amount: "₹3,499",
    date: "2025-03-18",
  },
  {
    id: 3,
    product: "Compass",
    customer: "Robert Johnson",
    amount: "₹780",
    date: "2025-03-18",
  },
  {
    id: 4,
    product: "Water Bottle",
    customer: "Emily Brown",
    amount: "₹450",
    date: "2025-03-17",
  },
];

const stockAlerts = [
  {
    id: 1,
    product: "Safari Hat",
    currentStock: 5,
    minStock: 10,
    status: "Low",
  },
  {
    id: 2,
    product: "Jungle Boots",
    currentStock: 3,
    minStock: 10,
    status: "Critical",
  },
  {
    id: 3,
    product: "Flashlight",
    currentStock: 6,
    minStock: 15,
    status: "Low",
  },
  { id: 4, product: "Tent", currentStock: 2, minStock: 5, status: "Low" },
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
          valueColor={card.valueColor}
          className={card.className}
        />
      ))}
    </div>
  );
};

export default SalesCardContainer;
