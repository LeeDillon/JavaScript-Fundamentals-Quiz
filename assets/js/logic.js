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

var questionNumber = 0;


// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



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
            answerBtnEl.attr('id', 'answer');
            answerBtnEl.text(randomQuestionArray[i]);
            answerBtnEl.addClass('answer-button');
            answerBtnEl.on('click', clearAnswers);
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


