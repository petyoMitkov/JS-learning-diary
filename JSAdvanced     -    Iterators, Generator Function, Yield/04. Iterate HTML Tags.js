function* extractTags(html) {
    let regex = /<[^>]+>/g;
    let match;
    while(match = regex.exec(html)) {
        let tag = match[0];
        yield tag;
    }
}

let html = `<html><body>
<p align='center'><span lang='en'>Hello</span>, HTML
</p> Bye, bye</body></html>`;

let iter = extractTags(html);

while(true) {         //do the same as next for of loop
    let item = iter.next();
    if (item.done) break;
    console.log(item.value); 
}

for (let tag of iter) {
    console.log(tag);
}