/*    Distance over Time
Two objects start from point A and travel in the same direction at 
constant speeds V1 and V2 for a period T. Write a JS function that 
calculates the distance between the two object at the end of the period.
The input comes as array of strings that need to be parsed as numbers. 
The first two elements are the speeds to the two objects in km/h and 
the third element is the time in seconds.
The output should be printed to the console. Calculate the distance in meters.

Examples
Input            Output
[0, 60, 3600]    60000
[5, -5, 40]	     111.11111111111111
*/

function distance([a, b, c]){
	let aMeterInSec = Number(a) * 1000 / 3600;
	let bMeterInSec = Number(b) * 1000 / 3600;
	let timeInSeconds = Number(c);
	let aDist =aMeterInSec * timeInSeconds;
    let bDist = bMeterInSec * timeInSeconds;

	console.log(Math.abs(aDist - bDist));
}
distance([5, -5, 40]);