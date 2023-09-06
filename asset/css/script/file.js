
const questions = [{
        answers: [{
                correct: true,
                text: "Gloves"
            },
            {
                correct: false,
                text: "Alcohol gel"
            },
            {
                correct: false,
                text: "Nail Polish"
            },
            {
                correct: false,
                text: "A Ring"
            }
        ],
        infoLink: "process-m.html",
        question: `What PPE must be used when using the printing machine?`
    },
    {
        answers: [{
                correct: false,
                text: "First Aid Memoir"
            },
            {
                correct: false,
                text: "Google"
            },
            {
                correct: true,
                text: "Manufacturer's instruction"
            },
            {
                correct: false,
                text: "A co-worker"
            }
        ],
        question: `What must you follow when turning the machine on?`
    },
    {
        answers: [{
                correct: false,
text: "You are wearing socks"
            },
            {
                correct: false,
text: "The power is on"
            },
            {
                correct: false,
text: "That a batch number is present"
            },
            {
                correct: true,
text:"Type and colour of ink are loaded into the ink reservoirs"
            }
        ],
        question: "What must you ensure is correct when setting up the ink?"
    },
    {
        answers: [{
                correct: false,
text: "That all operators are present"
            },
            {
                correct: false,
                text: "Footwear"
            },
            {
                correct: true,
text:"Printed output for any defects, smudging, or misalignment"
            },
            {
                correct: false,
text: "What PPE must be worn"
            }
        ],
        question: "What must be inspected post printing?"
    },
    {
        answers: [{
                correct: false,
text:"Power off the machine following the manufacturer's instructions"
            },
            {
                correct: false,
 text: "Clean the printing machine, including printheads, rollers"
            },
            {
                correct: false,
text: "Properly store unused printing materials and ink"
            },
            {
                correct: true,
text: "All of the above"
            }
        ],
question: "What cleaning and maintenance is required post order closure?"
    }
];


document.addEventListener("DOMContentLoaded", function () {
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
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

function selectAnswer(answerText) {
    const selectedBtn = answerButtons.querySelector(`button[data-correct="true"]`);
    const clickedButton = Array.from(answerButtons.children).find((button) => button.textContent === answerText);

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
            infoLink.href = "process-m.html";
            infoLink.textContent = " Incorrect answer, press here to review document and try again";
            selectedBtn.appendChild(infoLink);
            selectedBtn.classList.add("learn-more");

            Array.from(answerButtons.children).forEach((button) => {
                button.disabled = true;
            });
        }

        nextButton.style.display = "none";
    }
}

Array.from(answerButtons.children).forEach((button) => {
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

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showScore();
    }
    nextButton.innerHTML = currentQuestionIndex 
    < questions.length ? "Next" : "Complete";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        location.href = "certificate.html";
    }
});

startQuiz();
});