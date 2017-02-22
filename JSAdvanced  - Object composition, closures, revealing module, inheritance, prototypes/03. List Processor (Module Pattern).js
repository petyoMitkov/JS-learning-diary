//03. List Processor
let processCommands = function(inputArr) {
	let commandProcessor = (function() {
		let list = [];
		return {
			add: (newItem) => list.push(newItem),
			remove: (item) => list = list.filter(x => x != item),
			print: function() {console.log(list)}
		}
	})();
	for (let commandUnit of inputArr) {
		let [command, str] = commandUnit.split(" ");
		commandProcessor[command](str);	
	}
};
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processCommands(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);
