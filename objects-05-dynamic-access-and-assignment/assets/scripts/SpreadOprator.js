const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming"]};

const anotherPerson = person;
console.log(anotherPerson);

const person2 = {... person};
console.log(person2);

person2.hobbies.push("cooking");
console.log(person2);
console.log(person);
