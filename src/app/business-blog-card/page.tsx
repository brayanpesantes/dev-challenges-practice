import Image from "next/image";
import React from "react";

export default function BusinessBlogCard() {
  return (
    <main className="w-screen h-screen font-lato flex items-center justify-center bg-business-100 overflow-x-hidden">
      <article className="w-[415px] mx-auto bg-white rounded-xl">
        <div className="relative ">
          <Image
            src="/images/hero-image-business-card.png"
            alt="hero Business"
            width={415}
            height={240}
            className="rounded-t-xl object-cover"
          />
          <div className="bg-overlay-business absolute left-0 w-full h-9 bottom-0"></div>
        </div>
        <div className="mt-[40px] px-8 pb-6">
          <h1 className="font-poppins text-2xl font-medium">
            Perfect solution for small business
          </h1>
          <p className="text-base mt-6 text-business-200">
            Small businesses need to generate leads to grow. You can use tools
            like Ringy.
          </p>
        </div>
        <header className="py-5 px-8 border-t border-t-business-100">
          <div className="flex flex-row gap-2.5 items-center">
            <div className="ring-2 ring-offset-1 ring-business-100 rounded-full">
              <Image
                src={"/images/avatar-image-business-card.png"}
                alt="avatar business "
                width={36}
                height={36}
                className="rounded-full"
              />
            </div>
            <div className="">
              <h2 className="text-base font-poppins font-semibold">
                Amy Burgess
              </h2>
              <p className="text-sm text-business-200">
                Customer Manger, Solution Oy
              </p>
            </div>
          </div>
        </header>
      </article>
    </main>
  );
}
