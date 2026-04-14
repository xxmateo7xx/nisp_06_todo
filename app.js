class TodoApp {
    constructor() {
        this.pole = document.getElementById("tekst");
        this.przycisk = document.getElementById("przycisk");
        this.lista = document.getElementById("task-list");

        this.przycisk.onclick = () => this.dodajZadanie();
    }

    dodajZadanie() {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let tekst = document.createTextNode(this.pole.value);

        let usun = document.createElement("button");
        usun.textContent = "Usuń";

        checkbox.onchange = () => {
            li.style.textDecoration = checkbox.checked ? "line-through" : "none";
        };

        usun.onclick = () => {
            li.remove();
        };

        li.appendChild(checkbox);
        li.appendChild(tekst);
        li.appendChild(usun);

        this.lista.appendChild(li);

        this.pole.value = ""; 
    }
}

new TodoApp();