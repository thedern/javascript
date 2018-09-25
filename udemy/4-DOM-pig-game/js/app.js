/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// declare and initialize variables for game

var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

/* 
   Produce random number 1 - 6.

   generate random number with Math object
   random produces a random floating point number
   between 0 and 1.

   dice have faces 1 - 6, so need to multiply 
   number (which is any float between 0 and 1) 
   by 6 and then round to lowest integer using 
   floor division.  Then, add 1 due to range of
   floor(random * 6) is only integers 0 - 5.

   dice = (Math.floor((Math.random() * 6)) + 1);

    this will be used in the roll dice button
*/

/*
  place value of dice in webpage using DOM.
  enter class or ID in querselector the same
  way you do for css. Queryselector finds first
  tag matching string entered.

  used the id of #current- + activePlayer (via type conversion)
  to minimize code and make the statement below more dynamic as
  it now may be used for activePlayer '0' or activePlayer '1'.

  textContent method value of dice to page in
  class/id specified.  Only writes Text

  innerHTML method can write html which is more dynamic than
  plain text.

  document object!

  //document.querySelector('#current-' + activePlayer).textContent = dice;

  document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>';

  This too will be used when we click the roll button

*/

/* 
  querySelector acting on css to hide the dice img in class '.dice'
  set display: none.  Dice icon should not be displayed until roll is
  made.

  document.querySelector('.dice').style.display = 'none';

*/

/* ==========================================================================
   Initialize Screen Upon start
   ========================================================================== */

// hide dice image
document.querySelector('.dice').style.display = 'none';

// getElementById is faster than querySelector for IDs
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/* ==========================================================================
   Events
   ========================================================================== */

// select element from doc, event-type, anonymous function which only exists in this button
document.querySelector('.btn-roll').addEventListener('click', function () {

    // generate random number.  Dice variable only exists in this function
    var dice = (Math.floor((Math.random() * 6)) + 1);

    // display the correct dice icon based on dice variable

    // get DOM object
    var diceDom = document.querySelector('.dice');

    // set CSS display value and using type coercion, get correct image file
    diceDom.style.display = 'block';
    diceDom.src = './img/dice-' + dice + '.png';


    if (dice !== 1) {
        // update score
        roundScore += dice;
        // display roundScore value in current player score div > id current player
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        // next player 
    }

});
