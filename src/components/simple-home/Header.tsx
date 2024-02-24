import Image from "next/image";
import ButtonDarkMode from "./ButtonDarkMode";
import cn from "@/utils";
import { IconHamburger } from "../icons/Hamburger";
import { IconClose } from "../icons/Close";
import { useState } from "react";

type NavLinks = {
  link: string;
  isActive?: boolean;
  name: string;
};

const navLinks: NavLinks[] = [
  {
    link: "#",
    name: "About us",
    isActive: true,
  },
  {
    link: "#",
    name: "Product",
  },
  {
    link: "#",
    name: "Resource",
  },
  {
    link: "#",
    name: "Contact",
  },
];
type Props = {
  handleDark: () => void;
  isDarkMode: boolean;
};
export default function Header({ handleDark, isDarkMode }: Props) {
  const [isIOpen, setIsOpen] = useState(false);
  return (
    <header className="flex flex-row justify-between py-8 items-center relative">
      <div className="">
        <Image
          src={"./images/alarado-icon-homepage.svg"}
          alt=""
          width={144}
          height={24}
          className="w-auto h-auto"
        />
      </div>
      <button
        className="dark:text-white lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <IconHamburger />
      </button>
      <nav className="hidden lg:block">
        <ul className="flex flex-row gap-2.5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.link}
                className={cn(
                  "text-simple-300/80 dark:text-simple-200 font-semibold text-lg",
                  {
                    "text-simple-400 dark:text-white": link.isActive,
                  }
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:block">
        <ButtonDarkMode isDarkMode={isDarkMode} handleDarkMode={handleDark} />
      </div>
      {/* NAV MOBILE */}
      <nav
        className={cn([
          "lg:hidden absolute w-3/4 bg-white h-screen z-50 -right-10 top-0 transition-all duration-300 dark:bg-simple-400",
          { "opacity-0 -translate-x-full": !isIOpen },
          { "opacity-100 translate-x-0": isIOpen },
        ])}
      >
        <div className="flex flex-col p-4">
          <button className="self-end " onClick={() => setIsOpen(false)}>
            <IconClose className="text-simple-400 size-6 dark:text-simple-100" />
          </button>
          <ul className="self-center  text-center space-y-10 mt-10">
            {navLinks.map((link) => (
              <li key={link.name} className="">
                <a
                  href={link.link}
                  className={cn(
                    "text-simple-300/80 dark:text-simple-200 font-semibold text-3xl",
                    {
                      "text-simple-400 dark:text-white": link.isActive,
                    }
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-center">
              <ButtonDarkMode
                isDarkMode={isDarkMode}
                handleDarkMode={handleDark}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
