/*4.	Day of the Week
Write a JS function that prints a number between 1 and 7 when 
a day of the week is passed to it as a string and an error 
message if the string is not recognized.
The input comes as an array with one string element in it.
The output should be returned as a result of your program.

Examples
Input	Output
Monday	1
Friday	5
Frabjoy	error
*/

function dayOfWeek(input){            //solve first way
	
    if (input == "Monday") return 1;
    if (input == "Tuesday") return 2;
    if (input == "Wednesday") return 3;
    if (input == "Thursday") return 4;
    if (input == "Friday") return 5;
    if (input == "Saturday") return 6;
    if (input == "Sunday") return 7;
    return "error";
}

function solve([input]){             //solve second way 

	switch (input){
		case "Monday":
			return 1 + 
			console.log(1);
			break;
		case "Tuesday":
		    return 2 + 
		    console.log(2);
		    break;
	    case "Wednesday":
	        return 3 + 
	        console.log(3);
	        break;
        case "Thursday":
            return 4 + 
            console.log(4);
            break;
        case "Friday":
        	return 5 +
        	console.log(5);
        	break;
        case "Saturday":
            return 6 +
            console.log(6);
            break;
        case "Sunday":
            return 7 + console.log(7);
            break;
        default: 
            return "error" + console.log("daas");	
	}
}
solve(["Tuesday"]);
solve(["Thursday"]);
solve(["Saturday"]);
solve(["Frabjoyousday"]);
solve([""]);
solve(["dfafafwerwfd"]);