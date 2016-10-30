/*11.   Simple Email Validation
Write a JS function that validates simple emails. The emails should have a username, 
which consists only of English alphabet letters and digits, a “@” sign, and a domain name
after it. The domain should consist only of 2 strings separated by a single dot. The 2
strings should contain NOTHING but lowercase English alphabet letters.
The input comes as an array of strings. The array will hold one element which is an mail. 
The output should be printed on the console. If the given email is valid, print “Valid”, 
if it is not, print “Invalid”.

Examples
Input                   Output
valid@email.bg          Valid
invalid@emai1.bg        Invalid
*/

function emailValidation(input){
    let regExp = /^[a-zA-Z0-9.]+\@[a-z]+\.[a-z]+$/g;
    let isValid = regExp.test(input);     //returns true or false

    if (isValid) {  
        return "Valid";
    } else {
        return "Invalid";
    }
}
emailValidation(["invalid@emai1.bg"]);