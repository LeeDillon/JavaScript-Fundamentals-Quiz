// Assigning elements i need to variables
var questionTitleEl = $('#question-title');
var choicesEl = $('#choices');
var finalScoreEl = $('#final-score');
var feedbackEl = $('#feedback');
var startBtnEl = $('#start');

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



// Function to select 10 questions at random and populate the quiz accordingly
function loadQuestion() {
    questionTitleEl.attr('class', '');
    // for (i = 0; i < 10; i++) {
    var questionIndex = Math.floor(Math.random() * questionArray.length);
    var randomQuestionArray = questionArray[questionIndex];
    questionTitleEl.text = randomQuestionArray[0];

    for (i = 2; i < randomQuestionArray.length; i++) {
        var answerBtnEl = $('<button>');
        answerBtnEl.attr('id', 'answer');
        answerBtnEl.text(randomQuestionArray[i]);
        choicesEl.append(answerBtnEl);
    }
    questionArray.splice(questionIndex, 1);
}

startBtnEl.on('click', function () {
    loadQuestion();
});

// Function for when an answer is clicked
// answerBtnEl.on('click', function () {
//     var newPassword = passwordGenerator(15);
//     passwordDisplayEl.text(newPassword);
//     loadQuestion();
// });


