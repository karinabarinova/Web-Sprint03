class Human {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }
    sleepFor = function(seconds) {
        setTimeout(() => console.log("I'm awake now"), seconds);
    }
    eat(calories) {
        while(calories > 0) {
            console.log("Nom nom nom");
            calories -= 100;
        }
        console.log("I'm still hungry");
    }
    hungry = function() {
        setTimeout(() => console.log("I'm hungry"), 5000);
    }
}

class Superhero extends Human {
    constructor(name, surname) {
        super(name, surname)
        this.canFly = false;
        this.hungry();
    }
    fly() {
        if (this.canFly)
            console.log("I'm flying");
        else
            console.log(`I'm only ${this.name} ${this.surname}, I can't fly`);
    }
    fightWithEvil() {
        let arr = ["Khhhh-chh", "Bang-g-g-g", "...", "The evil is defeated!"];
        let i = 0;
        while(arr[i]) {
            console.log(arr[i]);
            i++;
        }
    }
}

// let person = new Superhero("Peter", "Parker", 22, "male");
// console.log(Superhero.prototype.__proto__.constructor.name);
// person.sleepFor(6000);
// person.eat(600);
// person.fly();
// person.fightWithEvil();