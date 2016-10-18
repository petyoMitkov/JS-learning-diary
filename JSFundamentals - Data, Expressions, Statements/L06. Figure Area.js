/*    Figure Area
Write a JS function that calculates the area of the figure on the right by given 
values for w, h, W and H. The lower right corner is always common for the two 
rectangles. The input comes as array of string elements that need to be parsed 
as numbers. The output should be returned as a result of your function.

Examples
Input                  Output
['2', '4', '5', '3']   17
['13', '2', '5', '8']  56
*/

function figureArea([w, h, W, H]){
    let figureSmall = w * h;
    let figureBig = W * H;
    let sameAre = Math.min(w, W) * Math.min(h, H);

    return (figureSmall + figureBig) - sameAre; 
}
figureArea(['13', '2', '5', '8']);