import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider> & sliderPropsData;

interface sliderPropsData {
  sliderValue:number;
  onValueCommit? : (value: number[]) => void ,
}

export function SliderComponent({ className, sliderValue,  onValueCommit, ...props }: SliderProps) {
 
  return (
    <div>
      <Slider
        defaultValue={[sliderValue]}
        max={5}
        step={1}
        onValueChange={onValueCommit}
        onValueCommit={onValueCommit}
        className="bg-gray-400 px-5 py-6 rounded-lg"
        {...props}
      />
      <div className="h-12"></div>
      <text className=" text-black font-bold text-4xl items-center justify-center"> {sliderValue}</text>
    </div>
  )
}
