var cards = ['queen','queen','king','king','jack','jack'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');
//var shuffleButton = document.getElementById('resetbutton');


/*if (cardOne===cardTwo) {
alert("You found a match!");
}

if (cardThree===cardFour){
alert("You found a match!");
}

if (cardOne===cardFour){
alert("Sorry, try again.");
}*/

function createBoard() {
	for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	gameBoard.appendChild(cardElement);
	gameBoard.appendChild(cardElement);
	}
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')==='king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	} if (this.getAttribute('data-card')==='queen'){
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
	} if (this.getAttribute('data-card')==='jack'){
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/3/34/Jack_of_hearts2.svg'>";
	}
	if (cardsInPlay.length===2) {
		isMatch(cardsInPlay);
		cardsInPlay =[];
	}
}

function timedResetCards () {
		setTimeout(cardReset, 300);
		function cardReset() {
			var facedown = document.getElementsByClassName('card');
			for (var k=0; k<facedown.length;k++){
			facedown[k].innerHTML='';
			}
		}
}

function isMatch (cards) {
	if (cards[0]===cards[1]) {	
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
		timedResetCards();
	}
}

/*function shuffle(array) {
	var i = array.length, j, t;
  	while(i){
    t = Math.floor(Math.random() * i--);
    j = array[i];
    array[i] = array[t];
    array[t] = j;
	}	
	return array;
}*/

function resetBoard () {
	timedResetCards();
	cardsInPlay();
  	shuffle(cards);
}


createBoard();















