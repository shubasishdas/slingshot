const cool = document.querySelector('.cool');
cool.addEventListener('click', function (event) {
  // event.preventDefault();
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function (event) {
  // event.preventDefault();
  console.log(event.target);
});
