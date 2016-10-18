/*    Words Uppercase
Write a JS program that extracts all words from a passed in string and converts them 
to upper case. The extracted words in upper case must be printed back on 
a single line concatenated by “, “.
The input comes as an array of strings with only one entry - the text from which 
to extract and convert the words.
The output should be a single line containing the converted string.

Examples
Input                   Output
['Hi, how are you?']	HI, HOW, ARE, YOU

*/

function wordsUppercase([str]) {
  let strUpper = str.toUpperCase();
  let words = extractWords();
  words = words.filter(w => w != '');
  return words.join(', ');
  function extractWords() { return strUpper.split(/\W+/); }
}
wordsUppercase(['Hi, how are you?']);