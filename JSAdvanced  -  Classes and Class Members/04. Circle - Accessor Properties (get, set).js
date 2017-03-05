class Circle {
    constructor(radius) { this.radius = radius; }
    get diameter() { return 2*this.radius; } //Property getter
    set diameter(diameter) {              //Property setter
        this.radius = diameter / 2;
    }

    get area() {                               //Read-only property "area"
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(50);
console.log(c.getDiameter);
console.log(c.area);
