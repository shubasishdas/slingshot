console.log(`It's working`);
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

// console.log(terms);
// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');
//   if (!terms) {
//   }
//   terms.addEventListener('scroll', function (e) {
//     console.log(e);
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
//   });
// }
// scrollToAccept();

// function obCallback(payload) {
//   console.log(payload);
//   console.log(payload[0]);
//   console.log(payload[0].isIntersecting);
//   console.log(payload[0].intersectionRatio);
// }

function obCallback(payload) {
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // console.log('REMOVING DISABLED');
    ob.unobserve(terms.lastElementChild);
  }
}

// const ob = new IntersectionObserver(obCallback);
// ob.observe(watch);

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
ob.observe(terms.lastElementChild);
