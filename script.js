const container = document.querySelector("#container");

function makeGrid() {
  for (let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}

makeGrid();
