"use client";
import { useState } from "react";


const BooleanComponent = () => {

    const [doesUserTrackExpense, setDoesUserTrackExpense] = useState<boolean | null>(null);

    const handleButtonClick = (button: boolean) => {

        console.log("doesUserTrackExpense ==   "+doesUserTrackExpense);

        setDoesUserTrackExpense(button);
        setDoesUserTrackExpense(button); // TODO This logic is not working properly please work on it

        console.log("doesUserTrackExpense ==   "+doesUserTrackExpense);
    };
    return (
        <div className="flex flex-row">
            <div onClick={() => handleButtonClick(true)} className="border-black border-2 rounded-lg py-2 px-6 mx-5 cursor-pointer text-black hover:bg-black hover:text-white">
                Yes
            </div>
            <div onClick={() => handleButtonClick(false)} className="border-black border-2 rounded-lg py-2 px-6 mx-5 cursor-pointer text-black hover:bg-black hover:text-white">
                No
            </div>
        </div>
    );
} 

export default BooleanComponent;