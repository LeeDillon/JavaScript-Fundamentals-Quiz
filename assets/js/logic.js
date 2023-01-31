// Assigning elements i need to variables
const startSection = $('#start-screen');
const startBtnEl = $('#start');
const questionsEl = $('#questions');
const questionnumberEl = $('#question-number');
const questionTitleEl = $('#question-title');
const choicesEl = $('#choices');
const finalScoreEl = $('#final-score');
const finaltimeEl = $('#final-time');
const feedbackEl = $('#feedback');
const endSection = $('#end-screen');
const timerEl = $('#time');
const timeoutEl = $('#timeout-screen');
const submitEl = $('#submit');

// Non jquery selectors for audio elements(Why doesn't Jquery selector work for audio???)
const correctSoundEl = document.getElementById('correctSound');
const incorrectSoundEl = document.getElementById('incorrectSound');
var initialsEl = document.getElementById("initials");

// Creating variables that need to be accessed by different functions and should have default values at start of quiz
var questionNumber = 0;
var time = 100;
var userScore = 0;
const userObject = {};

// Function to select 10 questions at random and populate the quiz accordingly
function loadQuestion() {

    if (questionNumber < 10) {
        questionsEl.css('display', 'block');
        startSection.css('display', 'none');

        // Get a random question from the array of questions
        var questionIndex = Math.floor(Math.random() * questionArray.length);
        var randomQuestionArray = questionArray[questionIndex];
        questionNumber++;
        questionnumberEl.text('Question No. ' + questionNumber + ": ");
        // Take the title from the first item in the question array
        questionTitleEl.text(randomQuestionArray[0]);
        // Iterate through the rest of the question array from index two onwards where the possible answers are stored. Dynamically generate a button for each possible answer so that you can easily create new questions with as many possible answers as you like.
        for (i = 2; i < randomQuestionArray.length; i++) {
            var answerBtnEl = $('<button>');
            // Give each button an id value that can be checked against the correct answer index that is stored in index 1 of the question array. I wanted to avoid using the id attribute but ran into issues using a custom attribute 'dataindex'.
            answerBtnEl.attr('id', i);
            // answerBtnEl.attr('dataindex', i); WHY DIDN'T THIS WORK!?!?!
            answerBtnEl.text(randomQuestionArray[i]);
            answerBtnEl.addClass('answer-button');
            answerBtnEl.on('click', function () {
                // Get the previously created id value and store to a variable buttonValue
                var buttonValue = this.id;
                // Check buttonValue against correct answer index to see if correct
                if (buttonValue == randomQuestionArray[1]) {
                    console.log("Correct");
                    userScore++;
                    correctSoundEl.play();
                } else {
                    console.log("Incorrect");
                    incorrectSoundEl.play();
                    time -= 10;
                }
                // After button is clicked run below function to reset answer buttons
                clearAnswers();
            });
            choicesEl.append(answerBtnEl);
        }
        // After a question has been used remove this from the array of questions so that it is not repeated
        questionArray.splice(questionIndex, 1);
    } else {
        // After 10 questions have been answered run the following to end the quiz. This quiz is designed so that you can easily expand to have as many questions as you like, 10 will then be selected at random.
        questionsEl.css('display', 'none');
        endSection.css('display', 'block');
        // Save results to userObject and display results
        userObject.finalScore = userScore;
        userObject.finalTime = time;
        finalScoreEl.text(userScore);
        finaltimeEl.text(time);
    }
}

startBtnEl.on('click', startQuiz);

submitEl.on('click', function () {
    // Store initials to userObject
    userObject.initials = initialsEl.value;
    // Get scores from local Storage, if none then return an empty array to populate with our UserObjects. Then finally save the new array back into local storage.
    scores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    scores.push(userObject);
    localStorage.setItem("leaderboard", JSON.stringify(scores));
});

// Function for starting quiz
function startQuiz() {
    startTimer();
    loadQuestion();
}

// Function for clearing answer buttons and loading next question
function clearAnswers() {
    choicesEl.empty();
    loadQuestion();
}

// Function for displaying reducing timer, when it reaches zero a timeout message is displayed
function startTimer() {

    setInterval(function () {
        time--;
        timerEl.text(time);

        if (time < 0) {
            questionsEl.css('display', 'none');
            timeoutEl.css('display', 'block');
            time = 0;
        }
    }, 1000);
}

// Function to store results into an object and then save that in local storage
// const myObject = {
//     name: "john doe",
//     age: 32,
//     gender: "male",
//     profession: "optician"
// }

// window.localStorage.setItem("myObject", JSON.stringify(myObject));
