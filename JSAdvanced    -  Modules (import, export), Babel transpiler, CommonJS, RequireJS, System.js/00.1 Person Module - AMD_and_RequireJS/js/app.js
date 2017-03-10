
/*1.Create package.json file in current folder, wich
    contain obj in json with only 2 properties - name and version.
  2. Instal using requireJS cmd (in current folder): npm install --save requirejs
  3. Use data-main in html file to set your app's path:
     <script data-main="./app.js" src="node_modules/requirejs/require.js">
     </script> */


define(["./person"], function(person) {
    let Person = person;
    result = {};          //Global variable for testing in Browser console
    result.Person = Person;

    return {
      result
    };
});


//For test
//let person = new result.Person("Ivan Ivanov", 30);
//person.toString();
//person.age;

