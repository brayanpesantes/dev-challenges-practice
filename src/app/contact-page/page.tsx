"use client";
import { addFormContact } from "@/actions";
import Input from "@/components/from-contact-page/Input";
import Label from "@/components/from-contact-page/Label";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-contact-page bg-no-repeat bg-center bg-cover min-h-screen px-6 lg:px-0 lg:max-w-screen-xl font-be_vietnam_pro pb-6">
      <header className="max-w-screen-lg mx-auto py-5">
        <Image
          src={"/images/contact-form-icon.svg"}
          alt=""
          width={100}
          height={32}
        />
      </header>
      <main className="max-w-screen-md mx-auto">
        <div className="md:w-[620px] mx-auto ">
          <h1 className="text-white text-6xl md:text-[64px] font-bold  text-center">
            Interested in our business pricing?
          </h1>
          <p className="text-white text-3xl text-center mt-7">
            Fill out the form to view details and we’ll contact you as soon as
            possible.
          </p>
        </div>
        <form
          action={addFormContact}
          className="p-7 space-y-6 backdrop-blur-sm bg-from-contact-100/20 rounded-xl mt-20 "
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2 space-y-1">
              <Label>Name</Label>
              <Input name="name" placeholder="Alexis Nuñez" />
            </div>
            <div className="md:w-1/2 space-y-1">
              <Label>Company Email</Label>
              <Input name="company_email" placeholder="example@gmail.com" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2 space-y-1">
              <Label>Company size</Label>
              <div className="relative">
                <select
                  name="company_size"
                  id="countries"
                  defaultValue={"50-100 employees"}
                  className="text-from-contact-300 w-full p-6 rounded-xl appearance-none font-semibold"
                >
                  <option value={"50-100 employees"}>50-100 employees</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <span
                  className="pointer-events-none  size-6 absolute right-6 top-6"
                  style={{
                    backgroundImage: "url('/images/Expand_down.svg')",
                  }}
                ></span>
              </div>
            </div>
            <div className="md:w-1/2 space-y-1">
              <Label className="block">Subject</Label>
              <div className="relative">
                <select
                  name="subject"
                  id="countries"
                  className="text-from-contact-300 w-full p-6 rounded-xl appearance-none font-semibold"
                >
                  <option selected>Building Landing pages</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <span
                  className="pointer-events-none  size-6 absolute right-6 top-6"
                  style={{
                    backgroundImage: "url('/images/Expand_down.svg')",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Label className="block">Message</Label>
            <textarea
              name="message"
              className="h-52 w-full rounded-xl p-6  font-medium focus:outline-none focus:ring-2 focus:ring-from-contact-400"
            >
              50-10 employees
            </textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-from-contact-100 py-7 rounded-xl font-bold text-from-contact-400 hover:bg-from-contact-400 hover:text-from-contact-100 transition-all duration-300 ease-in-out text-xl"
          >
            Contact Sales
          </button>
        </form>
      </main>
    </div>
  );
}
