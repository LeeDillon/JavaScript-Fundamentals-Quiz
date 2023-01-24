// Assigning elements i need to variables
var questionTitleEl = $('#question-title');
var choicesEl = $('#choices');
var finalScoreEl = $('#final-score');
var feedbackEl = $('#feedback');

passwordBtnEl.on('click', function () {
    var newPassword = passwordGenerator(15);
    passwordDisplayEl.text(newPassword);
});