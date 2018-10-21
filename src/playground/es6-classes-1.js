//parent class
class Person { //creating construction function
    constructor(name = 'Anonymous', age = 0) { //set by default
        this.name = name;
        this.age = age;
        
    }
  getGreeting() { //set new method
      //return 'Hi.I am ' + this.name + '!';
      return `Hi. I am ${this.name}!`;
  }
  getDescription(){
      return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //super refers to the parent class
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    // hasLocation(){
    //     return !!this.homeLocation;
    // }
    getGreeting(){
        let greeting = super.getGreeting();
        
        if(this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        } 
        return greeting;
    }
} 

const me = new Traveler('Maryna Netrebchuk', 27, 'Hong Kong');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());