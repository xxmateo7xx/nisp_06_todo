let pole = document.getElementById("tekst");
let przycisk = document.getElementById("przycisk");
let lista = document.getElementById("task-list");

przycisk.onclick = function() {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let tekst = document.createTextNode(pole.value);

    checkbox.onchange = function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    };

    li.appendChild(checkbox);
    li.appendChild(tekst);

    lista.appendChild(li);
};