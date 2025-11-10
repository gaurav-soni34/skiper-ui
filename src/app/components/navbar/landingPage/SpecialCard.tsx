import { SkiperCard } from "@/components/ui/skiper-card";
import { cn } from "@/lib/utils";
import React from "react";
import Card4 from "/public/images/card4.webp";
import Card5 from "/public/images/card5.webp";
import Card6 from "/public/images/card6.webp";
import Card7 from "/public/images/card7.webp";
import Card8 from "/public/images/card8.webp";
import Card9 from "/public/images/card9.webp";
import BadgeButton from "@/components/ui/badge-button";

const SpecialCard = () => {
   

  return (
    <div className="w-[61.5%] p-2 my-20  rounded-3xl shadow bg-white mx-auto">
        <div className=" h-full p-6  rounded-3xl shadow bg-[#f4f4f4] mx-auto ">
        <BadgeButton>Component Preview</BadgeButton>
        <h2 className=" text-black/80 text-6xl font-bold mt-2 text-center">Tailwind + Framer + React</h2>
        <h5  className=" text-black/80 text-3xl font-bold mb-11 text-center">Everything you need to ship</h5>
        <SkiperCard
            step1img1Class={cn(
                    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                    "md:group-hover:-translate-y-6 "
                  )}
                  step2img1Class={cn(
                    "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
                    "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                    "md:group-hover:-translate-y-6"
                  )}
                  step3imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
            title="Component that pop"
            description="Make your app 🤌"

            image={{
                step1dark1:Card4,
                step1dark2:Card5,
                step1light1:Card4,
                step1light2:Card5,
                step2dark1:Card6,
                step2dark2:Card7,
                step2light1:Card6,
                step2light2:Card7,
                step3dark:Card8,
                step3light:Card8,
                step4light:Card9,
                alt: "Special Card Image",
            }}
            />
      </div>
    </div>
  );
};

export default SpecialCard;
