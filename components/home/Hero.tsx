import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";
import { Package } from "lucide-react";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl text-[#051F20]/90 dark:text-[#D6E4F0]/90">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-[#051F20]/90 dark:text-[#D6E4F0]/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et
          voluptas saepe in quae voluptate, laborum maiores possimus illum
          reprehenderit aut delectus veniam cum perferendis unde sint doloremque
          non nam.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 rounded-lg bg-[#18401A] text-[#FFFAF0] transition-all 
             hover:bg-[rgba(56,142,60,1)] hover:shadow-lg hover:shadow-green-500/50
             dark:bg-[rgba(0,206,209,0.8)] dark:text-black dark:hover:bg-[rgba(57,255,20,0.9)]
             dark:hover:shadow-lg dark:hover:shadow-cyan-400/50"
        >
          <div className="text-left">
            <Package
              className="w-6 h-6 text-white dark:text-black"
              strokeWidth={3.5}
            />
            <Link href="/products">Our Products</Link>
          </div>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
