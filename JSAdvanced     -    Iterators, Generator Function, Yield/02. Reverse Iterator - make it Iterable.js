function reverseArrayIterator(arr) { 
    let index = arr.length - 1;
    return {
        [Symbol.iterator]: function() { return this; },  //Make it ITERABLE
        next: function() {
            if (index >= 0)
                return { value: arr[index--], done: false };
            else 
                return { done: true };
        }
    }
}

let arr = [10, 20, 30];
let iterator = reverseArrayIterator(arr);

//Iterator with [Symbol.iterator]
for (let item of reverseArrayIterator(arr)) {
  console.log(item);
}