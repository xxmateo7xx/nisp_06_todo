let pole = document.getElementById("tekst");
let przycisk = document.getElementById("przycisk");
let lista = document.getElementById("task-list");
let themeBtn = document.getElementById("themeBtn");

document.body.classList.add("light");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
};

przycisk.onclick = function () {
    if (pole.value === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let tekst = document.createTextNode(pole.value);

    let usun = document.createElement("button");
    usun.textContent = "Usuń";

    checkbox.onchange = function () {
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    };

    usun.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(tekst);
    li.appendChild(usun);

    lista.appendChild(li);

    pole.value = "";
};