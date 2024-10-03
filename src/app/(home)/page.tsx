import ProductCard, { Product } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger,  } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
const products: Product[] = [
  {
      id: '1',
      name: 'Margarita Pizza',
      description: 'This is a very tasty pizza',
      image: '/pizza-main.png',
      price: 500,
  },
  {
      id: '2',
      name: 'Margarita Pizza',
      description: 'This is a very tasty pizza',
      image: '/pizza-main.png',
      price: 500,
  },
  {
      id: '3',
      name: 'Margarita Pizza',
      description: 'This is a very tasty pizza',
      image: '/pizza-main.png',
      price: 500,
  },
  {
      id: '4',
      name: 'Margarita Pizza',
      description: 'This is a very tasty pizza',
      image: '/pizza-main.png',
      price: 500,
  },
  {
      id: '5',
      name: 'Margarita Pizza',
      description: 'This is a very tasty pizza',
      image: '/pizza-main.png',
      price: 500,
  },
];

function Home() {
  return (
    <>
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
      <section>
        <div className="container mx-auto py-12">
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-md">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product ) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product ) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Home;
