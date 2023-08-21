const questions = [
    {
        question: "Which is larger?",
        answers:[
            {text: "shark", correct: false },
            {text: "fish", correct: false },
            {text: "nick", correct: true },
            {text: "diane", correct: false },
        ]
    },
    {    question: "who is the biggest pain?",
        answers:[
            {text: "james", correct: false },
            {text: "brandon", correct: false },
            {text: "mani", correct: true },
            {text: "theo", correct: false },
        ]
    },
    {
    question: "What is more than 3?",
        answers:[
            {text: "1", correct: false },
            {text: "2", correct: false },
            {text: "mani", correct: true },
            {text: "1.1", correct: false },
        ]
    },
    {
        question: "What is more than 3?",
        answers:[
            {text: "1", correct: false },
            {text: "2", correct: false },
            {text: "mani", correct: true },
            {text: "1.1", correct: false },
        ]


    },
    {
        question: "What is more than 3?",
        answers:[
            {text: "1", correct: false },
            {text: "2", correct: false },
            {text: "mani", correct: true },
            {text: "1.1", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
nextButton.innerHTML = "NEXT";
showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    
});
}
startQuiz();
