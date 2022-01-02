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

function resetGrid() {
	cells.forEach((cell) => {cell.classList.remove("coloured")});
}

function colourCell(cell) {
	cell.classList.add("coloured");
}

const gridHeight = 16;
const gridWidth = 16;
const grid = document.querySelector("#grid");
createGrid();

const cells = document.querySelectorAll(".cell");
const btnReset = document.querySelector("#btnReset");

cells.forEach((cell) => {cell.addEventListener("mouseover", () => {colourCell(cell)})});
 
btnReset.addEventListener("click", () => {resetGrid()})
