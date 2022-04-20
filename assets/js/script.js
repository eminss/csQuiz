// =========== start of quiz
// user presses button, onclick event starts timer at 90 seconds
// displays current question
// displays list of possible answers to question
// if answered incorrectly subtract 10 seconds from timer, go to new question
// if answered correctly, go to new question


var timerText = document.getElementById('countdown');
var startBtn = document.getElementById('startBtn');
var questionDiv = document.getElementById('questionDiv');
let questionEl = document.getElementById('currentQuestion');
var amountCorrect = 0;
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');

var currentQuestionIndex = 0;
let optionsEl = [option1, option2, option3, option4];
let timeLeft = '';

// declare questions array

const questions = [
    {
        prompt: 'What was the highest concurrent average players in CS:GO in a month?',
        options: ['99,164 players', '420,690 players', '5 players', '991,640 players'],
        answer: '991,640 players'
    },
    {
        prompt: 'What is the most expensive cosmetic item for CS:GO ever sold?',
        options: ['$13.5k', '$10k', '$1k', '$150k'],
        answer: '$150k'
    },
    {
        prompt: 'What was the highest concurrent viewers during a CS:GO tournamet?',
        options: ['2.1 million viewers', '435k viewers', '1.2 million viewers', '350k viewers'],
        answer: '1.2 million viewers'
    },
    {
        prompt: 'What is the most used weapon in CS:GO?',
        options: ['M4A1-s', 'AK-47', 'Glock-19', 'AWP'],
        answer: 'AK-47'
    }
];

function startGame() {
    startBtn.style.display = 'none';

    timeLeft = 90;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timerText.textContent = timeLeft + ' seconds remaining.';
            timeLeft--;
        } else if (timeLeft == 1) {
            timerText.textContent = timeLeft + ' second remaining.';
            timeLeft--;
        } else {
            timerText.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);

    //populate h3 with first question
    questionEl.textContent = questions[0].prompt;
    //append first question to document
    questionDiv.appendChild(questionEl);

    // for loop to go through each li element and append it to the document
    for (let i = 0; i < optionsEl.length; i++) {
        // liEl[i].textContent = (i + 1) + ". " + questions[0].options[i];
        optionsEl[i].textContent = questions[0].options[i];
        questionDiv.appendChild(optionsEl[i]);
    }
    // click handlers to check if answer is correct or incorrect
    let index;
    for (let i = 0; i < 4; i++) {
        optionsEl[i].addEventListener("click", function () {
            if (optionsEl[i].textContent == questions[0].answer) {
                amountCorrect++;
                console.log(amountCorrect);
                console.log(questions[i]);
                // next question
            } else if (optionsEl[i].textContent == questions[1].answer) {
                amountCorrect++;
                console.log(amountCorrect);
            } else if (optionsEl[i].textContent == questions[2].answer) {
                amountCorrect++;
                console.log(amountCorrect);
            } else if (optionsEl[i].textContent == questions[3].answer) {
                amountCorrect++;
                console.log(amountCorrect);
            }
            else {
                timeLeft = timeLeft - 10;
            }
            nextQuestion();
        })
    }
}

// old WET click handler
//     liEl[0].addEventListener("click", function(){
//         timeLeft = timeLeft - 10;
//         nextQuestion();

//     });
//     liEl[1].addEventListener("click", function(){
//         timeLeft = timeLeft - 10;
//         nextQuestion();

//     });
//     liEl[2].addEventListener("click", function(){
//         timeLeft = timeLeft - 10;
//         nextQuestion();

//     });
//     liEl[3].addEventListener("click", function(){
//         amountCorrect++;
//         nextQuestion();
//         console.log(amountCorrect);
//     });
// }

// function nextQuestion() {
//     if (questionUl == questions[0].answer) {
//         amountCorrect + 1;
//         timeLeft + 5;
//     } else {
//         timeLeft - 10;
//     }
//     questionEl.textContent = questions[1].question;
//     questionUl.textContent = "";
//     for (let i = 0; i < questions.length; i++) {
//         liEl = document.createElement("li");
//         liEl.textContent = (i + 1) + ". " + questions[1].options[i];
//         questionUl.appendChild(liEl);
//     }
//     questionUl.addEventListener("click", nextQuestion2);
// }

// function nextQuestion() {
//     for (let i = 0; i < questions.length; i++) {
//         questionEl.textContent = questions[i].question;
//         liEl[i].textContent = questions[i].options[i];
//     }
// console.log("clicked option");
// liEl.addEventListener("click", nextQuestion);
// }

// console.log(questions.length);
// console.log(questions[2].options);

function questionClicked() {
    // if an options button is clicked
    // then go to the next question
    // if correct answer is clicked, go to next question, amountCorrect++
    // if incorrect answer is clicked, subtract 10 seconds from timeLeft
    console.log("clicked option");
}

option1.addEventListener("click", questionClicked);
option2.addEventListener("click", questionClicked);
option3.addEventListener("click", questionClicked);
option4.addEventListener("click", questionClicked);





function nextQuestion() {
var currentQuestion = questions[currentQuestionIndex]
questionEl.textContent = questions[currentQuestionIndex + 1].prompt;
optionsEl[0].textContent = questions[currentQuestionIndex + 1].options[0];
optionsEl[1].textContent = questions[currentQuestionIndex + 1].options[1];
optionsEl[2].textContent = questions[currentQuestionIndex + 1].options[2];
optionsEl[3].textContent = questions[currentQuestionIndex + 1].options[3];
currentQuestionIndex++;
console.log(currentQuestionIndex);


// currentQuestion.options.forEach(function(optionsEl, currentQuestionIndex){
//     optionsEl.textContent = 
// })
}

startBtn.addEventListener("click", startGame);