// Initializes variables to store card objects and cards in play
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
var cardsInPlay = [];
//var score = 0;

/*
var resetGame = function(){
	for (var i= 0; i <clickedCards.length; i +=1){
		clickedCards[i]setAttribute('src', 'images/back.png');
	}
}
*/
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	//score += 1;
	//document.getElementById('score').textContent = score;
	} else {
	alert("Sorry, try again!");
	}
	cardsInPlay = [];
};

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};
console.log(cardsInPlay)

var createBoard = function() {
	var board = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipCard);
			board.appendChild(cardElement);
	}
};
/*
var resetGame = function (){
	score = 0;
	document.getElementById('score').textContent = score;
	result.textContent = "New Game?"
};
*/
createBoard();
// var gameReset = document.querySelector('button').addEventListener('click', resetGame);


