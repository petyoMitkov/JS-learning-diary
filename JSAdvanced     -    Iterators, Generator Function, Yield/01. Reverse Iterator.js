function reverseArrayIterator(arr) { 
    let index = arr.length - 1;
    return {
        next: function() {
            if (index >= 0)
                return { value: arr[index--], done: false };
            else 
                return { done: true };
        }
    }
}

//Usage iterator
let arr = [10, 20, 30];
let iterator = reverseArrayIterator(arr);

while (true) {
    let item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}

// TypeError: reverseArrayIterator(...)[Symbol.iterator] is not a function
for (let item of reverseArrayIterator(arr)) {
  console.log(item);
}