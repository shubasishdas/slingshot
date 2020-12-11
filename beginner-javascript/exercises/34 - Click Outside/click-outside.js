const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
console.log(cardButtons);

function handleCardButtonClick(event) {
  //   console.log('Just got clicked');
  const button = event.currentTarget;
  const card = button.closest('.card');
  //   console.log(card);
  const imgSrc = card.querySelector('img').src;
  //   console.log(imgSrc);
  const desc = card.dataset.description;
  //   console.log(desc);
  const name = card.querySelector('h2').textContent;
  //   console.log(name);
  modalInner.innerHTML = `
  <img width = "600" height ="600" src = "${imgSrc}.replace('200','600)}" alt ="${name}"/>
  <p> ${desc}</p>
  `;
  modalOuter.classList.add('open');
}
cardButtons.forEach((butt) =>
  butt.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  isOutside = !event.target.closest('.modal-inner');
  //   console.log(isOutside);
  if (isOutside) {
    // modalOuter.classList.remove('open');
    closeModal();
  }
  // ###keycode.info
});

window.addEventListener('keydown', (event) => {
  // console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
