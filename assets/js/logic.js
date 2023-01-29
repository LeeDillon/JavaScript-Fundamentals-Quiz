// Assigning elements i need to variables
const startSection = $('#start-screen');
const startBtnEl = $('#start');
const questionsEl = $('#questions');
const questionnumberEl = $('#question-number');
const questionTitleEl = $('#question-title');
const choicesEl = $('#choices');
const finalScoreEl = $('#final-score');
const feedbackEl = $('#feedback');
const endSection = $('#end-screen');
const timerEl = $('#time');
// Why doesn't Jquery selector work for audio???
const correctSoundEl = document.getElementById('correctSound');
const incorrectSoundEl = document.getElementById('incorrectSound');

var questionNumber = 0;
var time = 100;
var userScore = 0;


// // Function for getting a random element from an array
// function getRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }



// Function to select 10 questions at random and populate the quiz accordingly
function loadQuestion() {
    if (questionNumber < 10) {
        questionsEl.css('display', 'block');
        startSection.css('display', 'none');

        var questionIndex = Math.floor(Math.random() * questionArray.length);
        var randomQuestionArray = questionArray[questionIndex];
        questionNumber++;
        questionnumberEl.text('Question No. ' + questionNumber + ": ");
        questionTitleEl.text(randomQuestionArray[0]);

        for (i = 2; i < randomQuestionArray.length; i++) {
            var answerBtnEl = $('<button>');
            var answerIndex = i;
            console.log(answerIndex);
            answerBtnEl.attr('id', i);
            // answerBtnEl.attr('dataindex', i); WHY DIDN'T THIS WORK!?!?!
            answerBtnEl.text(randomQuestionArray[i]);
            answerBtnEl.addClass('answer-button');
            answerBtnEl.on('click', function () {
                var buttonValue = this.id;
                console.log(buttonValue);
                console.log(randomQuestionArray[1]);
                if (buttonValue == randomQuestionArray[1]) {
                    console.log("Correct");
                    userScore++;
                    correctSoundEl.play();
                } else {
                    console.log("Incorrect");
                    incorrectSoundEl.play();
                    time - 10;
                }
                console.log("hello");
                clearAnswers();
            });
            choicesEl.append(answerBtnEl);
        }
        questionArray.splice(questionIndex, 1);
    } else {
        questionsEl.css('display', 'none');
        endSection.css('display', 'block');
    }
}

startBtnEl.on('click', loadQuestion);


// Function for clearing answer buttons and loading next question
function clearAnswers() {
    choicesEl.empty();
    loadQuestion();
}


