const container = document.getElementById("container");
const slider = document.getElementById("slider");
const value = document.getElementById("value");
const singleSquare = document.getElementsByClassName("squares");
const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorBtn = document.getElementById("color-pick");
const rainbowBtn = document.getElementById("rainbow-btn");
const gridBtn = document.getElementById("grid-btn");

let size = slider.value;
let eraseIsTrue = false;
let rainbowIsTrue = false;

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const createDiv = document.createElement("div");
            createDiv.className = "squares";
            container.appendChild(createDiv);
        }
    }
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
}

slider.oninput = function() {
    value.innerHTML = slider.value;
    size = slider.value;
    deleteGrid();
    makeGrid(size);
    warna(size);
    eraserBtn.style.background = "white";
    rainbowBtn.style.background = "white";
    rainbowIsTrue = false;
    eraseIsTrue = false;
}

colorBtn.oninput = function() {
    eraserBtn.style.background = "white";
    rainbowBtn.style.background = "white";
    rainbowIsTrue = false;
    eraseIsTrue = false;
}

colorBtn.onclick = function() {
    eraserBtn.style.background = "white";
    rainbowBtn.style.background = "white";
    rainbowIsTrue = false;
    eraseIsTrue = false;
}


clearBtn.addEventListener("click", () => clear(size));
eraserBtn.addEventListener("click", function() {
    if (eraseIsTrue == true) {
        eraserBtn.style.background = "white";
        rainbowBtn.style.background = "white";
        eraseIsTrue = false;
    } else {
        eraserBtn.style.background = "red";
        rainbowBtn.style.background = "white";
        rainbowIsTrue = false;
        eraseIsTrue = true;
    }
});
rainbowBtn.addEventListener("click", function() {
    if (rainbowIsTrue == true) {
        rainbowBtn.style.background = "white";
        eraserBtn.style.background = "white";
        rainbowIsTrue = false;
    } else {
        rainbowBtn.style.background = "red";
        eraserBtn.style.background = "white";
        eraseIsTrue = false;
        rainbowIsTrue = true;
    }
});

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function mouseHover(e) {
    if (e.buttons > 0 && eraseIsTrue == false && rainbowIsTrue == false) {
        e.target.style.background = colorBtn.value;
    } else if (e.buttons > 0 && eraseIsTrue == true) {
        e.target.style.background = "white";
    } else if (e.buttons > 0 && rainbowIsTrue == true) {
        e.target.style.background = randomColor();
    }
}

function mouseDown(e) {
    if (rainbowIsTrue == true && eraseIsTrue == false) {
        e.target.style.background = randomColor();
    } else if (eraseIsTrue == true && rainbowIsTrue == false) {
        e.target.style.background = "white";
    } else if (rainbowIsTrue == false && eraseIsTrue == false) {
        e.target.style.background = colorBtn.value;
    }
}


function warna(size) {
    for (let i = 0; i < size * size; i++) {
        singleSquare[i].addEventListener("mousedown", mouseDown); 
        singleSquare[i].addEventListener("mouseenter", mouseHover);
    }
}

function clear(size) {
    for (let i = 0; i < size * size; i++) {
        singleSquare[i].style.background = "white";
    }
    eraserBtn.style.background = "white";
    rainbowBtn.style.background = "white";
    rainbowIsTrue = false;
    eraseIsTrue = false;
}

function eraser(size) {
    for (let i = 0; i < size * size; i++) {
        singleSquare[i].addEventListener("mousedown", mouseDownErase); 
        singleSquare[i].addEventListener("mouseenter", mouseHoverErase);
    }

}

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`
}

function buttonChangeColor() {
    if (rainbowIsTrue == true) {
        rainbowBtn.style.background = "red";
    }
}

value.innerHTML = slider.value;
makeGrid(size);
warna(size);

