// import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running!!!');
// console.log(square(4));
// console.log(add(800, 300));
// console.log(subtract(100, 90));

// import isSenior, { isAdult, canDrink } from './person.js';
// console.log(isAdult(22));
// console.log(canDrink(2));
// console.log(isSenior(65));


// install -> import -> use
// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//stateless functional component
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor() {
//       this.name = 'Mike';
//       this.getGreeting = this.getGreeting.bind(this);
//   }  
//   getGreeting() {
//       return `Hi.My name is ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());


// ////=============
// class NewSyntax {
//     name = 'Jen';  
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}`;
//     } 
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());