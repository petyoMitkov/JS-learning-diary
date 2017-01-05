//Solve - 03.Query Mess => 88% succeed. Test N9 is failed.
function solve(inputArr) {    
    for (let i in inputArr) {
        let input = inputArr[i].split(/\&|\?/);     //get str of inputArr and make it Arr of strings split by &,?
        let regExp = /[a-zA-Z1-9%20 \+]+=[a-zA-Z1-9%20 :\.\+\/]+/;
        let result = {};

        for (let element of input) {
            if (regExp.test(element)) {             //returns true or false
                element = element.replace(/(\+|%20)+/g, " "); //replace %20 and + with " "
                let arr = element.split("=");       
                let key = arr[0].trim();
                let value = arr[1].trim();
                if (result[key]) {
                    result[key].push(" " + value);
                } else {
                    result[key] = [];
                    result[key].push(value);
                }           
            }
        }

        let outputStr = "";
        for (let element in result) {
            outputStr +=`${element}=[${result[element]}]`;
        }
        console.log(outputStr);
    }
}
solve(["login=student&password=student"]);

solve(["field=value1&field=value2&field=value3",
       "http://example.com/over/there?name=ferret"]);

solve(["foo=%20foo&value=+val&foo+=5+%20+203", 
       "foo=poo%20&value=valley&dog=wow+", 
       "url=https://softuni.bg/trainings/coursesinstances/details/1070",
       "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php"]);



