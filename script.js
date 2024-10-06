const body = document.querySelector("body");
const container = document.createElement("div");
container.style.maxWidth = "1200px";
container.style.margin = "0 auto";
container.style.backgroundColor = "black";
body.appendChild(container);
function gridFlex() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.toggle("row");
            for (let j = 0; j < 16; j++) {
                let column = document.createElement("div");
                column.classList.toggle("column");
                row.appendChild(column);
            }
        container.appendChild(row);
    }
}
gridFlex();