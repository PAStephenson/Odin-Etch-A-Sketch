// User interface variables
const grid = document.querySelector("#grid");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");
const btnReset = document.querySelector("#btnReset");

slider.addEventListener("input", () => {updateSlider()});
slider.addEventListener("change", () => {updateGrid()});
btnReset.addEventListener("click", () => {updateGrid()});

// Grid variables
let size = 16;

function createGrid() {
	for (let i = 0; i < (size * size); i++) {
		let cell = document.createElement("div");
		cell.classList.add("cell");
		grid.appendChild(cell);
	}
	grid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr)`);

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

function colourCell(cell) {
	cell.classList.add("coloured");
}

function updateSlider() {
	sliderValue.textContent = `${slider.value} \u00D7 ${slider.value}`;
}

// Create the grid and add event listeners to each cell
createGrid();
