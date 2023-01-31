// Assigning highscores element to variable
const highscoresEl = $('#highscores');

// Function to get scores array from local storage then iterate through this and create a new list element for each object. This list item then shows the details we want from each object.
function displayScores() {
    scores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    scores.forEach(element => {
        var userScoreEl = $('<li>');
        userScoreEl.text(element.initials + element.finalScore + element.finalTime);
        highscoresEl.append(userScoreEl);
    });
}

displayScores();

// Function to clear screen of scores and delete scores array from local storage
function clearScores() {
    highscoresEl.empty();
    localStorage.clear();
}

