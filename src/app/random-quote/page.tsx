"use client";
import { IconLink } from "@/components/icons/Link";
import { IconRegroup } from "@/components/icons/Regroup";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

export interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export default function RandomQuotePage() {
  const [quote, setQuote] = useState<Quote>();

  async function fetchData() {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setQuote(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleGetRandomQuote = () => {
    fetchData();
  };

  const Copy = (content: string | undefined) => {
    if (content === undefined) return;
    navigator.clipboard.writeText(content);
    toast.success("Copy", {
      duration: 1500,
      description: content,
    });
  };

  return (
    <main className="bg-quote-400 max-w-screen-xl h-screen flex items-center justify-center font-outfit flex-col gap-4">
      <section className="bg-random-quote bg-cover  w-[85%] md:w-[542px] mx-auto p-[50px] bg-quote-300 rounded-2xl flex flex-col items-center">
        <h1 className="text-white text-base ">{quote?.author}</h1>
        <div className="mt-3 space-x-1.5">
          {quote?.tags.map((tag: string) => (
            <span
              key={tag}
              className="border border-quote-500 rounded-full px-3 py-1.5 text-quote-500 text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-quote-100 mt-7 text-2xl text-center">
          <q> {quote?.content}</q>
        </p>
      </section>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          className="border-l-2 border-t-2 border-b-2 rounded-s-xl w-14 h-11 border-quote-300 flex items-center justify-center text-quote-200 hover:text-quote-100 transition-all duration-300 ease-in-out"
          onClick={handleGetRandomQuote}
        >
          <IconRegroup className="w-7" />
        </button>
        <button
          className="border-2 rounded-e-xl  w-14 h-11 border-quote-300 flex items-center justify-center text-quote-200 hover:text-quote-100 transition-all duration-300 ease-in-out relative"
          onClick={() => Copy(quote?.content)}
        >
          <Toaster richColors />
          <IconLink className="size-7 " />
        </button>
      </div>
    </main>
  );
}
