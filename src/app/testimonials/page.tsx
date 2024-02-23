import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <main className="font-sora bg-testimonials-100 w-screen py-20 lg:pb-0 lg:h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 lg:grid-cols-6 w-11/12 gap-20 lg:gap-8">
        <div className="col-span-3">
          <div className="size-11 rounded-full  flex items-center justify-center bg-testimonials-yellow">
            <span>⭐️</span>
          </div>
          <h1 className="text-testimonials-400 font-semibold text-4xl mt-6">
            Reviewers
          </h1>
          <p className="text-xl text-testimonials-300 mt-[30px]">
            Reviewers is where people can access guidelines, checklists, and
            other tools to assist them in reviewing papers or manuscripts. It
            provides a structured approach to ensure that the review process is
            thorough, efficient, and consistent.
          </p>
          <ul className="text-sm text-testimonials-300 mt-11 space-y-5">
            <li className="flex flex-row items-center gap-2.5">
              <Image
                src={"/images/Done_ring_round_fill.svg"}
                width={20}
                height={20}
                alt="check list"
              />
              Checklist to Review an Academic Paper
            </li>
            <li className="flex flex-row items-center gap-2.5">
              <Image
                src={"/images/Done_ring_round_fill.svg"}
                width={20}
                height={20}
                alt="check list"
              />
              Peer Review Checklist
            </li>
            <li className="flex flex-row items-center gap-2.5">
              <Image
                src={"/images/Done_ring_round_fill.svg"}
                width={20}
                height={20}
                alt="check list"
              />
              Checklist for Editors, Reviewers, and Authors of SPIE Journals
            </li>
          </ul>
        </div>
        <div className="col-span-3 flex flex-col justify-between gap-5 lg:gap-0">
          <div className="md:w-[360px] bg-white self-end  py-8 px-10">
            <div className=" flex flex-row items-center gap-5 ">
              <Image
                src="/images/google-testimonial.png"
                alt="logo meta"
                width={86}
                height={30}
                className="object-cover  block aspect-auto w-auto h-auto"
              />
              <div className="flex flex-row gap-2.5 ">
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                  className="object-cover"
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <h2 className="text-testimonials-400 text-sm font-medium mt-6">
              Samantha Lee
            </h2>
            <p className="text-sm text-testimonials-300 mt-5">
              The checklist ensures that the review process is thorough
            </p>
          </div>
          <div className="md:w-[360px] bg-white py-8 px-10">
            <div className=" flex flex-row items-center justify-start gap-6 ">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/meta-testimonial.png"
                  alt="logo meta"
                  width={86}
                  height={30}
                  className="block aspect-auto  w-auto h-auto"
                />
              </div>
              <div className="flex gap-2.5">
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
                <Image
                  src={"/images/Star_fill.svg"}
                  alt="start"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <h2 className="text-testimonials-400 text-sm font-medium mt-6">
              Rachel Patel
            </h2>
            <p className="text-sm text-testimonials-300 mt-5">
              I highly recommend the Writecream Business Description
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
