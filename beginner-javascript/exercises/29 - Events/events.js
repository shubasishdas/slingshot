// const buttress = document.querySelector('.buttress');
// const buttock = document.querySelector('.buttock');
// // buttress.addEventListener('click', function () {
// //   console.log('someone clicked me!');
// // });

// // function handleClick() {
// //   console.log('@ oops, got clicked');
// // }
// // function handleClick(event) {
// //   console.log(event);
// // }

// // buttress.addEventListener('click', handleClick);
// buttress.addEventListener('click', function () {
//   console.log('Clicked again!');
// });
// buttock.addEventListener('click', handleClick);
// buttock.addEventListener('click', handleClick()); // function is called
// // buttress.removeEventListener('click', handleClick);
// buttress.removeEventListener('click', function () {
//   console.log('Clicked again!');
// });

// // const yeah = () => console.log('yeah');
// // buttress.addEventListener('click', yeah);

// // const buttonList = document.querySelectorAll('button.buy');
// // console.log(buttonList);
// buttonList.forEach(function (eachButton) {
//   //   console.log(eachButton);
//   console.log('button');
//   eachButton.addEventListener('click', handleClick);
// });

// forEach by arrow function
// buttonList.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('just clicked by arrow function');
//   });
// });

// const buttonList = document.querySelectorAll('button.buy');
console.log('It works');
const buttonList = document.querySelectorAll('button.buy');

function handleClick(event) {
  const butt = event.target;
  // console.log(event);
  //   console.log(butt.textContent);
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target.dataset.price);
  //   event.stopPropagation();
}

buttonList.forEach(function (eachButton) {
  eachButton.addEventListener('click', handleClick);
});

window.addEventListener(
  'click',
  function (event) {
    console.log(event.target);
    event.stopPropagation();
    console.log(event.bubbles);
  },
  {
    capture: true,
  }
);

const cool = document.querySelector('.cool');
cool.addEventListener(/* 'mousemove' */ 'mouseenter', function (e) {
  console.log(e.target);
});
