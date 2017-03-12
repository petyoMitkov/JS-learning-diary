class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `I'm ${this.name}`;
    }
}

//console.log("Person.js works");

module.exports = Person;