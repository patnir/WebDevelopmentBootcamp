var btnP1 = document.getElementById("player1");
var btnP2 = document.getElementById("player2");
var reset = document.getElementById("reset");
var dispscore1 = document.getElementById("score1");
var dispscore2 = document.getElementById("score2");
var dispMax = document.querySelector("p");

var txtMax = document.getElementById("maxScore");
console.log(txtMax);

var score1 = 0;
var score2 = 0;
var maxScore = 5;
var newGame = false;


txtMax.addEventListener("change", function() {
	maxScore = Number(txtMax.value);
	dispMax.innerHTML = "Playing to " + maxScore;
	resetAll();
});

btnP1.addEventListener("click", function() {
	if (newGame == true) {
		return;
	}
	score1 += 1;
	//alert(score1);
	updateScore()
	checkStatus();
});



btnP2.addEventListener("click", function() {
	if (newGame == true) {
		return;
	}
	score2 += 1;
	//alert(score2);
	updateScore()
	checkStatus();
});

reset.addEventListener("click", function() {
	//alert("reset");
	resetAll();
});

function resetAll() {
	score1 = 0;
	score2 = 0;
	newGame = false;
	dispscore1.classList.remove("winner");
	dispscore2.classList.remove("winner");
	updateScore();
}

function updateScore() {
	dispscore1.textContent = score1;
	dispscore2.textContent = score2;
}

function checkStatus() {
	if (maxScore <= score1) {
		newGame = true;
		dispscore1.setAttribute("font-color", "green");
		dispscore1.classList.add("winner");
		//alert("player 1 wins");
	} else if (maxScore <= score2) {
		newGame = true;
		//alert("player 2 wins");
		dispscore2.setAttribute("font-color", "green");
		dispscore2.classList.add("winner");
	}
}

