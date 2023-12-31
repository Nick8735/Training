//Questions for first aid test
const questions = [{
        question: "When assessing the situation what should you ensure before providing assistance?",
        answers: [{
                text: "Ensure your safety before providing assistance",
                correct: true
            },
            {
                text: "The employee is breathing",
                correct: false
            },
            {
                text: "No one is around",
                correct: false
            },
            {
                text: "The fire alarm has been pressed",
                correct: false
            },
        ],
        infoLink: "process-f.html"
    },
    {
        question: "How long do you need to hold a burn underwater for?",
        answers: [{
                text: "1 hour",
                correct: false
            },
            {
                text: "60 seconds",
                correct: false
            },
            {
                text: "10 Minutes",
                correct: true
            },
            {
                text: "1 day",
                correct: false
            },
        ]
    },
    {
        question: "For a sprain or strain injury what can be used to support the injured area?",
        answers: [{
                text: "socks",
                correct: false
            },
            {
                text: "elastic band",
                correct: false
            },
            {
                text: "paper clip",
                correct: false
            },
            {
                text: "splint or bandage",
                correct: true
            },
        ]
    },
    {
        question: "What must you not do when dealing with a fracture?",
        answers: [{
                text: "ring 999",
                correct: false
            },
            {
                text: "Immobilize the injured limb using a splint or bandage",
                correct: false
            },
            {
                text: "attempt to realign the bone.",
                correct: true
            },
            {
                text: "Assess the area",
                correct: false
            },
        ]


    },
    {
        question: "What must be applied when dealing with uncontrolled bleeding?",
        answers: [{
                text: "Flush with water",
                correct: false
            },
            {
                text: "Alcohol",
                correct: false
            },
            {
                text: "Any foreign object ",
                correct: false
            },
            {
                text: "pressure to the wound using a clean cloth or bandag",
                correct: true
            },
        ]
    }

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
// funtion for quiz to start
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}
// funtion that allows user to see questions using HTML div interaction.
function showQuestion() {
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
        if (currentQuestion.userAnswer === answer.text) {
            button.classList.add("user-answer");
        }
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", () => selectAnswer(answer.text));
        answerButtons.appendChild(button);

    });


}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// answer selection - info link is for incorrect answer to highlight the procedure link for re-training
function selectAnswer(answerText) {
    const selectedBtn = answerButtons.querySelector(`button[data-correct="true"]`);

    const clickedButton = Array.from(answerButtons.children).find(button => button.textContent === answerText);

    if (selectedBtn && selectedBtn.textContent === answerText) {
        selectedBtn.classList.add("correct");
        score++;
        nextButton.style.display = "block";
    } else {
        const selectedAnswerButton = answerButtons.querySelector(`button[data-correct="true"]`);
        selectedAnswerButton.classList.add("correct");

        if (clickedButton && clickedButton !== selectedBtn) {
            clickedButton.classList.add("incorrect");
            const infoLink = document.createElement("a");
            infoLink.href = "process-f.html";
            infoLink.textContent = " Incorrect answer, press here to review document and try again";
            selectedBtn.appendChild(infoLink);
            selectedBtn.classList.add("learn-more");


            Array.from(answerButtons.children).forEach(button => {
                button.disabled = true;
            });
        }

        nextButton.style.display = "none";


    }

}


Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }

});
nextButton.style.display = "block";




function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.innerHTML = "Home";
    nextButton.style.display = "block";
}
// Next button function - note: next button does not appear on incorrect answer
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showScore();
    }
    nextButton.innerHTML = currentQuestionIndex < questions.length ? "Next" : "Complete";

}
// next button end of 5 question complete button will show with a link to certificate 
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        window.location.href = "f-certificate.html";
    }
});




startQuiz();