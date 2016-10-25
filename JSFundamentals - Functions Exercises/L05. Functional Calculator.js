/*  Functional Calculator
Write a JS program that receives two variables and an operator and performs 
a calculation between the variables, using the operator. Store the different
functions in variables and pass them to your calculator.
The input comes as an array of three strings – two need to be parsed as numbers,
and one is the operator.
The output should be printed on the console.

Examples
Input               Output
['2', '4', '+']     6
['3', '3', '/']     1
['18', '-1', '*']  -18
*/

function calculator([a, b, op]){
    [a, b] = [a, b].map(Number);

    let calc = function(a, b, func) {return func(a, b) };

    let add = function(a, b) {return a + b};
    let substract = function(a, b) {return a - b};
    let multiplay = function(a, b) {return a * b};
    let divide = function(a, b) {return a / b};

    switch(op){
        case "+":
            return calc(a, b, add);
        case "-":
            return calc(a, b, substract);
        case "*":
            return calc(a, b, multiplay);
        case "/":
            return calc(a, b, divide);
    }
}
calculator(['2', '4', '+']);