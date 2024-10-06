const body = document.querySelector("body");
const container = document.createElement("div");
const button = document.createElement("button");
container.style.maxWidth = "1200px";
container.style.margin = "0 auto";
container.style.backgroundColor = "black";
body.appendChild(button);
body.appendChild(container);
function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}
function gridFlex() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.toggle("row");
        row.classList.toggle("hover");
            for (let j = 0; j < 16; j++) {
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
gridFlex();
