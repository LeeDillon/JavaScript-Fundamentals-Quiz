// Assigning elements i need to variables
const startSection = $('#start-screen');
const startBtnEl = $('#start');
const questionsEl = $('#questions');
const questionTitleEl = $('#question-title');
const choicesEl = $('#choices');
const finalScoreEl = $('#final-score');
const feedbackEl = $('#feedback');



// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



// Function to select 10 questions at random and populate the quiz accordingly
function loadQuestion() {
    questionsEl.css('display', 'block');
    startSection.css('display', 'none');
    // for (i = 0; i < 10; i++) {
    var questionIndex = Math.floor(Math.random() * questionArray.length);
    var randomQuestionArray = questionArray[questionIndex];
    questionTitleEl.text(randomQuestionArray[0]);


    for (i = 2; i < randomQuestionArray.length; i++) {
        var answerBtnEl = $('<button>');
        answerBtnEl.attr('id', 'answer');
        answerBtnEl.text(randomQuestionArray[i]);
        answerBtnEl.addClass('answer-button');
        answerBtnEl.on('click', loadQuestion);
        choicesEl.append(answerBtnEl);
    }
    questionArray.splice(questionIndex, 1);
}

startBtnEl.on('click', loadQuestion);


// Function for when an answer is clicked
// answerBtnEl.on('click', function () {
//     var newPassword = passwordGenerator(15);
//     passwordDisplayEl.text(newPassword);
//     loadQuestion();
// });


