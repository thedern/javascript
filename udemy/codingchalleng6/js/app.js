/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Challenge 1
- player looses entire score if two 6's are rolled in a row. After that event, its the other player's turn

Challenge 2
- Add an input field where the players may set the winning score. Hint - read value with .value property in js

Challenge 3
- Add a second dice to the game.  The player still looses score when a 1 is rolled, same as default rules.
*/

// declare and initialize variables for game
var scores, roundScore, activePlayer, gamePlaying, savedValue, currentValue;


init();

/* ==========================================================================
   Next Player Logic
   ========================================================================== */

function nextPlayer() {
    // next player change, ternary operator which is a shorthand, simple if/else statement
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // reset roundScore
    roundScore = 0;

    // reset the scrore panel
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // switch html active class from one player to the other.  This code edits the tags in the index.html
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // reset Dice image
    document.querySelector('.dice').style.display = 'none';

}



/* ==========================================================================
   BUTTON EVENT - ROLL
   ========================================================================== */

// select element from doc, event-type, anonymous function which only exists in this button
document.querySelector('.btn-roll').addEventListener('click', function () {

    // check if game is playing
    if(gamePlaying) {

        // generate random number.  Dice variable only exists in this function
        var dice = (Math.floor((Math.random() * 6)) + 1);
        console.log('dice' + dice);
        // display the correct dice icon based on dice variable

        // get DOM object
        var diceDom = document.querySelector('.dice');

        // set CSS display value and using type coercion, get correct image file
        diceDom.style.display = 'block';
        diceDom.src = './img/dice-' + dice + '.png';


        if (dice !== 1) {
            // evaluate score
            currentValue = dice;
            console.log('currentValue ' + currentValue);
            console.log('savedValue ' + savedValue);

            if (savedValue == 6 && currentValue == 6) {
                // loose all scores for current player
                scores[activePlayer] = 0;
                roundScore = 0;
                // reset the rolledValue and currentValue for the NEXT player
                currentValue = 0;
                savedValue = 0;
                // pass control to NEXT player
                nextPlayer();
            } else {
                // update roundScore
                roundScore += dice;
                // update rolled value with currentValue
                savedValue = currentValue;
                // display roundScore value in current player score div > id current player
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            
        } else {

            // reset the rolledValue and currentValue for the NEXT player
            currentValue = 0;
            savedValue = 0;
            
            /*  without this timeout, if a 1 is rolled, the 
                the javascript executes the nextplayer function so
                quickly, the dice-1 image is not displayed */

            setTimeout(nextPlayer, 3000);

            
        }

    }

});



/* ==========================================================================
   BUTTON EVENT - HOLD  
   ========================================================================== */

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        // add player's current score to global score
        // the activePlayer (0 or 1) will indicate which index to update with the roundScore
        scores[activePlayer] += roundScore;

        // update UI global score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check if player won game
        if (scores[activePlayer] >= 100) {
            // end game
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        } else {
            // next player
            nextPlayer();
        }
    }
});



/* ==========================================================================
   BUTTON EVENT - NEW  
   ========================================================================== */

// syntax uses 'init' rather than 'init()' to call the init function.
// using 'init()' may have undesired results.
document.querySelector('.btn-new').addEventListener('click', init);


/* ==========================================================================
   Init Function 
   ========================================================================== */


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    savedValue = 0;
    currentValue = 0;

    // game only plays if this variable is set to 'true'
    gamePlaying = true;

    // hide dice image
    document.querySelector('.dice').style.display = 'none';

    // getElementById is faster than querySelector for IDs
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // restore player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // remove all class assignments from all player panels
    // remove method will not throw error if attempting to remove something that is NOT there
    // covering all bases by removing possibilities from all
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // restore active class
    document.querySelector('.player-0-panel').classList.add('active');
    
}   