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

			if (i == gridHeight - 1) {
				cell.classList.add("cell-bottom");
			}

			if (j == 0) {
				cell.classList.add("cell-left");
			}

			if (j == gridWidth - 1) {
				cell.classList.add("cell-right");
			}
		}

		grid.appendChild(rows);
	}
}

createGrid();
