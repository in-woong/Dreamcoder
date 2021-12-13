//1. Class declaration

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.age} is ${this.name}`);
  }
}

const ellie = new Person("ellie", 31);
console.log(ellie.name);
console.log(ellie.age);

//2. getter, setter
class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user = new User("kang", "inwoong", -3);
console.log(user.age);

//3.Field(public, private)

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and Methods

class Article {
  static publisher = "Dream coding";

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
Article.printPublisher();

//5.Inheritance

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(30, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const triangle = new Triangle(30, 10, "red");
triangle.draw();
console.log(triangle.getArea());

//6.Class checking :instanceof

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Rectangle);
