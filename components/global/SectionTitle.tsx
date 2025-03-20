import React from "react";
import { Separator } from "../ui/separator";

interface SectionTitleProps {
  text: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold tracking-wider capitalize mb-8 text-[#051F20]/90 dark:text-[#D6E4F0]/90">
        {text}
      </h2>
      <Separator />
    </div>
  );
};

export default SectionTitle;
