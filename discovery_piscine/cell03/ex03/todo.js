

const button = document.getElementById("newBtn");
const list = document.getElementById("ft_list");

button.onclick = function() { // fonction to ask something

    let todo = prompt("Add a new task");

    if (todo && todo.trim() !== "") {

        let div = document.createElement("div");
        div.textContent = todo;

        list.prepend(div); // add to the top

    }
};

//fonction to delete//
div.onclick = function() {

    if (confirm("Delete this task ?")) {
        div.remove();
    }

};

//Save tasks with cookies//
function saveTodos() {

    let todos = [];
    let items = list.children;

    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    document.cookie = "todos=" + JSON.stringify(todos);
}

//update the tasks at startup, changer//
function loadTodos() {

    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {

        let [name, value] = cookie.split("=");

        if (name === "todos") {

            let todos = JSON.parse(value);

            todos.forEach(todo => {

                let div = document.createElement("div");
                div.textContent = todo;

                div.onclick = function() {
                    if (confirm("Supprimer ?")) {
                        div.remove();
                        saveTodos();
                    }
                };

                list.appendChild(div);

            });

        }
    }
}