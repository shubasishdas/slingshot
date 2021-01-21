// video 73

function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async for of loop
// async function draw(el) {
//   //   console.log(el);
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     // console.log(el.dataset);

//     // following code block won't set out typeMin/typeMax from dataset
//     // const typeMin = el.dataset;
//     // const typeMax = el.dataset;
//     // console.log(typeMin, typeMax);

//     const { typeMin, typeMax } = el.dataset;
//     // console.log(typeMin, typeMax);
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    el.textContent += '*';
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    // wait for some time
    await wait(1000);
    // exit condition
    if (index <= text.length) {
      drawLetter();
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

// const els = document.querySelectorAll('[data-type]');
// els.forEach(draw);

document.querySelectorAll('[data-type]').forEach(draw);
