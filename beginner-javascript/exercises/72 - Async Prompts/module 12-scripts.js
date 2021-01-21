// video 72

unction wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  const myPopup = popup;
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely!
  popup.remove();
  // myPopup = null;
  /* eslint-disable no-param-reassign */
  popup = null;
  /* eslint-enable no-param-reassign */
  // console.log(myPopup, 'testing');
}

function ask(options) {
  return new Promise(async function (resolve) {
    // first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
      <label> ${options.title}</label>
      <input type='text' name = 'input'/>
      <button type='submit'>Submit</button>
      </fieldset>
      `
    );
    // console.log(popup);

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button'; // if you don't give a type of button, it will assume it's a submit
      skipButton.textContent = 'cancel';
      // console.log(popup.firstChild);
      popup.firstElementChild.appendChild(skipButton);
      // console.log(popup.firsElementChild);
      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function () {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        console.log('submitted');
        // console.log(e.target.input);
        // console.log(e.target.input.value);

        resolve(e.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );
    // when someone does submit it, resolve the data that was in the input box!

    // insert that popup into that DOM
    document.body.appendChild(popup);

    await wait(50);
    popup.classList.add('open');
  });
}
// ask({title:'does this work',cancel:'true'});

// select all button that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  // const cancel = button.dataset.cancel;
  const cancel = 'cancel' in button.dataset;
  // console.log(cancel);
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  }); // resolve value will be assigned here
  console.log(answer);
}

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

// Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(
//   (answers) => {
//     console.log(answers);
//   }
// );

// const qPromises = questions.map(ask);
// console.log(qPromises);

// In below block, it won't show output sequentially
// questions.forEach(async function (question) {
//   // debugger;
//   console.log('Asking a question');
//   console.log(question);
//   // debugger;
//   const answer = await ask(question);
//   // debugger;
//   console.log(answer);
// });

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over our array
  for (const item of array) {
    // const result = await callback(item);
    // results.push(result);
    // debugger;
    results.push(await callback(item));
  }
  // when we are done the loop, return it!
  // debugger;
  return results;
}

async function go() {
  // debugger;
  const answers = await asyncMap(questions, ask);
  // debugger;
  console.log(answers);
}

go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
