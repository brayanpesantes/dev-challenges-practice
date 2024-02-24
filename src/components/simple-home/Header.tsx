import Image from "next/image";
import ButtonDarkMode from "./ButtonDarkMode";
import cn from "@/utils";

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
  return (
    <header className="flex flex-row justify-between py-8 items-center">
      <div className="">
        <Image
          src={"./images/alarado-icon-homepage.svg"}
          alt=""
          width={142}
          height={24}
          className="w-36 h-6"
        />
      </div>
      <nav>
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
      <div className="">
        <ButtonDarkMode isDarkMode={isDarkMode} handleDarkMode={handleDark} />
      </div>
    </header>
  );
}
