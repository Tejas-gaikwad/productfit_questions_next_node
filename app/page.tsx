"use client";

import questionsList from "../app/questions_list";
import QuestionCard from "./question_card";
import { useState } from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Home() {

  const [questionIndex, setQuestionIndex] = useState(0);

  const handleNextClick = () => {
      // Increment questionIndex to move to the next question
      if(questionIndex === questionsList.length - 1){
        // TODO add submit logic here, here you have to add data that user has added onto the database
      }else{
        setQuestionIndex(prevIndex => prevIndex + 1);
      }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">

        <QuestionCard 
          question={questionsList[questionIndex].questionText} 
          optionType={questionsList[questionIndex].questionOptionsType} 
          subQuestion={questionsList[questionIndex].subQuestionText ?? "" } 
          optionsList={questionsList[questionIndex].questionOption}
          onNextClick={handleNextClick}
        />

        <CardFooter className="w-full lg:w-auto" >
          <Button className="w-full lg:w-auto" onClick={handleNextClick} style={({background:"black", color:"white"})}>{ (questionIndex === questionsList.length - 1) ? "Submit":"Next"}</Button>
        </CardFooter>
   
    </div>
  );
}
