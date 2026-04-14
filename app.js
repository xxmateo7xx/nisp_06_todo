let pole = document.getElementById("tekst");
let przycisk = document.getElementById("przycisk");
let lista = document.getElementById("task-list");

przycisk.onclick = function() {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let tekst = document.createTextNode(pole.value);

    let usun = document.createElement("button");
    usun.textContent = "Usuń";

    checkbox.onchange = function() {
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    };

    usun.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(tekst);
    li.appendChild(usun);

    lista.appendChild(li);
};