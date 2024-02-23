import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="flex flex-col gap-5">
        <Link href={"mini-blog-card"}>Mini Blog Card</Link>
        <Link href={"business-blog-card"}>business Blog Card</Link>
        <Link href={"testimonials"}>testimonials</Link>
      </ul>
    </main>
  );
}
