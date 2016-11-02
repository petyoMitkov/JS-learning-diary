/*    *Add and Remove Elements from Array
Write a JS function that adds and removes numbers to / from an array. You will 
receive a command which can either be “add” or “remove”. The initial number is
1. Each input command should increase that number, regardless of what it is.
Upon receiving an “add” command you should add the current number to your 
array. Upon receiving the “remove” command you should remove the last entered
number, currently existent in the array.
The input comes as array of strings. Each element holds a command. 
The output is the array itself, with each element printed on a new line. In
case of an empty array, just print “Empty”.

Examples
Input    Output      Input     Output
add      1            add      1
add      2            add      4
add      3            remove   5
add      4            add
                      add    

Input    Output 
remove   Empty
remove
remove
*/

function addAndRemoveElements(input){
    let newArr = [];
    let counter = 0;
    for (let element of input){
        if (element == "add") {
            newArr.push(++counter);
        } else if (element == "remove"){ 
            newArr.pop();
            counter++;
        }
    }
    let result = (newArr.length == 0)? "Empty" : newArr.join("\n");
    console.log(result);
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);