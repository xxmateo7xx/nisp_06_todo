let pole = document.getElementById("tekst");
let przycisk = document.getElementById("przycisk");
let lista = document.getElementById("task-list");

przycisk.onclick = function() {
    let li = document.createElement("li");
    li.textContent = pole.value;
    lista.appendChild(li);
};