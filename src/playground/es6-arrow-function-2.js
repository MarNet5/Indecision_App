//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log (arguments);
    return a + b;
}
console.log(add(7,8));

//this keyword - no longer bound
// const user = {
//     name: 'Steven',
//     cities: ['Chernihiv', 'Shenzhen', 'Hong Kong'],
//     printPlacesLived(){
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// }
// user.printPlacesLived();

const user = {
    name: 'Mia',
    cities: ['Chernihiv', 'Shenzhen', 'Hong Kong'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlacesLived());

//challenge area
const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());