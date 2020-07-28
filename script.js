// Scriptlist

function removeClass(colorId) {
  const removeClassColor = document.getElementById(colorId);
  removeClassColor.classList.remove('selected');
}

function assignClass(colorId) {
  const assignClassId = document.getElementById(colorId);
  assignClassId.classList.add('selected');
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(function (pixel) {
    pixel.style.backgroundColor = 'white';
  });
}

function selectColor() {
  // pegando o ID de quem esta com a classe .selected
  const selectedColorId = document.querySelector('.selected').id;
  return selectedColorId;
}

function giveColor() {
  const color = selectColor();
  const clickedPixel = document.getElementById(this.id);
  clickedPixel.style.backgroundColor = color;
}

function getColor() {
  const clickColor = document.getElementById(this.id).id;
  const alreadyColor = selectColor();
  if (clickColor !== alreadyColor) {
    removeClass(alreadyColor);
    assignClass(clickColor);
  }
}

function createColorButton(color) {
  const colorContainer = document.getElementById('color-palette');
  const colorBtn = document.createElement('button');
  colorBtn.classList.add('color');
  if (color === 'black') {
    colorBtn.classList.add('selected');
  }
  colorBtn.id = color;
  colorBtn.style.backgroundColor = color;
  colorBtn.addEventListener('click', getColor);
  colorContainer.appendChild(colorBtn);
}

function getRandomColors() {
  let randomColors = ['color1', 'color2', 'color3']
  for (let i = 0; i < randomColors.length; i += 1) {
    let newColor = '#'+Math.random().toString(16).substr(-6);
    randomColors[i] = newColor
  }
  return randomColors;
}

function colorPalete() {
  const colors = ['black']
  const randomColors = getRandomColors();
  for (color in randomColors) {
    colors.push(randomColors[color]);
  }
  // const colors = ['black', 'green', 'blue', 'purple'];
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    createColorButton(color);
  }
}

function createPixelBoard(size) {
  const totalSize = size * size;
  let name = 1;
  const boardWidth = (size * 40) + (size * 2);
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.borderStyle = 'solid';
  pixelBoard.style.borderWidth = '2px';
  pixelBoard.style.width = `${boardWidth}px`;
  for (let i = 0; i < totalSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = name;
    pixel.addEventListener('click', giveColor);
    pixelBoard.appendChild(pixel);
    name += 1;
  }
}

function clearButton() {
  const clearButon = document.getElementById('clear-board');
  clearButon.addEventListener('click', clearBoard);
}

function sizeButtons() {
  const actualBoard = document.getElementById('pixel-board')
  const generateButton = document.getElementById('generate-board');
  const sizeField = document.getElementById('board-size');
  let newBoardSize = 5;
  sizeField.addEventListener('input', () => {
    newBoardSize = sizeField.value
  });
  generateButton.addEventListener('click', () => {
    while (actualBoard.firstChild) {
      actualBoard.removeChild(actualBoard.lastChild);
    }
    if (sizeField.value > 4 && sizeField.value < 51) {
      createPixelBoard(newBoardSize);
    } else {
      alert('Board invalido');
    }
  });
}

window.onload = function () {
  // console.log('page loaded')
  // global variables
  // selected = 'black';
  // calls
  getRandomColors();
  colorPalete();
  sizeButtons();
  createPixelBoard(5);
  clearButton();
};


// function createPixelBoard(size) {
//   const totalSize = size * size;
//   let name = 1;
//   const boardWidth = (size * 40) + (size * 2);
//   const pixelBoard = document.getElementById('pixel-board');
//   pixelBoard.style.borderStyle = 'solid';
//   pixelBoard.style.borderWidth = '2px';
//   pixelBoard.style.width = `${boardWidth}px`;
//   for (let i = 0; i < totalSize; i += 1) {
//     const pixel = document.createElement('div');
//     pixel.classList.add('pixel');
//     pixel.id = name;
//     pixel.addEventListener('click', giveColor);
//     pixelBoard.appendChild(pixel);
//     name += 1;
//   }
// }