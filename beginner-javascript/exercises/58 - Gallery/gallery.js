function Gallery(gallery) {
  //   console.log(gallery);
  if (!gallery) {
    throw new Error('No Galley Found');
  }
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  //   console.log(images);
  const modal = document.querySelector('.modal');
  //   console.log(modal);
  const prevButton = modal.querySelector('.prev');
  // console.log(prevButton);
  const nextButton = modal.querySelector('.next');
  // console.log(nextButton);
  let currentImage;

  function openModal() {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already opened');
      return; // stop the function from running
    }
    modal.classList.add('open'); // dj --- first time class "open" is not found, when that class is created here, is it going back if condition as function doesn't stop in the last statement

    // Event listeners to be bound when we open the modal:
    window.addEventListener('keyup', handleKeyUp); // dj --- why we place these event listener here, what if to place them in very last section
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal(); // stop the function running
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }
  function showNextImage() {
    // console.log(currentImage.nextElementSibling);
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    // console.log(currentImage.previousElementSibling);
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
    }
    // update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  //   function handleImageClick(event) {
  //     showImage(event.currentTarget); // dj --- why showImage instead of console log
  // console.log(event);
  // console.log(event.currentTarget);
  // console.log(event.target);

  // These are our Event Listeners
  //   images.forEach((image) => image.addEventListener('click', handleImageClick));
  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );

  // loop over each image
  images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener('keyup', (e) => {
      // when that is keyup, check if was enter
      if (e.key === 'Enter') {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
