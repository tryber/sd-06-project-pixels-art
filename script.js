
function clickPixel(event) {
  console.log(sessionStorage.getItem('class'));
  event.target.classList.remove('selected', 'two', 'three', 'four');
  event.target.classList.add(sessionStorage.getItem('class'));
}

function selectColor(event) {
  console.log(event.target.classList[1]);
  switch (event.target.classList[1]) {
    case 'two':
      sessionStorage.setItem('class', 'two');
      break;
    case 'three':
      sessionStorage.setItem('class', 'three');
      break;
    case 'four':
      sessionStorage.setItem('class', 'four');
      break;
    default:
      sessionStorage.setItem('class', 'selected');
  }
}

function clearBoard() {
  for (let element of document.getElementsByClassName('pixel')) {
    element.classList.remove('selected', 'two', 'three', 'four');
  }
}

function setBlackColor() {
  sessionStorage.setItem('class', 'selected');
}

function setBoardSize() {

}

setBlackColor();

window.onload = function () {
  document.getElementById('pixel-board').addEventListener('click', clickPixel);
  document.getElementById('color-palette').addEventListener('click', selectColor);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
  document.getElementById('generate-board').addEventListener('click', setBoardSize);
}





