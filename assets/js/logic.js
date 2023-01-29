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

var questionNumber = 0;
var time = 100;


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
            answerBtnEl.attr('id', 'answer');
            answerBtnEl.attr('data-index', i);
            answerBtnEl.text(randomQuestionArray[i]);
            answerBtnEl.addClass('answer-button');
            answerBtnEl.on('click', function () {
                console.log(answerIndex);
                console.log(randomQuestionArray[1]);
                if (answerIndex == randomQuestionArray[1]) {
                    console.log("Correct")
                } else {
                    console.log("Incorrect")
                }
                console.log("hello");
                clearAnswers();
            });
            choicesEl.append(answerBtnEl);
            // console.log("Your answer is", randomQuestionArray[i]);
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
    // if(answerBtnEl){} else {}
    // console.log(answerBtnEl);
    choicesEl.empty();
    loadQuestion();
}


