const creatingPara = document.createElement('p');
creatingPara.textContent = "Hi, I'm creating a paragraph";
creatingPara.classList.add('special001');
creatingPara.dataset.name = 'awesome';
console.log(creatingPara);

const image01 = document.createElement('img');
image01.src = "https://source.unsplash.com/random/300x300"
image01.alt = 'awesome pic';
console.log(image01);

const mydiv = document.createElement('div');
mydiv.classList.add('special02');
console.log(mydiv);


mydiv.appendChild(creatingPara);
mydiv.appendChild(image01);
document.body.appendChild(mydiv);

const heading = document.createElement('h2');
heading.textContent = 'This is h2 heading';
// mydiv.appendChild(heading);
mydiv.insertAdjacentElement("beforebegin", heading);

//Make following ordered and unordered list
// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

const unordered = document.createElement('ul');
const ordered = document.createElement('li');
ordered.textContent = 'One';
const ordered01 = ordered.textContent;
ordered.textContent = 'two';
const ordered02 = ordered.textContent;
ordered.textContent = 'three';
const ordered03 = ordered.textContent;
ordered.textContent = 'four';
const ordered04 = ordered.textContent;
ordered.textContent = 'five';
const ordered05 = ordered.textContent;
document.body.insertAdjacentElement('afterbegin', unordered);
unordered.appendChild(ordered03);
unordered.appendChild(ordered01);
unordered.appendChild(ordered04);
unordered.appendChild(ordered02);
unordered.appendChild(ordered035);
// unordered.insertAdjacentElement('afterend',)

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
