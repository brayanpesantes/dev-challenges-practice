"use client";

import Header from "@/components/simple-home/Header";
import cn from "@/utils";
import Image from "next/image";
import { useState } from "react";

export default function SimpleHomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className={cn([
        "font-poppins max-w-screen-xl bg-simple-100 min-h-screen dark:bg-simple-400 ",
        { dark: isDarkMode },
      ])}
    >
      <div className="px-9 md:px-[72px] pb-10">
        <Header handleDark={handleToggleDarkMode} isDarkMode={isDarkMode} />
        <section className="mt-16 flex flex-col-reverse  xl:flex-row gap-6">
          <div className="xl:w-1/2 mt-12 md:mt-36 md:mt-84 xl:mt-0">
            <p className="uppercase text-simple-300 dark:text-white font-semibold ">
              😎 Simple way to communicate
            </p>
            <h1 className="text-simple-400 dark:text-white text-5xl md:text-[60px] xl:text-7xl font-bold mt-8">
              Actions for Accessibility in Design
            </h1>
            <p className="mt-12 text-lg text-simple-300/80 dark:text-simple-200 font-medium lg:w-[55%] xl:w-[90%]">
              The fastest way to build and deploy websites with resusable
              components.
            </p>
            <div className="mt-6 flex items-center gap-7">
              <button className="uppercase bg-simple-blue text-white py-4 px-8 rounded-xl">
                get started
              </button>
              <button className="text-simple-blue font-medium border-b-2 border-b-simple-blue h-auto">
                Get live demo
              </button>
            </div>
            <ul className="inline-flex  gap-6 text-sm text-simple-300/90 mt-10 dark:text-simple-200">
              <li className="flex items-center gap-3">
                <span className="size-6 relative">
                  <Image
                    src={"/images/Done_ring_round_fill.svg"}
                    alt="check"
                    fill
                    className="h-auto w-auto object-cover object-center"
                  />
                </span>
                No credit card required
              </li>
              <li className="flex items-center gap-3">
                <span className="size-6 relative">
                  <Image
                    src="/images/Done_ring_round_fill.svg"
                    alt="check"
                    fill
                    className="h-auto w-auto object-cover object-center"
                  />
                </span>
                No software to install
              </li>
            </ul>
          </div>
          <div className="h-[300px] xl:w-1/2  md:h-[500px] lg:h-[446px] xl:h-auto relative center md:w-[550px] md:mx-auto">
            <Image
              src={"/images/hero-image-simple-homepage.png"}
              alt="hero image"
              fill
              className=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}
