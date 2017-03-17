// check off todos by clicking
$("li").click(function() {
	//$(this).css("text-decoration", "line-through");
	//$(this).css("color", "gray");
	/*$(this).css({
		textDecoration: "line-through",
		color: "gray"
	});*/
	/*if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css({
			textDecoration: "none",
			color: "black"
		});
	} else {
		$(this).css({
			textDecoration: "line-through",
			color: "gray"
		});
	}*/
	$(this).toggleClass("taskCompleted");
});