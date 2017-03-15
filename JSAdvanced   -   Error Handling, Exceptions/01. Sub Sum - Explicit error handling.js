function subsum(arr, startIndex, endIndex) {
    
    //Explicit error handling
    if (!Array.isArray(arr))
        return NaN;   
    if (startIndex < 0) 
        startIndex = 0;
    if (endIndex > arr.length - 1)
        endIndex = arr.length - 1;
    
    //Logic
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i]);
    }
    return sum.toFixed(1);
}

//For test
//subsum([10, 20, 30, 40, 50, 60], 3, 300);  => 150
//subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);  => 3.3
//subsum([10, 'twenty', 30, 40], 0, 2);      => NaN
//subsum([], 1, 2);                          => 0
//subsum('text', 0, 2);                      => Nan