import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <Link href={"mini-blog-card"}>Mini Blog Card</Link>
        <Link href={"business-blog-card"}>business Blog Card</Link>
      </ul>
    </main>
  );
}
