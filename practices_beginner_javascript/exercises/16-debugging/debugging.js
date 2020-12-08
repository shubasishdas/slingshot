const people = [
  { firstName: 'Shubasish', lastName: 'Das', age: 26 },
  { firstName: 'Jibon', lastName: 'Das Gupta', age: 28 },
];
// console.log(people);

//* ** what is the impact of index here?

// people.forEach((person, index) => {
//   //   console.warn(person.firstName);
//   if (person.firstName === 'Shubasish') {
//     console.warn('Dumb Name');
//   }
// });
// console.table(people);

// function smash(name) {
//   console.count(`hit ${name}!`);
//   return `${'return value:5'}`;
// }

// people.forEach((person, index) => {
//   console.group(`Hey! ${person.firstName}`);
//   console.log(person.lastName);
//   console.log(person.age);
// });

// people.forEach((person, index) => {
//   console.groupCollapsed(`Hey! ${person.firstName}`);
//   console.log(person.lastName);
//   console.log(person.age);
// });

people.forEach((person, index) => {
  console.groupCollapsed(`Hey! ${person.firstName}`);
  console.log(person.lastName);
  console.log(person.age);
  console.groupEnd();
});
