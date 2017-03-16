function printDeckOfCards(cards) {
    class Card {   //Class from task 2
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

    // New for task 3 
    let deck = [];
    for (let cardStr of cards) {
        let face = cardStr.substring(0, cardStr.length - 1);
        let suit = cardStr.substring(cardStr.length-1, cardStr.length);     
        try {
            deck.push(new Card(face, suit));
        } catch (err) {   //Change the original class error message
            console.log("Invalid card: " + cardStr);
            return;       // Stop the loop
        }
    }
    console.log(deck.join(" "));   //join() call toString() of the class
} 

//For Test
//printDeckOfCards(['AS', '10D', 'KH', '2C']);  => A♠ 10♦ K♥ 2♣
//printDeckOfCards(['5S', '3D', 'QD', '1C']);   => Invalid card: 1C
