// Understood all tasks but some exercises are to be done and add here later... all the exercises will be done by again...

// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy!';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
    </p>

    </div>
  `;
  return html;
}
