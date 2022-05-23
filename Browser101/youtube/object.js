//1. literals and properties

const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const person = {
  name: "ellie",
  age: "41",
};

print(person);

//2.Computed properties
console.log(person.name);
console.log(person["name"]);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(person, "name");
printValue(person, "age");

//3. property value shorthand

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 5);
console.log(person4);

//4.constructor function
function Person(name, age) {
  //this={}
  this.name = name;
  this.age = age;
  //return this
}

//5. in operator : property existence check (key in object)
console.log("name" in person1);
console.log("age" in person2);
console.log("random" in person3);
console.log(person4.random);

//6. for..in vs for..of

console.clear();
for (key in person4) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1,obj2,obj3...])
const user = { name: "ellie", age: 20 };
const user2 = user;
user2["name"] = "woong";
console.log(user);

//oldway

const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

console.log(user3);
user3.name = "kang";

const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
