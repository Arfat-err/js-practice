// | Pillar        | Meaning                                 | In JS Example                           |
// | ------------- | --------------------------------------- | --------------------------------------- |
// | Encapsulation | Hiding internal state, exposing methods | Private fields, getters/setters         |
// | Abstraction   | Hiding complexity                       | Methods exposing only needed operations |
// | Inheritance   | Reuse via parent/child classes          | `extends`, `super()`                    |
// | Polymorphism  | Many forms, same interface              | Method overriding in subclasses         |

// Encapsulation

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   displayInfo() {
//     console.log(`Name: ${this.name}, Email: ${this.email}`);
//   }
// }

// const u = new User("Alice", "alice@example.com");
// u.displayInfo();

// Example 2

// class BankAccount {
//   #balance; // private field

//   constructor(accountHolder, balance) {
//     this.accountHolder = accountHolder;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     if (amount > 0) this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount("John", 1000);
// account.deposit(500);
// console.log(account.getBalance()); // 1500
// console.log(account.#balance); // Error: Private field

// ---------------------------

// Abstraction

//     class CoffeeMachine {
//   #waterAmount;

//   constructor() {
//     this.#waterAmount = 0;
//   }

//   addWater(amount) {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this.#waterAmount += amount;
//   }

//   makeCoffee() {
//     if (this.#waterAmount < 10) {
//       console.log("Not enough water!");
//     } else {
//       console.log("Coffee is ready!");
//       this.#waterAmount -= 10;
//     }
//   }
// }

// const machine = new CoffeeMachine();
// machine.addWater(50);
// machine.makeCoffee(); // Coffee is ready!

// Inheritance

//     class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Buddy");
// dog.makeSound(); // Buddy barks.

// Example 2 by using super

//     class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   start() {
//     console.log(`${this.brand} vehicle starting...`);
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }

//   display() {
//     console.log(`${this.brand} ${this.model}`);
//   }
// }

// const c = new Car("Toyota", "Camry");
// c.start();         // Toyota vehicle starting...
// c.display();       // Toyota Camry


    // Polymorphism

//     class Employee {
//   work() {
//     console.log("Employee working");
//   }
// }

// class Developer extends Employee {
//   work() {
//     console.log("Developer writing code");
//   }
// }

// class Designer extends Employee {
//   work() {
//     console.log("Designer creating designs");
//   }
// }

// const employees = [new Developer(), new Designer()];
// employees.forEach(e => e.work());

// // Output:
// // Developer writing code
// // Designer creating designs