// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');
const MOVE_AMOUNT = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// ctx.lineCap = 'square';
ctx.lineWidth = 10;

// const width = canvas.width;
// const height = canvus.height;

// const { width } = canvas;
// const { height } = canvas;
/// making a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

// Math.random()*100
// // Math.floor(Math.random()*100)
// console.log(Math.ceil(Math.random() * 100));
// console.log(Math.floor(Math.random() * 100));

// Testing a random number to a floor and ceil value
// const random = Math.random();
// console.log(Math.floor(random * 100));
// console.log(Math.ceil(random * 100));

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%) `;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a Draw function

// function draw(options) {
//   console.log(options.key);
// }

function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  //   x -= 10;
  //   y -= 10;
  //   x -= MOVE_AMOUNT;
  //   y -= MOVE_AMOUNT;
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  console.log(e.key);
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
    console.log(e.key);
    console.log('Got the suspense!!!');
  }
}

// clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      console.log('Done the shake!!!');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clearCanvas);
