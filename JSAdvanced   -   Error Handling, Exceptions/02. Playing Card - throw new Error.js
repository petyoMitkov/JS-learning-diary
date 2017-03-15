class Card {
	constructor(face, suit) {
		 this.face = face;
		 this.suit = suit;
	}

	get face() { return this._face; }
	set face(face) {
		const validFaces = ["2", "3", "4", "5", "6", "7", "8",
			"9", "10", "J", "Q", "K", "A"];
 		if (!validFaces.includes(face)) {
		 	throw new RangeError(`Invalid card face: ${face} 
			The valid faces are:  
			2, 3, 4, 5, 6, 7, 8,
			9, 10, J, Q, K, A`);
		}
		this._face = face; 
	}
	get suit() { return this._suit; }
	set suit(suit) {
		const validSuit = ["S", "H", "D", "C"];
		if (!validSuit.includes(suit)) {
			throw new RangeError(`Invalid Suit: ${suit} 
				Valid Suits are: S, H, D, C`);
		}
		this._suit = suit;
	}
	
	toString() {
		let suitToChar = {
			"S": "\u2660", // ♠
			'H': "\u2665", // ♥
    		'D': "\u2666", // ♦
    		'C': "\u2663"  // ♣
		};
		return this.face + suitToChar[this.suit];
	}	
}

//Test Face
//let card1 = new Card("A", "S");
//let card2 = new Card("R", "H");

//Test Suit
//let card3 = new Card("10", "D");
//let card4 = new Card("10", "M");

//card3.toString();
