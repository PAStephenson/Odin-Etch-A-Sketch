// User interface variables
const grid = document.querySelector("#grid");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
const btnReset = document.querySelector("#btnReset");

slider.addEventListener("input", () => {updateSlider()});
slider.addEventListener("change", () => {updateGrid()});
btnReset.addEventListener("click", () => {resetGrid()});

// Grid variables
let gridHeight = 16;
let gridWidth = 16;

function createGrid() {
	for (let i = 0; i < gridHeight; i++) {
		let rows = document.createElement("div");
		rows.classList.add("row");
		
		for (let j = 0; j < gridWidth; j++) {
			let cell = document.createElement("div");
			cell.classList.add("cell");
			rows.appendChild(cell);
		}

		grid.appendChild(rows);
	}
}

function updateGrid() {
	sliderValue.textContent = `${slider.value} \u00D7 ${slider.value}`;
}

function resetGrid() {
	cells.forEach((cell) => {cell.classList.remove("coloured")});
}

function colourCell(cell) {
	cell.classList.add("coloured");
}

function updateSlider() {
	sliderValue.textContent = `${slider.value} \u00D7 ${slider.value}`;
}

// Create the grid and add event listeners to each cell
createGrid();
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {cell.addEventListener("mouseover", () => {colourCell(cell)})});
