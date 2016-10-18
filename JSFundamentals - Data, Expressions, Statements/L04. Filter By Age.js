/*    Filter By Age
Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.
The input comes as array of string elements. The first element is the minimum age. The second and third elements are the name and age of the first person and the fourth and fifth elements – the name and age of the second person. The three age parameters need to be parsed as numbers.
The output should be printed to the console.

Input                                Output
['12', 'Ivan', '15', 'Asen', '9']    { name: 'Ivan', age: 15 }
*/

function solution([minAge, nameA, ageA, nameB, ageB]){
    let personA = {"name":nameA, "age":Number(ageA)};
    let personB = {"name":nameB, "age":Number(ageB)};
    if (personA.age >= minAge) {
        console.log(personA);
    }
    if (personB.age >= minAge) {
    console.log(personB);
    }
}
solution(['12', 'Ivan', '15', 'Asen', '9']) 
