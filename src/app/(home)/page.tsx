import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black font-sans leading-tight md:leading-2">
            Super Delicious Pizza in <br />
            <span className="text-primary">Only 45 Minutes!</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4 md:mt-8 max-w-md md:max-w-lg leading-snug">
            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
          </p>
          <Button className="mt-6 md:mt-8 text-base md:text-lg rounded-full py-5 md:py-7 px-6 font-bold">
            Get your pizza now
          </Button>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            className="animate-spin-slow"
            alt="pizza-main"
            src="/pizza-main.png"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
