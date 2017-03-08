let container = (function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    //03. Extend Prototype
    function extendPrototype(Class) {
        Class.prototype.species = "Human";
        Class.prototype.toSpeciesString = function() {
            return `I am a ${this.species}. ${this.toString()}`;
        }
    }
    extendPrototype(Person);


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
})();

let p = new container.Person("petyo", "@@@");
let t = new container.Teacher("Tom", "tomt@gmail.com", "Math");
let s = new container.Student("Ivan", "ivan@yahoo.com", "JS Programming");