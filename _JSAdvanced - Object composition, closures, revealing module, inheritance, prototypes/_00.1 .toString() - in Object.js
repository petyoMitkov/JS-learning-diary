// .toString() - function in Obj
let rect = {
	width: 10, 
	height: 5,
	grow: function(w, h) {
		this.width += w;
		this.height += h; 
	},
	toString: function() {
		return `rect[${this.width} x ${this.height}]`;
	}
};

console.log(rect);
console.log("Text + Obj return .toString() : " + rect);

let rect2 = {
	width: 23420, 
	height: 3425,
	grow: function(w, h) {
		this.width += w;
		this.height += h; 
	},
	toString: function() {
		return `rect2[${this.width} x ${this.height}]`;
	}
};

console.log(rect2);
console.log("Text + Obj return .toString() : " + rect2);

let joinToArr = [rect,rect2].join(" , ");
console.log("[rect,rect2].join(' , ') = "  +  joinToArr);
//console.log(joinToArr);