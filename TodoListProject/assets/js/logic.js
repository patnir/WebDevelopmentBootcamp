// check off todos by clicking
$("#taskList").on("click", "li", function() {
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

// click on X to delete task
$("#taskList").on("click",".deleteTask", function(event) {
	//console.log("asdf");
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

// Where it says: $("input[type='text'").keypress(function(event){ 
// it should actually be: $("input[type='text']").keypress(function(event){ the 

// adding listener to text input

$("#txtTodo").on("keypress", function(event) {
	var task = $.trim($(this).val())
	if (event.which == 13 && task.length != 0) {
		console.log("adding_" + task + "_");
		$("#taskList").append("<li class='task'><span class='deleteTask'><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + task + "</li>");
		$(this).val("");
	}
});


// toggle add task

$("#plusIcon").on("click", function() {
	$("#txtTodo").fadeToggle();
});