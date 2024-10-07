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
    this.style.backgroundColor = "black";
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
    const hovers = document.querySelectorAll(".hover");
    hovers.forEach((hover) => {
    hover.addEventListener("mouseover",changeBackgroundColor)
});
}
button.addEventListener("click", () =>{
    let a = prompt("grid size");
    gridFlex(a);
});