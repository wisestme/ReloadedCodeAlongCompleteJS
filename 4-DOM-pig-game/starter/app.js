/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, dice, diceTwo, currentScore, latestScore,
	aggregateScore, totalScore, nowScore, newScore, count, diceRoll, 
	diceArray,currentDice, previousDice, nowPlaying, scoreInput,
	winningScore;

diceTwo = document.querySelector('.dice2')

function init () {
	scores = [0, 0];
roundScore = 0;
activePlayer = 0;
latestScore = 0;
newScore = 0;
nowScore = 0;
diceArray = 0;
diceRoll = [];

nowPlaying = document.querySelector('.player-0-panel');
		nowPlaying.classList.add('active');
nowPlaying = document.querySelector('.player-1-panel');
		nowPlaying.classList.remove('active');


// Set all score values to 0
document.querySelector('#score-0').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-1').textContent = '0';

// Hide the dice image
document.querySelector('.dice').style.display = 'none'
diceTwo.style.display = 'none';

// display roll dice and hold button
let holdBtn = document.querySelector('.btn-hold');
holdBtn.style.display = 'block';
document.querySelector('.btn-roll').style.display = 'block';
document.querySelector('input').value = 30;

}

// Get the value of the input field

scoreInput = document.querySelector('input').value;
winningScore = parseInt(scoreInput);

function loseTurn () {
	// initializes dice roll arrray
			diceRoll = [];

			nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
		nowPlaying.classList.toggle('active');

		roundScore = 0;
		currentScore.textContent = roundScore;
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		currentScore.textContent = roundScore;

		// toggle active class for active player
		nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
		nowPlaying.classList.toggle('active');

		// updates dice roll array
		diceRoll.push(dice);

		}
init();





//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

let x = document.querySelector('#score-0').textContent;





// Roll dice event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
	scoreInput = document.querySelector('input').value;
	winningScore = parseInt(scoreInput);

	dice = Math.floor(Math.random() * 6) + 1;
	currentScore = document.querySelector('#current-' + activePlayer);
	
	// update the diceRoll array
	diceRoll.push(dice);
	// console.log(diceRoll);

	diceArray = diceRoll;
	
	// // save the previous and current dice to a variable
	 if (diceArray.length > 1) {
	 	currentDice = diceArray[diceArray.length - 1];
	 	previousDice = diceArray[diceArray.length - 2];
	 }
	
	
	// Display dice image
	let diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png'

	// if rolled number is not a 1, update round score
	if (dice !== 1) {
		roundScore += dice;
		currentScore.textContent = roundScore;

		// player loses turn on successive dice score of 6
		if(dice === 6) {
			if(currentDice === previousDice) {
			loseTurn();
			//diceArray.length = 0;
			diceRoll = [];
			}
		}
		
	} else {
		// toggle active class for active player
		// Lose turn
		loseTurn();
		
	}
});

// Hold event listener implementation
let holdBtn = document.querySelector('.btn-hold');

holdBtn.addEventListener('click', function() {

// Get round score
latestScore = document.querySelector('#current-' + activePlayer);
nowScore = parseInt(latestScore.textContent);
// Update total score
totalScore = document.querySelector('#score-' + activePlayer);
 newScore += nowScore;
 
aggregateScore = parseInt(totalScore.textContent);
 	aggregateScore += newScore;
 	totalScore.textContent = aggregateScore;
 // toggle active class for active player
  		let nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
  		nowPlaying.classList.toggle('active');

 		
  		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 		

  		// toggle active class for active player
  		nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
  		nowPlaying.classList.toggle('active');

  		roundScore = 0;
  		newScore = 0;
  		document.querySelector('.dice').style.display = 'none';

  		
 //let player = document.querySelector('#name-' + activePlayer);
 if (aggregateScore >= winningScore) {
 	document.querySelector('.dice').style.display = 'none';
 	holdBtn.style.display = 'none';
 	document.querySelector('.btn-roll').style.display = 'none';
 	setTimeout(function() {
 		// toggle active player back to the winner
 		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 		document.querySelector('#name-' + activePlayer).textContent = 'Winner';
 	}, 500); 
 }
});

document.querySelector('.btn-new').addEventListener('click', init);


