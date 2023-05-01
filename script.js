const container = document.getElementById("container");
const slider = document.getElementById("slider");
const value = document.getElementById("value");
const tombol = document.getElementsByClassName("tahu");
const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");
let size = slider.value;
let eraseIsTrue = false;

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const createDiv = document.createElement("div");
            createDiv.className = "tahu";
            container.appendChild(createDiv);
        }
    }
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function mouseHover(e) {
    if (e.buttons > 0) {
        e.target.style.background = "blue";
    }
}

function mouseDown(e) {
    e.target.style.background = "blue";
}

function mouseDownErase(e) {
    e.target.style.background = "white";
}

function mouseHoverErase(e) {
    if (e.buttons > 0) {
        e.target.style.background = "white";
    }
}

function warna(size) {
    for (let i = 0; i < size * size; i++) {
        tombol[i].addEventListener("mousedown", mouseDown); 
        tombol[i].addEventListener("mouseenter", mouseHover);
    }
}

function clear(size) {
    for (let i = 0; i < size * size; i++) {
        tombol[i].style.background = "white";
        
    }
}

function eraser(size) {
    for (let i = 0; i < size * size; i++) {
        tombol[i].addEventListener("mousedown", mouseDownErase); 
        tombol[i].addEventListener("mouseenter", mouseHoverErase);
    }
}

slider.oninput = function() {
    value.innerHTML = slider.value;
    size = slider.value;
    deleteGrid();
    makeGrid(size);
    warna(size);
}

clearBtn.addEventListener("click", () => clear(size));
eraserBtn.addEventListener("click", function() {
    if (eraseIsTrue == false) {
        eraseIsTrue = true;
        eraser(size);
    } else {
        eraseIsTrue = false;
    }
});

makeGrid(size);
warna(size);