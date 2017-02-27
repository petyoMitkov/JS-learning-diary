function carCommand(inputCommands) {
    let map = new Map();
    let carManager = {
        create: function([objName, inherit, parent]) {
            parent = parent ? map.get(parent) : null;
            let newObj = Object.create(parent);
            map.set(objName, newObj);
            return newObj;
        },
        set: function([objName, key, value]) {
            let obj = map.get(objName);
            obj[key] = value;
        },
        print: function([objName]) {
            let obj = map.get(objName);
            let objects = [];
            let container = "";
            for (let key in obj) {
                objects.push(key + ":" + obj[key]);
            }
            console.log(objects.join(", "));
        }
    };
    for (let command of inputCommands) {
        let commandParameters = command.split(" ");
        let action = commandParameters.shift();
        carManager[action](commandParameters);
        //console.log(action + " - " +commandParameters);
    }
    return map; //for test
}

carCommand([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
