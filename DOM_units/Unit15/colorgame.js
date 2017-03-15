var colors = colorGenerator(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var pickedColor = colors[pickColor()];

colorDisplay.textContent = pickedColor;

var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var easyMode = false;

easy.addEventListener("click", function() {
	if (easyMode == true) {
		return;
	}
	easyMode = true;
	easy.classList.add("selected");
	hard.classList.remove("selected");

	resetGame();
});

hard.addEventListener("click", function() {
	if (easyMode == false) {
		return;
	}
	easyMode = false;
	hard.classList.add("selected");
	easy.classList.remove("selected");

	resetGame();
})

reset.addEventListener("click", function() {
	resetGame();
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		if (this.style.background == pickedColor) {
			messageDisplay.innerHTML = "Correct";
			changeColors(pickedColor);
			h1.style.background = pickedColor;
			reset.innerHTML = "Play Again";
		} else {
			this.style.background = "#232323";
			messageDisplay.innerHTML = "Try Again";
		}
	});
}


function resetGame() {
	var count = 6;
	if (easyMode == true) {
		count = 3;
	}
	colors = colorGenerator(count);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	reset.innerHTML = "New Colors";
	messageDisplay.innerHTML = "";
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var tag = Math.floor(Math.random() * colors.length);
	return tag;
}

function colorGenerator(count) {
	var randomColors = new Array(count)
	for (var i = 0; i < count; i++) {
		var color1 = Math.floor(Math.random() * 256);
		var color2 = Math.floor(Math.random() * 256);
		var color3 = Math.floor(Math.random() * 256);
		randomColors[i] = "rgb(" + color1 + ", " + color2 +", " + color3 + ")";
	}
	return randomColors;
}