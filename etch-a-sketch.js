const grid = document.querySelector("#grid");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
const btnReset = document.querySelector("#btnReset");
const drawingMode = document.querySelector("#drawingMode");
const btnDraw = document.querySelector("#btnDraw");
const btnErase = document.querySelector("#btnErase");

slider.addEventListener("input", () => {updateSlider()});
slider.addEventListener("change", () => {updateGrid()});
btnReset.addEventListener("click", () => {updateGrid()});
btnDraw.addEventListener("click", () => {switchMode("draw")});
btnErase.addEventListener("click", () => {switchMode("erase")});

// Number of cell along each side of the grid
let size = 16;
// Default mode (draw on the grid)
let mode = "draw";

function createGrid() {
	grid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr)`);

	for (let i = 0; i < (size * size); i++) {
		let cell = document.createElement("div");
		cell.classList.add("cell");
		grid.appendChild(cell);
	}

	const cells = document.querySelectorAll(".cell");
	cells.forEach((cell) => {cell.addEventListener("mouseover", () => {colourCell(cell)})});
}

function clearGrid() {
	while (grid.lastChild) {
		grid.removeChild(grid.lastChild);
	}
}

function updateGrid() {
	sliderValue.textContent = `${slider.value} \u00D7 ${slider.value}`;

	size = slider.value;
	
	clearGrid();
	createGrid();
}

function switchMode(newMode) {
	if (newMode == "draw") {
		mode = "draw";
		drawingMode.textContent = "Draw";
	} else if (newMode == "erase") {
		mode = "erase";
		drawingMode.textContent = "Erase";
	}
}

function colourCell(cell) {
	if (mode == "draw") {
		cell.classList.add("coloured");
	} else if (mode == "erase") {
		cell .classList.remove("coloured");
	}
}

function updateSlider() {
	sliderValue.textContent = `${slider.value} \u00D7 ${slider.value}`;
}

createGrid();
