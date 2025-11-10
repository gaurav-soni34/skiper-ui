import React from "react"
import { IceCreamIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const BadgeButton = ({children}: {children: React.ReactNode}) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-white text-base md:left-6"
    >
      <IceCreamIcon className=" mr-2  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
      {children}
    </Badge>
  )
}

export default BadgeButton
