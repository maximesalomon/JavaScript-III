/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - "this" refers to the global object 
* 2. Implicit Binding - "this" refers to the object it is called on
* 3. New Binding - "this" refers to the object that is created by new
* 4. Explicit Binding - "this" refers to what apply or call is refering to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

sayHelloWindow = name => {
    return `1 - Window Binding --> Hello, my name is ${name}!`;
  }

console.log(sayHelloWindow("Maxime"));
  

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello,',
    sayHelloImplicit: name => {
      return `2 - Implicit Binding --> ${this.greeting} my name is ${name}!`;
    }
  };

console.log(myObj.sayHelloImplicit('Maxime'));

// Principle 3

// code example for New Binding

function Greet(greeter) {
    this.greeting = '3 - New Binding --> Hello, my name is ';
    this.greeter = greeter;
    this.sayHelloNew = function() {
      return this.greeting + this.greeter + "!";
    };
  }

  const maxime = new Greet('Maxime');
  console.log(maxime.sayHelloNew());

// Principle 4

// code example for Explicit Binding

function sayHelloExplicit() {
    console.log(`4 - Explicit Binding --> Hello, my name is ${this.name}!`)
  }
  
const user = {
    name: 'Maxime'
}
  
sayHelloExplicit.call(user)