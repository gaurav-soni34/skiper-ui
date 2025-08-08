import AiInput from "@/components/ui/ai-input";
import BadgeButton from "@/components/ui/badge-button";
import React from "react";

const AiiInput = () => {
  return (
    <div className="w-[61.5%] p-2 my-20  rounded-3xl shadow bg-white mx-auto">
      <div className=" h-full p-6  rounded-3xl shadow bg-[#f4f4f4] mx-auto ">
        <BadgeButton>Latest Component</BadgeButton>
        <h1 className="text-4xl font-bold text-black/80">AI Input</h1>
        <h1 className=" text-black/80">Seamless AI Chat Input box</h1>
        <AiInput />
      </div>
    </div>
  );
};

export default AiiInput;
