import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="flex flex-col gap-5">
        <Link href={"mini-blog-card"}>Mini Blog Card</Link>
        <Link href={"business-blog-card"}>business Blog Card</Link>
        <Link href={"testimonials"}>testimonials</Link>
        <Link href={"contact-page"}>Contacto Page</Link>
        <Link href={"simple-homepage"}>Simple HomePage</Link>
        <Link href={"multi-step"}>Multi Step</Link>
      </ul>
    </main>
  );
}
