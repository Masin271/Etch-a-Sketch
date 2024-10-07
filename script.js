const body = document.querySelector("body");
body.style.backgroundColor = "gray";
const container = document.createElement("div");
const button = document.createElement("button");
container.classList.toggle("container");
button.style.marginBottom = "10px";
button.textContent = "grid size";
body.appendChild(button);
body.appendChild(container);
function changeBackgroundColor() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function opacity() {
    this.style.opacity = "0.1";
}

function gridFlex(a) {
    for (let i = 0; i < a; i++) {
        let row = document.createElement("div");
        row.classList.toggle("row");
        row.classList.toggle("hover");
            for (let j = 0; j < a; j++) {
                let column = document.createElement("div");
                column.classList.toggle("column");
                column.classList.toggle("hover");
                row.appendChild(column);
            }
        container.appendChild(row);
    }
    const columns = document.querySelectorAll(".column");
    columns.forEach((hover) => {
    hover.addEventListener("mouseover",changeBackgroundColor)
});
}
gridFlex(16);
function antiGridFlex() {
    let clears = document.querySelectorAll(".hover");
    clears.forEach((clear) => {
        clear.remove();
    });
}
button.addEventListener("click", () =>{
    antiGridFlex();
    let a = prompt("grid size");
    if (a > 100) {
        gridFlex(100);
    }
    else {
        gridFlex(a);
    }
});