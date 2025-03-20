import React, { ReactNode } from "react";

interface ReportsCardProps {
  children: ReactNode;
  className?: string;
}

export function ReportsCard({ children, className = "" }: ReportsCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {children}
    </div>
  );
}
