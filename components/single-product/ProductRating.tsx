import { fetchProductRating } from "@/utils/action";
import React from "react";
import { FaStar } from "react-icons/fa";

export const ProductRating = async ({ productId }: { productId: string }) => {
  const { rating, count } = await fetchProductRating(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
};
