
//=======ES5 FUNCTIONS=========
// function square(x) {
//     return x * x;
// };

// console.log(square(9));

//========ARROW FUNCTIONS===========
// const squareArrow = (x) => {
//     return x * x;
// };
// console.log(squareArrow(5));

//Example with const
// const fullName = 'Mike Smith';
// let firstName;
// if(fullName){
//     firstName = fullName.split(' ')[0];
// }
// console.log(firstName);

//The same with ARROW FUNCTIONS
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
//     }
//     console.log(getFirstName('Steven Smith'));  

    const getFirstName = (fullName) => fullName.split(' ')[0];
    console.log(getFirstName('Maryna Netrebchuk'));