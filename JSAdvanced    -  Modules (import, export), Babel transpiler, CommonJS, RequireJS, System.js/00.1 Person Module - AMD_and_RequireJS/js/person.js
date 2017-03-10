define([], function() {
    for (let i = 1; i < 21; i++) {
        console.log(i);
    }

    return class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        toString() {
            return `I'm ${this.name}.`;
        }
    };
});
