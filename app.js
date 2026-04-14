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

    let left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";
    left.style.gap = "10px";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let tekst = document.createElement("span");
    tekst.textContent = pole.value;

    let usun = document.createElement("button");
    usun.textContent = "✖";

    checkbox.onchange = function () {
        tekst.style.textDecoration = checkbox.checked ? "line-through" : "none";
        tekst.style.opacity = checkbox.checked ? "0.5" : "1";
    };

    usun.onclick = function () {
        li.remove();
    };

    left.appendChild(checkbox);
    left.appendChild(tekst);

    li.appendChild(left);
    li.appendChild(usun);

    lista.appendChild(li);

    pole.value = "";
};