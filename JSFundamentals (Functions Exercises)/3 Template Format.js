/*    Template format
Write a JS program that receives data about a quiz and prints it
formatted as an XML document. The data comes as pairs of question-answer
entries. The format of the document should be as follows:

<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question>
    {question text}
  </question>
  <answer>
    {answer text}           
  </answer>
</quiz>

The input comes as an array of string elements.
The output should be printed on the console.
 */

function tamplateFormat(input){
	let result = '<?xml version="1.0" encoding="UTF-8"?>\n';
	result += '<quiz>\n';
	for (let i = 0; i < input.length; i += 2){
		let question = input[i];
		let answer = input[i + 1];
		result += `  <question>\n    ${question}\n  </question>\n`;
		result += `  <answer>\n    ${answer}\n  </answer>\n`;
	}			
	result += '</quiz>';
	console.log(result);
}
tamplateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
tamplateFormat(["question 1", "answer 1", "question 2", "answer 2"]);