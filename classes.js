class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and age is ${this.age}`;
  }
}

const student = new Student("Bob", 22);
console.log(student.greet());
