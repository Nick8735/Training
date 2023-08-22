const questions = [
    {
        question: "Which is larger?",
        answers:[
            { text: "shark", correct: false },
            { text: "fish", correct: false },
            { text: "nick", correct: true },
            { text: "diane", correct: false },
        ]
    },
    {    question: "who is the biggest pain?",
        answers:[
            { text: "james", correct: false },
            { text: "brandon", correct: false },
            { text: "mani", correct: true },
            { text: "theo", correct: false },
        ]
    },
    {
    question: "What is more than 3?",
        answers:[
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "mani", correct: true },
            { text: "1.1", correct: false },
        ]
    },
    {
        question: "What is more than 3?",
        answers:[
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "mani", correct: true },
            { text: "1.1", correct: false },
        ]


    },
    {
        question: "What is more than 3?",
        answers:[
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "mani", correct: true },
            { text: "1.1", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
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

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }

}
startQuiz();
