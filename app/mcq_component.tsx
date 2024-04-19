import { useState } from "react";



export default function MCQComponent() {

    const choiceList = [
        "Choice 1",
        "Choice 2",
        "Choice 3",
        "Choice 4",
    ];

    const [selectedOption, setSelectOption] = useState<number | null>(null);

    const handleOption = (index: number) => {
        // if(selectedOption !== index ){
            setSelectOption(index);
            console.log("selectedOption ---   "+selectedOption);
        // }
        
        // TODO Here too   the logic is  not working properly as it is not working in boolean component
    }

    return (
        <div>
            {
                choiceList.map((val, index) => {
                    return <div onClick={() => handleOption(index)} className="border-black border-2 py-3 px-4 my-4 text-black font-sans hover:bg-black hover:text-white cursor-pointer">{val}</div>
                })
            }
        </div>
    );
}

