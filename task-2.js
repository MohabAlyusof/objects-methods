const person = {
  firstName: "Tim",
  lastName: "Cook",
  greet: function(greeting) {
    return `${greeting.charAt(0).toUpperCase() + greeting.slice(1)}, my name is ${this.firstName}`;
  }
}

// Your code here!

console.log(person.greet("hi")) // Hi, my name is Tim
console.log(person.greet("hey")) // Hey, my name is Tim
console.log(person.greet("hello")) // Hello, my name is Tim