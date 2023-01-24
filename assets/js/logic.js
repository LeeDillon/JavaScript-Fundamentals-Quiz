// Assigning elements i need to variables
var questionTitleEl = $('#question-title');
var choicesEl = $('#choices');
var finalScoreEl = $('#final-score');
var feedbackEl = $('#feedback');

// Function to shuffle the questions in the array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Function to select 10 questions at random and populate the quiz accordingly
function initQuiz () {
    var randomQuestionArray = shuffleArray(questionArray);
    for(i=0;i<10;i++) {
        
    }
}


// Function for when an answer is clicked
passwordBtnEl.on('click', function () {
    var newPassword = passwordGenerator(15);
    passwordDisplayEl.text(newPassword);
});