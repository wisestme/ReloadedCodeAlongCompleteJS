/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, dice, currentScore, latestScore, totalScore, newScore;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
latestScore = 0;
newScore = 0;







//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

let x = document.querySelector('#score-0').textContent;

// Hide the dice image
document.querySelector('.dice').style.display = 'none'

// Set all score values to 0
document.querySelector('#score-0').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';

// Roll dice event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
	dice = Math.floor(Math.random() * 6) + 1;
	currentScore = document.querySelector('#current-' + activePlayer);

	// Display dice image
	let diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png'

	// if rolled number is not a 1, update round score
	if (dice !== 1) {
		roundScore += dice;
		currentScore.textContent = roundScore;
	} else {
		// toggle active class for active player
		let nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
		nowPlaying.classList.toggle('active');

		roundScore = 0;
		currentScore.textContent = roundScore;
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		currentScore.textContent = roundScore;

		// toggle active class for active player
		nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
		nowPlaying.classList.toggle('active');
	}
});

// Hold event listener implementation
let holdBtn = document.querySelector('.btn-hold');

holdBtn.addEventListener('click', function() {
latestScore = parseInt(document.querySelector('#current-' + activePlayer).textContent);
totalScore = document.querySelector('#score-' + activePlayer);
newScore += latestScore;
totalScore.textContent = newScore;

// if rolled number is not a 1, update round score
	
		// toggle active class for active player
		let nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
		nowPlaying.classList.toggle('active');

		roundScore = 0;
		currentScore.textContent = roundScore;
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		currentScore.textContent = roundScore;

		// toggle active class for active player
		nowPlaying = document.querySelector('.player-' + activePlayer + '-panel');
		nowPlaying.classList.toggle('active');
	

});