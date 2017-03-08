let container = (function classHierarchy() {
	class Figure {
		constructor() {
			if (new.target === Figure) {
				throw new Error(" !!! Figure is an Abstract Class and cannot make instance from him.")
			}
		}

		get area() { return undefined; }

		toString() {
			let type = this.constructor.name;
			return type;
		}
	}

	class Circle extends Figure {
		constructor(radius) {
			super();
			this.radius = radius;
		}

		get area() {
			return Math.PI * this.radius * this.radius;
		}

		toString() {
			//let type = this.constructor.name;
			return super.toString() + ` - radius: ${this.radius}`;
		}
	}

	class Rectangle extends Figure {
		constructor(width, height) {
			super();
			this.width = width;
			this.height = height;
		}

		get area() {
			return this.width * this.height;
		}

		toString() {
			//let type = this.constructor.name;
			return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
		}
	}

	return { Figure, Circle, Rectangle };
})();

// Testing
let c = new container.Circle(5);
let r = new container.Rectangle(5, 2);

///////
c.area;

r.area;

///////
c.toString();

r.toString();

//////
let f = new container.Figure();