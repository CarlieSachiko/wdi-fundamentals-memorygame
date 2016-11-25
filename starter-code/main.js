var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');


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
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
	}
	if (cardsInPlay.length===2) {
		isMatch(cardsInPlay);
		cardsInPlay =[];
	}
}

function isMatch (cards) {
	if (cards[0]===cards[1]) {
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
	//for (var k=0; k<cards.length;k++){
	//	document.getElementsByClassName('card')[k].innerHTML='';
		document.getElementsByClassName('card')[0].innerHTML='';
		document.getElementsByClassName('card')[1].innerHTML='';
		document.getElementsByClassName('card')[2].innerHTML='';
		document.getElementsByClassName('card')[3].innerHTML='';
}


function shuffleCards (array){
  for (var i = array.length - 1; i > 0; i --) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var shuffleButton = document.querySelector('button');
shuffleButton.addEventListener('click', shuffleCards(cards));

createBoard();





/*function shuffleCards (array){
  var i = 0
    , j = 0
    , temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
var resetButton =document.querySelector('button');
resetButton.addEventListener('click', shuffleCards);*/












