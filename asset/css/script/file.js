const questions = [
    {
        question: "What should be worn on your hands when operating the printing machine?",
        answers:[
            { text: "Gloves", correct: true },
            { text: "Alcohol gel", correct: false },
            { text: "Nail polish", correct: false },
            { text: "A ring", correct: false },
        ],
        infoLink: "process-m.html"
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
            { text: "That a batch number is present", correct: false },
            { text: "Type and colour of ink are loaded into the ink reservoirs", correct: true },
        ]
    },
    {
        question: "What must be inspected post printing?",
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

//function showAlertMessage(message) {
   // const alertMessageElement = document.getElementById('alertMessage');
    //const alertContent = alertMessageElement.querySelector('p');
    
    //alertContent.textContent = message;
    //alertMessageElement.style.display = 'block';
//}
//const closeAlertButton = document.getElementById('closeAlert');

//closeAlertButton.addEventListener('click', () => {
   // const alertMessageElement = document.getElementById('alertMessage');
    //alertMessageElement.style.display = 'none';
//});
  

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
nextButton.style.display = "none";
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
    if (currentQuestion.userAnswer === answer.text) {
        button.classList.add("user-answer");    }
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", () => selectAnswer(answer.text));
    answerButtons.appendChild(button);
    
});


}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


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
                infoLink.href = "process-m.html";
                infoLink.textContent = " Incorrect answer, press here to review document and try again";
                selectedBtn.appendChild(infoLink);
                selectedBtn.classList.add("learn-more");
                
                //const selectedAnswerButton = answerButtons.querySelector(`button`)
               // showAlertMessage("Incorrect answer, please review the document and start again")
               
               // selectedAnswerButton.disabled = true;
               // alert("Incorrect answer please review document and start again");
              
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
        //button.addEventListener("click", (event) => selectAnswer(answer.text, event.target));
        //button.disabled = true;
    });
    nextButton.style.display = "block";




function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.innerHTML = "Home"
    nextButton.style.display = "block"
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
showQuestion();
nextButton.style.display = "none"
}else{ 
    showScore();
}
nextButton.innerHTML = currentQuestionIndex < questions.length  ? "Next" : "Complete";

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length ){
        handleNextButton();
    }else{ 
        window.location.href = "certificate.html"; 
    }  
    })



    
startQuiz();
