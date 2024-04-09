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

interface Question{
    question : string;
    subQuestion : string;
    optionType : string;
    optionsList : string[];
    onNextClick : () => void;
}

export default function QuestionCard(props : Question) {


  return (
    <Card style={({background:"white", border:"white" })} className="w-full lg:w-2/4">
      <CardHeader>
        <CardTitle  style={({color:"black"})}>{props.question}</CardTitle>
        <CardDescription style={({color:"black"})}>{props.subQuestion}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 " >
        <div className="space-y-2">
          <Input id={props.optionType} placeholder="Type here..." required type={props.optionType} style={({color:"black", background:'white'})}/>
        </div>
        
      </CardContent>
      
    </Card>
  );

}