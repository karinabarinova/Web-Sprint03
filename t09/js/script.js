
const validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value))
                throw new TypeError("The age is not an integer");
            if (value < 0 || value > 200)
                throw new RangeError("The age is invalid");
        }
        if (prop === 'gender') {
            if (value !== 'male' && value !== 'female')
                throw new TypeError("The gender is invalid");

        }
        console.log(`Setting value '${value}' to '${prop}'`);
        obj[prop] = value;
        return true;
    },
    get: function (obj, prop) {
        console.log(`Trying to access the property '${prop}'...`);
        if (obj.hasOwnProperty(prop)) {
            return obj[prop];
        }
        return false;
    }
}

// let person = new Proxy({}, validator);

// person.age = 100;
// person.gender = "male";
// person.age = 'young'; //TypeError
// person.age = 300; //RangeError: The age is invalid
// person.gender = "female";
// console.log(person.age);
// console.log(person.gender);