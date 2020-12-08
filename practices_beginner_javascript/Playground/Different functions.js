// let age = 100;

// let hair = 'lk';
// function go() {
//   age = 700;
//   hair = ` blonde`;
//   console.log(age);
//   return 500;
// }
// go();
// console.log(hair);
// console.log(age);

// function outer() {
//     const outerVar = 'This is from outer function';
//     return 100;
// }
// outer();

// function outer() {
//   const outerVar = 'This is from outer function';
//   console.log(1000);
//   return outer;
// }
// console.log(outer());

// Compare below 2 program // DJ
// function outer() {
//     const outerVar = 'This is from outer function';
//     console.log(1000);
//     return outer();
//   }
//   console.log(outer());

// function outer() {
//     const outerVar = 'This is from outer function';
//     function inner() {
//         const innerVar = 'This is from inner function';
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     return inner();
// }
// outer();

// Output for outer() return  all stateements of inner function
// Output for outer return  all stateements of outer function

// function outer() {
//     const outerVar = 'This is from outer function';
//     function inner() {
//         const innerVar = 'This is from inner function';
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     return inner;
// }
// outer();

// From DJ //Resolved
// Following two examples are same
// function outer() {
//     const outerVar = 'This is from outer function';
//     function inner() {
//         const innerVar = 'This is from inner function';
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     return inner;
// }
// const innerFn = outer();
// innerFn();

// function outer() {
//   const outerVar = 'This is from outer function';
//   return function () {
//     const innerVar = 'This is from inner function';
//     console.log(innerVar);
//     console.log(outerVar);
//   };
// }
// const innerFn = outer();
// innerFn();

// Check value for person("chy") too....

// function person(firstName = ' ') {
//     const upperFirstName = firstName.toUpperCase();
//     return function (lastName) {
//         return `${upperFirstName} ${lastName}`;
//     };
// }
// const yourFirstName = person('Shubasish');
// const yourMainName = person('Jibon');
// console.log(yourFirstName('Das'));
// console.log(yourMainName('Das Gupta'));

// Following 3 functions are same?

// function outer() {
//   const outerVar = 'This is from outer function';
//   function inner() {
//     const innerVar = 'This is from inner function';
//     console.log(innerVar);
//     console.log(outerVar);
//   };
//   inner();
// }
// outer();

// function outer() {
//     const outerVar = 'This is from outer function';
//     function inner() {
//       const innerVar = 'This is from inner function';
//       console.log(innerVar);
//       console.log(outerVar);
//     };
//     return inner;
//   }
//   const innerFn = outer();
//   innerFn();

// function outer() {
//     const outerVar = 'This is from outer function';
//     return function () {
//       const innerVar = 'This is from inner function';
//       console.log(innerVar);
//       console.log(outerVar);
//     };
//   }
//   const innerFn = outer();
//   innerFn();

// DJ

// function exam1(subject) {
//     let score = 0;
//     return function () {
//         score++;
//         return `you got in ${subject} is ${score}`;
//     };
// }
// const subject1 = exam1('physics');
// const subject2 = exam1('chemistry');
// console.log(subject1());
// console.log(subject2());
