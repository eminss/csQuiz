// =========== start of quiz
// user presses button, onclick event starts timer at 90 seconds
// displays current question
// displays list of possible answers to question
// if answered incorrectly subtract 10 seconds from timer, go to new question
// if answered correctly, go to new question


var timerText = document.getElementById('countdown');
var startBtn = document.getElementById('startBtn');
var questionUl = document.getElementById('optionsList');
var questionDiv = document.getElementById('questionDiv');
let questionEl = document.getElementById('currentQuestion');
var amountCorrect = 0;
let li1 = document.getElementById('option1');
let li2 = document.getElementById('option2');
let li3 = document.getElementById('option3');
let li4 = document.getElementById('option4');

let liEl = [li1, li2, li3, li4];
var timeLeft = '';

// declare questions array

let questions = [
    {
        question: 'What was the highest concurrent average players in CS:GO in a month?',
        options: ['99,164 players', '420,690 players', '5 players', '991,640 players'],
        answer: '991,640 players'
    },
    {
        question: 'What is the most expensive cosmetic item for CS:GO ever sold?',
        options: ['$13.5k', '$10k', '$1k', '$150k'],
        answer: '$150k'
    },
    {
        question: 'What was the highest concurrent viewers during a CS:GO tournamet?',
        options: ['2.1 million viewers', '435k viewers', '1.2 million viewers', '350k viewers'],
        answer: '1.2 million viewers'
    },
    {
        question: 'What is the most used weapon in CS:GO?',
        options: ['M4A1-s', 'AK-47', 'Glock-19', 'AWP'],
        answer: 'AK-47'
    }
];

// let questionAnswers = [questions[0].options[3], questions[1].options[3], questions[2].options[2], questions[3].options[1]]

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
    questionEl.textContent = questions[0].question;
    //append first question to document
    questionDiv.appendChild(questionEl);

    // for loop to go through each li element and append it to the document
    for (let i = 0; i < questions.length; i++) {
        // liEl[i].textContent = (i + 1) + ". " + questions[0].options[i];
        liEl[i].textContent = questions[0].options[i];
        questionUl.appendChild(liEl[i]);
    }
    // click handlers to check if answer is correct or incorrect
    for (let i = 0; i < 4; i++) {
        liEl[i].addEventListener("click", function() {
            if(liEl[i].textContent == questions[0].answer) {
                amountCorrect++;
                console.log(amountCorrect);
                console.log(questions[i]);
                // next question
            } else if(liEl[i].textContent == questions[1].answer){
                amountCorrect++;
                console.log(amountCorrect);
            } else if(liEl[i].textContent == questions[2].answer){
                amountCorrect++;
                console.log(amountCorrect);
            } else if(liEl[i].textContent == questions[3].answer){
                amountCorrect++;
                console.log(amountCorrect);
            }
            else {
                timeLeft = timeLeft - 10;
            }
            // console.log("clicked option " + i);
            // console.log(questions[0].answer);
            // console.log(liEl[i].textContent);
            // console.log(i);
            nextQuestion(questions);
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


function nextQuestion(questions) {
    for (let i = 1; i <= questions.length; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(questions[i].options[j]);
            liEl[j].textContent = questions[i].options[j];
        }
        questionEl.textContent = questions[i].question;
    }
    questionUl.addEventListener("click", nextQuestion);
}
startBtn.addEventListener("click", startGame);