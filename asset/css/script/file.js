const questions = [
    {
        question: "What should be worn on your hands when operating the printing machine?",
        answers:[
            { text: "Gloves", correct: true },
            { text: "Alchol gel", correct: false },
            { text: "Nail polish", correct: false },
            { text: "A ring", correct: false },
        ]
    },
    {    question: "What must you follow when turning the machine on?",
        answers:[
            { text: "First Aid memoir", correct: false },
            { text: "Google", correct: false },
            { text: "Manufactuer's instructions", correct: true },
            { text: "A co-worker", correct: false },
        ]
    },
    {
    question: "What must you ensure is correct when setting up the ink?",
        answers:[
            { text: "You are wearing socks", correct: false },
            { text: "The power is on", correct: false },
            { text: "That a batch number i present", correct: false },
            { text: "Type and colour of ink are loaded into the ink reservoirs", correct: true },
        ]
    },
    {
        question: "What most be inspected post printing?",
        answers:[
            { text: "That all operators are present", correct: false },
            { text: "Footwear", correct: false },
            { text: "Printed output for any defects, smudging, or misalignment", correct: true },
            { text: "What PPE must be worn", correct: false },
        ]


    },
    {
        question: "What cleaning and maintenance is required post order closure?",
        answers:[
            { text: "Power off the machine following the manufacturer's instructions", correct: false },
            { text: "Clean the printing machine, including printheads, rollers, and other components", correct: false },
            { text: "Properly store unused printing materials and ink ", correct: false },
            { text: "All of the above", correct: true },
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
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
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
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
if(button.dataset.correct === "true"){
button.classList.add ("correct");
}
button.disabled = true;
    });
nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block"
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
showQuestion();
}else{ 
    showScore();
}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{ 
        startQuiz(); 
    }  
    })
startQuiz();
