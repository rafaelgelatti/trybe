const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const generateBoardInput = document.getElementById('board-size');
const generateBoardButton = document.getElementById('generate-board');

function generateRandomRGBColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const rgb = 'rgb(';
  const comma = ',';
  const closeBrackets = ')';
  const randomColor = rgb + r + comma + g + comma + b + closeBrackets;
  return randomColor;
}

function clearSelected() {
  const colorArray = document.getElementsByClassName('color');
  for (let i = 0; i < colorArray.length; i += 1) {
    const nameOfClass = colorArray[i].className.split(' ');
    const spaceBetweenClasses = ' ';
    colorArray[i].className = nameOfClass[0] + spaceBetweenClasses + nameOfClass[1];
  }
}

firstColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

secondColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

thirdColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

fourthColor.addEventListener('click', function (event) {
  clearSelected();
  const classArray = event.target.className.split(' ');
  if (classArray[classArray.length - 1] !== 'selected') {
    event.target.className += ' selected';
  }
});

pixelBoard.addEventListener('click', function (event) {
  const selectedColor = document.querySelector('.selected');
  const bgProperty = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = bgProperty;
  }
});

clearButton.addEventListener('click', function () {
  const pixelsArray = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsArray.length; i += 1) {
    pixelsArray[i].style.backgroundColor = 'white';
  }
});

function generatePixels(input) {
  for (let iLine = 0; iLine < input; iLine += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'line';
    pixelBoard.appendChild(divLine);
    for (let iPixel = 0; iPixel < input; iPixel += 1) {
      const divPixel = document.createElement('div');
      divPixel.style.backgroundColor = 'white';
      divPixel.className = 'pixel';
      divLine.appendChild(divPixel);
    }
  }
}

function generateBoard(input) {
  if (input === '') {
    alert('Board inválido!');
  }
  if (input < 5) {
    input = 5;
  } else if (input > 50) {
    input = 50;
  }
  generatePixels(input);
}

window.onload = function () {
  secondColor.style.backgroundColor = generateRandomRGBColor();
  thirdColor.style.backgroundColor = generateRandomRGBColor();
  fourthColor.style.backgroundColor = generateRandomRGBColor();
  generateBoard(5);
};

generateBoardButton.addEventListener('click', function () {
  const lineArray = document.querySelectorAll('.line');
  for (let i = 0; i < lineArray.length; i += 1) {
    pixelBoard.removeChild(lineArray[i]);
  }
  generateBoard(generateBoardInput.value);
});
