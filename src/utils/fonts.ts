import { Lato, Poppins, Sora, Be_Vietnam_Pro } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const be_vietnam_pro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

export const fonts = {
  sora,
  lato,
  poppins,
  be_vietnam_pro,
};
