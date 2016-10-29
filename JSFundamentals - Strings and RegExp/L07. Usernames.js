/*    Usernames
Write a JS function that parses a list of emails and returns a list of usernames, 
generated from them. Each username is composed from the name of the email address,
a period and the first letter of every element in the domain name. See the examples
for more information.
The input comes as array of string elements. Each element is an email address.
The output is printed on the console on a single line as a comma-formatted list.

Examples
Input
['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']
Output
peshoo.gc, todor_43.mdb, foo.bc
*/

function usernames(arrOfStr) {
    let result = [];
    for (let email of arrOfStr) {                  //"peshoo@gmail.com" 
        let [name, domainPart] = email.split("@"); //["peshoo", "gmail.com"]
        let username = name + ".";
        let domainArr = domainPart.split(".");     // ["gmail", "com"]
        domainArr.forEach(e => username += e[0]);  //username = "peshoo.gc"
        result.push(username);
    }
    console.log(result.join(", "));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);