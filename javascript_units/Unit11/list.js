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
	else {
		alert("Invalid command!");
	}
}