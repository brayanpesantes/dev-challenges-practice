"use client";

import cn from "@/utils";
import Image from "next/image";

type Props = {
  handleDarkMode: () => void;
  isDarkMode: boolean;
};

export default function ButtonDarkMode({ handleDarkMode, isDarkMode }: Props) {
  const isMoon = isDarkMode
    ? "/images/Moon_fill.svg"
    : "/images/Moon_fill_light.svg";
  const isSun = isDarkMode
    ? "/images/Sun_fill_light.svg"
    : "/images/Sun_fill.svg";

  return (
    <label
      htmlFor="dark-mode-switch"
      className="w-12 rounded-full h-6 bg-simple-400 dark:bg-simple-300 relative flex justify-between items-center cursor-pointer"
    >
      <input
        hidden
        type="checkbox"
        id="dark-mode-switch"
        className="text-gray-600 dark:text-gray-400 rounded-full focus:ring-0 dark-mode-switch"
        checked={isDarkMode}
        onChange={handleDarkMode}
      />
      <span className="size-4 absolute left-1 top-0.6 z-20">
        <Image src={isMoon} alt="moon" fill className="w-auto h-auto" />
      </span>
      <span className="size-4 absolute right-1 top-0.6 z-20 data:text-white">
        <Image
          src={isSun}
          alt="moon"
          fill
          className="w-auto h-auto text-white"
        />
      </span>
      <span
        className={cn(
          "absolute size-5 left-0.5 bg-white rounded-full z-10 transition duration-300 ease-in-out",
          {
            "translate-x-6": !isDarkMode,
          }
        )}
      ></span>
    </label>
  );
}
