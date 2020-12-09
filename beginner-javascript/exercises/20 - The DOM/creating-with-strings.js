const item = document.querySelector('.item');
width = 300;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="alert('yeah_HACKED')" src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// item.innerHTML = `
//     <div>
//         <h2>How are you doin? </h2>
//     </div>
// `;
console.log(myHTML.classList);
item.innerHTML = myHTML;
console.log(item.innerHTML);

const stringToDom = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(stringToDom);
