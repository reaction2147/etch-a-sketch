const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
let divBox;



function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList.add("divBox");
        grid.appendChild(div);
    }
    divBoxes = document.querySelectorAll(".divBox");
    divBoxes.forEach((divBox) => {
        gridBox.addEventListener("mouseover", (e) => {
            gridBox.classList.add("toggle");
        });
    });
}


reset.addEventListener('click', (e) => {
    divBoxes.forEach((divBox) => {
        divBox.classList.remove("toggle");
    });
});


createGrid(16);