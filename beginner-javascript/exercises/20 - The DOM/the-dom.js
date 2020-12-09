const p = document.querySelector('p');
console.log(p);

function selector(){
const p = document.querySelector('p');
console.log(p);
}
document.addEventListener('DomContentLoaded',selector);

const p = document.querySelectorAll('p');
const imgs = document.querySelector('.item2');
const p1 = document.querySelector('article');
const imgs01 = imgs.querySelector('p');
console.log(p);
console.log(imgs);
console.log(p1);
console.log(imgs01);


const p = document.querySelector('article');
const heading = p.querySelector('h2');
console.log(p);
console.log(heading);
console.dir(heading);
console.log(heading.textContent);
heading.textContent = 'Just checking the update';
console.log(heading.textContent);

const minju = document.querySelector('.item2');
console.log(minju.textContent);
console.log(minju.innerText);
const pizzaLover = document.querySelector('.pizza');
console.log(pizzaLover.textContent);
pizzaLover.textContent = `${pizzaLover.textContent} 🍕`;
pizzaLover.insertAdjacentText('afterbegin', '🍕');

const test = document.querySelector('.oouch');
test.classList.remove('yeah');
// test.classList.toggle('round');
console.log(test.classList);
// function clickRound() {
//   test.classList.toggle('round');
// }
// test.addEventListener('click', clickRound);
test.alt = 'what a pic!';
console.log(test.alt);
// test.width = 200;
// test.addEventListener('load', function () {
//   console.log(test.naturalWidth);
// });

const custom = document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click', function () {
  alert(`hey ${custom.dataset.name} ${custom.dataset.nickname}`);
  console.log(`hey ${custom.dataset.name} ${custom.dataset.nickname}`);
});
