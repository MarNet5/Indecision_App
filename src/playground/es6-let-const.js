var nameVar = 'Maryna';
var nameVar = 'Slava';
console.log('nameVar', nameVar);

let nameLet = 'Mia';
nameLet = 'Steven';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
   var petName = 'Pickles';
   return petName; 
}
getPetName();

//Block scoping

const fullName = 'Jen Mead';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);