var request = ""
todos = []
while (request != "quit") {
	request = prompt("Enter a command")

	if (request == "new") {
		todo = prompt("Enter a todo");
		todos.push(todo);
	}
	else if (request == "list") {
		console.log(todos);
	}
	else if (request == "quit") {
		alert("Bye!");
	}
	else if (request == "delete") {
		if (todos.length == 0) {
			alert("nothing to delete");
		} else {
			todo = prompt("what do you want to delete?");
			index = todos.indexOf(todo);
			if (index != -1) {
				todos.splice(index, 1);
			}
			else {
				alert("does not exist!");
			}
		}
	}
	else {
		alert("Invalid command!");
	}
}