"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/H4OP0zbuMI3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SliderComponent } from "./slider_component";
import BooleanComponent from "./boolean_component";
import MCQComponent from "./mcq_component";

interface Question{
    question : string;
    subQuestion : string;
    optionType : string;
    optionsList : string[];
    onNextClick : () => void;
}

export default function QuestionCard(props : Question) {

   const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };



  return (
    <Card style={({background:"white", border:"white" })} className="w-full lg:w-2/4">
      <CardHeader>
        <CardTitle  style={({color:"black"})}>{props.question}</CardTitle>
        <CardDescription style={({color:"black"})}>{props.subQuestion}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 " >
        <div className="space-y-2">
        {props.optionType == "slider" ? <SliderComponent sliderValue={sliderValue} onValueCommit={handleSliderChange}/> : 
          props.optionType == "boolean" ? <BooleanComponent/> : 
          props.optionType == "mcq" ? <MCQComponent/> :
           <Input id={props.optionType} placeholder="Type here..." required type={props.optionType} style={({color:"black", background:'white'})}/>
        }
        </div>
        
      </CardContent>
      
    </Card>
  );

}