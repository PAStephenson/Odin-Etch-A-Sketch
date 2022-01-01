const grid = document.querySelector("#grid");

const gridHeight = 16;
const gridWidth = 16;

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

function colourCell(cell) {
	cell.classList.add("coloured");
}

createGrid();

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {cell.addEventListener("mouseover", () => {
		colourCell(cell);
	});
});
