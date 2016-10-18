/*6.	Cone
Write a JS function to calculate a cone’s volume and surface area by given
height and radius at the base. The input comes as array of two string elements,
each holding a number. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result.

Examples
Input   Output
3       volume = 47.1239
5       area = 83.2298
*/

function cone(input){
    let [r, h] = input.map(Number);
    let s = Math.sqrt(r * r + h * h);
    let v = Math.PI * r * r * h / 3;
    let totalSurface = Math.PI * r * (r + s);
    console.log("value = " + v);
    console.log("area = " + totalSurface);
}
cone(["3", "5"]);