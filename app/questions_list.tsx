
interface QuestionModel {
    questionText : string;
    subQuestionText? : string | null;
    questionOptionsType : string;
    questionOption : string[];
}

const  questionsList : QuestionModel[] = [
    {
        questionText:"Name",
        subQuestionText:"Please add your name.",
        questionOptionsType : "text",
        questionOption:[]
    },
    {
        questionText:"Age",
        subQuestionText:"Please enter your age.",
        questionOptionsType : "number",
        questionOption:[]
    },
    {
        questionText:"Email",
        subQuestionText:"Please enter your name.",
        questionOptionsType : "email",
        questionOption:[]
    },
    {
        questionText:"Do you track your Expenses?",
        subQuestionText:"Select any one.",
        questionOptionsType : "boolean",
        questionOption:[]
    },
    {
        questionText:"Expense Tracking Difficulty",
        subQuestionText:"On a scale of 1 to 5, how challenging do you find it to keep track of your expenses? (1 being not challenging at all, 5 being extremely challenging)",
        questionOptionsType : "slider",
        questionOption:[]
    },
    {
        questionText:"Expense Management Challenges",
        subQuestionText:"What are the biggest challenges you face in managing your expenses? (Multiple choice)",
        questionOptionsType : "mcq",
        questionOption:[]
    },
    {
        questionText:"Which method of organizing expenses would you prefer?",
        subQuestionText:"",
        questionOptionsType : "mcq",
        questionOption:[]
    },

    {
        questionText:"How interested are you in a budgeting feature for managing your finances?",
        subQuestionText:"",
        questionOptionsType : "mcq",
        questionOption:[]
    },

    {
        questionText:"How much do you agree with the statement: ",
        subQuestionText:"Having insights into my spending habits helps me make better financial decisions?",
        questionOptionsType : "boolean",
        questionOption:[]
    },   
];

export default questionsList;