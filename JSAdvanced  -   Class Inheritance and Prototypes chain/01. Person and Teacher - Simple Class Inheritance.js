let container = (function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person: Person,
        Teacher: Teacher
    }
})();

let p = new container.Person("petyo", "@@@");
let t = new container.Teacher("Teacher Tom", "tomt@gmail.com", "Math");
