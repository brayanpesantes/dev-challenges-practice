"use client";

import Label from "@/components/from-contact-page/Label";
import Card from "./_components/Card";
import Input from "./_components/Input";
import { useStep } from "./_hooks/useStep";
import cn from "@/utils";
import { useState } from "react";

const listTopics = ["Software Developer", "User Experience", "Graphic Design"];

export default function MultiStepPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [selectedTopics, setSelectedTopics] = useState<{
    [key: string]: boolean;
  }>({});

  const { steps, currentStep, nextStep, goToStep } = useStep(3);

  const handleStepOne = () => {
    if (name === "" || email === "") {
      alert("Please enter input name and email");
      return;
    }
    nextStep();
  };
  const handleAddTopic = (topic: string) => {
    setSelectedTopics((prevState) => ({
      ...prevState,
      [topic]: !prevState[topic],
    }));
  };

  return (
    <main className="h-screen max-w-screen-xl font-inter flex items-center justify-center relative bg-step-800 overflow-hidden flex-col gap-3">
      <section className="px-3 md:px-0">
        {currentStep === 1 && (
          <Card className="flex flex-col">
            <h1 className="text-xl text-step-100">Register</h1>
            <div className="mt-10">
              <div className="space-y-2.5">
                <Label className="block text-xs text-step-200">Name</Label>
                <Input
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2.5 mt-6">
                <Label className="block text-xs text-step-200">Email</Label>
                <Input
                  placeholder="Email"
                  name="email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={handleStepOne}
              className="mt-8 bg-gradient-to-t to-step-600 from-step-700 rounded-full px-10 py-3.5 text-white mx-auto self-center"
            >
              Continue
            </button>
          </Card>
        )}
        {currentStep === 2 && (
          <Card className="flex flex-col">
            <h1 className="text-xl text-step-100">
              which topics you are interested in?
            </h1>
            <div className="mt-6 space-y-3.5 text-sm ">
              {listTopics.map((topic, index) => (
                <label
                  key={topic}
                  htmlFor={`custom-checkbox-${index}`}
                  className={cn([
                    "cursor-pointer  py-4 px-5 block bg-step-300  text-white rounded-xl ring-1 ring-step-200 ",
                    {
                      "bg-step-700": selectedTopics[topic],
                    },
                  ])}
                >
                  <input
                    type="checkbox"
                    name={topic}
                    value={topic}
                    id={`custom-checkbox-${index}`}
                    hidden
                    checked={selectedTopics[topic] || false}
                    onChange={() => handleAddTopic(topic)}
                  />
                  {topic}
                </label>
              ))}
            </div>
            <button
              onClick={() => {
                const selectedCount = Object.values(selectedTopics).filter(
                  (isSelected) => isSelected === true
                ).length;

                if (selectedCount < 1) {
                  alert("selected a topic");
                  return;
                }
                nextStep();
              }}
              className="mt-8 bg-gradient-to-t to-step-600 from-step-700 rounded-full px-10 py-3.5 text-white mx-auto self-center "
            >
              Continue
            </button>
          </Card>
        )}
        {currentStep == 3 && (
          <Card className="flex flex-col">
            <h1 className="text-xl text-step-100">Summary</h1>
            <div className="mt-7 space-y-2.5 text-sm">
              <p className="text-step-200">
                name: <span className="text-white">{name}</span>
              </p>
              <p className="text-step-200">
                email: <span className="text-white">{email}</span>
              </p>
            </div>
            <h3 className="mt-6 text-step-200 text-sm">Topics.</h3>
            <ul className="mt-3 text-white text-sm list-inside list-disc">
              {Object.entries(selectedTopics).map(
                ([topic, isSelected]) =>
                  isSelected && (
                    <li className="ml-5" key={topic}>
                      {topic}
                    </li>
                  )
              )}
            </ul>
            <button
              onClick={() => {
                setName("");
                setEmail("");
                setSelectedTopics({});
                goToStep(1);
              }}
              className="mt-7 bg-gradient-to-t to-step-600 from-step-700 rounded-full px-10 py-3.5 text-white mx-auto self-center"
            >
              Confirm
            </button>
          </Card>
        )}
      </section>
      <div className="flex gap-4 items-center">
        <p className="text-step-300">
          Step {currentStep} of {steps}
        </p>
        <div className="flex gap-4 flex-row">
          <span
            className={cn([
              "size-2.5 bg-step-400 rounded-full",
              { " ring-4 ring-step-600/40 bg-step-600": currentStep === 1 },
            ])}
          ></span>
          <span
            className={cn([
              "size-2.5 bg-step-400 rounded-full",
              { " ring-4 ring-step-600/40 bg-step-600": currentStep === 2 },
            ])}
          ></span>
          <span
            className={cn([
              "size-2.5 bg-step-400 rounded-full",
              { "ring-4 ring-step-600/40 bg-step-600": currentStep === 3 },
            ])}
          ></span>
        </div>
      </div>
      <div className="bg-radial-step w-32 h-32 md:w-[400px] md:h-[400px] absolute object-cover bg-right-bottom bg-no-repeat top-0 -left-10"></div>
      <div className="bg-radial-step md:w-[400px] md:h-[350px] absolute object-cover bg-left-top bg-no-repeat bottom-0 -right-10 z-10"></div>
    </main>
  );
}
