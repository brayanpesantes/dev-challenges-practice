import Image from "next/image";
export default function MiniBlogCardPage() {
  return (
    <main className="w-screen h-screen bg-cactus-300 flex items-center justify-center">
      <article className="w-72 lg:w-[336px] bg-cactus-100 mx-auto rounded-lg font-sora ">
        <div className="p-4">
          <Image
            src="/images/cactus_img.jpg"
            alt="cactus"
            width={336}
            height={152}
            className="rounded-lg"
          />
        </div>
        <div className="px-4 pb-5">
          <span className="bg-cactus-400 py-1.5 px-4  rounded-full text-xs font-semibold text-cactus-700">
            Design
          </span>
          <h1 className="text-lg font-semibold text-cactus-600 mt-4">
            Embracing Minimalism
          </h1>
          <p className="text-sm text-cactus-500 mt-1.5">
            From minimalist sculptures to minimalist paintings, this blog will
            inspire you to appreciate the beauty that lies in simplicity.
          </p>
        </div>
        <footer className="py-5 px-4 border-t border-cactus-200">
          <p className="font-medium text-xs text-cactus-500">Annie Spratt</p>
        </footer>
      </article>
    </main>
  );
}
