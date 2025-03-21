import { Button } from "../ui/button";
import Link from "next/link";
import { LucideShoppingCart } from "lucide-react";
import { fetchCartItems } from "@/utils/action";

const CartButton = async () => {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="flex justify-center items-center relative bg-white/40 backdrop-blur-sm hover:bg-white/30 border-0 text-white dark:bg-white/10"
      asChild
    >
      <Link href="/cart">
        <LucideShoppingCart
          className="text-white font-bold"
          strokeWidth={3.5}
        />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
