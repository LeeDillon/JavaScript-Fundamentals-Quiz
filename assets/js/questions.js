// Storing questions in an array along with their possible answers and a string indicating the correct answers position in the array
var question1 = ['Inside which HTML element do we put the JavaScript?', '5', '<js>', '<scripting>', '<javascript>', '<script>'];
var question2 = ['What is the correct JavaScript syntax to change the content of the HTML element below? <p id = "demo" > This is a demonstration.</p >', '3', '#demo.innerHTML = "Hello World!";', ' document.getElementById("demo").innerHTML = "Hello World!";', ' document.getElementByName("p").innerHTML = "Hello World!";', ' document.getElement("p").innerHTML = "Hello World!";'];
var question3 = ['Where is the correct place to insert a JavaScript?', '4', ' The <body> section', 'The <head> section', ' Both the <head> section and the <body> section are correct'];
var question4 = ['What is the correct syntax for referring to an external script called "xxx.js"?', '3', '<script href="xxx.js">', '<script src="xxx.js">', '<script name="xxx.js">'];
var question5 = ['The external JavaScript file must contain the <script> tag.', '2', 'False', 'True'];
var question6 = ['How do you write "Hello World" in an alert box?', '3', 'alertBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");'];
var question7 = ['How do you create a function in JavaScript?', '2', ' function myFunction()', ' function:myFunction()', ' function = myFunction()'];
var question8 = ['How do you call a function named "myFunction"?', '3', ' call function myFunction()', ' myFunction()', ' call myFunction()'];
var question9 = ['How to write an IF statement in JavaScript?', '2', ' if (i == 5)', ' if i = 5', ' if i == 5 then', ' if i = 5 then'];
var question10 = ['How to write an IF statement for executing some code if "i" is NOT equal to 5?', '5', ' if i <> 5', ' if (i <> 5)', ' if i =! 5 then', ' if (i != 5)'];

// Store all questions in a bigger array
var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];