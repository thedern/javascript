
// create private scope so this code can be included in someone else's code without interfering with their code
(function() {

// constructor for quizz
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

// use prototype to extend the question function by creating new method 'displayQuestion'
Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

// use prototype to extend the question function by creating new method 'checkAnswer'
Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct answer');
    } else {
        console.log('Incorrect answer');
    }
}

// quesions ==> correct answer array index (0, 1, or 2) are stored
var q1 = new Question('how old am I?', [44, 22], 0);

var q2 = new Question('what is my favorite band', ['tool', 'beetles', 'elvis'], 0);

var q3 = new Question('what is my favorite food', ['cheese', 'apples'], 1);

// array stores new questions
var inqury = [q1, q2, q3];

// random number generator to get a number 0 - 2, so question can be selected
var n = Math.floor(Math.random() * inqury.length);

// random questons
inqury[n].displayQuestion();

// prompt for answer
// note: shows error in debug output as prompt requires browser
var answer = parseInt(prompt('Please select the correct answer.'));

// call function
inqury[n].checkAnswer(answer);

// invoke function; end scope
})();