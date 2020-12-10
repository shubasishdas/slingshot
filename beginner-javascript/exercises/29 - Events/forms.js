// const cool = document.querySelector('.cool');
// cool.addEventListener('click', function (event) {
//   // event.preventDefault();
//   const shouldChangePage = confirm(
//     'This website might be malicious!, do you wish to proceed?'
//   );
//   if (!shouldChangePage) {
//     event.preventDefault();
//   }
// });

// const signupForm = document.querySelector('[name="signup"]');
// signupForm.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log(event);
// });

// function logEvent(event) {
//   console.log(event.type);
//   console.log(event.currentTarget.value);
// }
// signupForm.name.addEventListener('keyup', logEvent);
// signupForm.name.addEventListener('keydown', logEvent);
// signupForm.name.addEventListener('focus', logEvent);
// signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');
function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('just got clicked!!!');
  }
}
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
