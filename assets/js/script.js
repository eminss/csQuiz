// =========== start of quiz
// user presses button, onclick event starts timer at 90 seconds
// displays current question
// displays list of possible answers to question
// if answered incorrectly subtract 10 seconds from timer, go to new question
// if answered correctly, go to new question



var timerText = document.getElementById('countdown');
var startBtn = document.getElementById('startBtn');
var questionList = document.getElementsById('optionsList');

console.log(timerText);
var timeLeft = '';

function testTime() {
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
}

// declare questions array

    var questions = [
    {
        question: 'What was the highest concurrent average players in CS:GO in a month?',
        answer: '991,640 players',
        options: ['99,164 players', '420,690 players', '5 players', '991,640 players']
    },
    {
        question: 'What is the most expensive cosemtic item for CS:GO ever sold?',
        answer: '$150k',
        options: ['$13.5k', '$10k', '$1k', '$150k']
    }, 
    {
        question: 'What was the highest concurrent viewers during a CS:GO tournamet?',
        answer: '1.2 million viewers',
        options: ['2.1 million viewers', '435k viewers', '350k viewers', '1.2 million viewers']
    }
    ];


    // console.log(questions[0].answer);


    function listQuestion(){
        
        for (let i = 0; i <= questions.length; i++) {
            questionList.textContent = questions[i].options;
            // console.log(questions[i].options);
        }
        
        
        // questionList.textContent(questions[0].options);
    }

    questionList.textContent = questions[0].options
    listQuestion();
startBtn.addEventListener("click", testTime);