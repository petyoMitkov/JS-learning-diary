/*    Leap Year
Write a JS function to check whether a year is leap. Leap years 
are either divisible by 4 but not by 100 or are divisible by 400.
The input comes as array of one string element, holding a number.
The output should be printed to the console. 
Print yes if the year is leap and no otherwise.

Examples
Input	Output
1999	no
2000	yes
1900	no
*/

function leapYear(inputYear){
    if ((inputYear % 4 === 0 && inputYear % 100 !== 0) ||
        (inputYear % 400 === 0 )) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
leapYear(2000);

/*  solve from SoftUni 
function leapYear(year) {
  let leap = (year % 4 == 0 && year % 100 != 0) ||
    (year % 400 == 0);
  console.log(leap ? "yes" : "no");
}*/
