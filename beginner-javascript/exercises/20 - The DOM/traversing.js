const minju = document.querySelector('.minju');
console.log(minju);
console.log(minju.children);
console.log(minju.childNodes);

const minju01 = document.querySelector('.minju01');
console.log(minju01.children);
console.log(minju01.firstElementChild);
console.log(minju01.lastElementChild);
console.log(minju01.previousElementSibling);
console.log(minju01.nextElementSibling);
console.log(minju01.parentElement);

console.log(minju01.childNodes);
console.log(minju01.firstChild);
console.log(minju01.lastChild);
console.log(minju01.previousSibling);
console.log(minju01.nextSibling);
console.log(minju01.parentnodes);

const p = document.createElement('p');
p.textContent = 'I am goin!';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
