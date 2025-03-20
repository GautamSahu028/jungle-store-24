import React, { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  value: string | number;
  valueColor?: string;
  className?: string;
}

const SalesCard: React.FC<CardProps> = ({
  icon,
  title,
  value,
  valueColor = "text-gray-900",
  className = "",
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-center gap-4">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className={`text-2xl font-bold mt-1 ${valueColor}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
