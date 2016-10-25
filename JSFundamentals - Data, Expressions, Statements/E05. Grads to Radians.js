/*    Grads to Degrees
Land surveyors use grads (also known as gon, 400 grads in a full turn) in their 
documents. Grads are rather unwieldy though, so you need to write a JS function 
that converts from grads to degrees. In addition, your program needs to constrain 
the results within the range 0°≤x<360°, so if you arrive at a value like -15°, 
it needs to be converted to 345° and 420° becomes 60°. The input comes as an 
array of one string element that needs to be parsed as a number.
The output should be printed to the console.

Examples
Input   Output
[100]   90
[400]   0
[850]   45
[-50]   315
*/
function gradsToRadians(inputGrads){
    inputGrads = Number(inputGrads);
    
    inputGrads = inputGrads % 400;
    if (inputGrads < 0) {
        inputGrads += 400;
    } 

    let result = inputGrads * 0.9;  //index = 360 / 400;
    console.log(result);
}
gradsToRadians(["100"]);
gradsToRadians(["-400"]);
gradsToRadians(["400"]);
gradsToRadians(["-50"]);

