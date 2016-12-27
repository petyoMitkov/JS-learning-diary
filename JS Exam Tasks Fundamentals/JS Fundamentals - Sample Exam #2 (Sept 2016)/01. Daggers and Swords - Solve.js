//Solve - 01.Duggers and Swords
function solve(input) {
    input = input.map(Number).map(Math.floor);
    console.log(
`<table border="1">
<thead>
<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
</thead>
<tbody>`);

    for (let obj of input) {
        if (obj <= 10) continue;
        let bladeType = "dagger";
        let bladeApplication = "";
        if (obj > 40) bladeType = "sword";
        switch (obj % 5) {
            case 0:
                bladeApplication = '*rap-poker';
                break;
            case 1:
                bladeApplication = 'blade';
                break;
            case 2:
                bladeApplication = 'quite a blade';
                break;
            case 3:
                bladeApplication = 'pants-scraper';
                break;
            case 4:
                bladeApplication = 'frog-butcher';
        }
        console.log(`<tr><td>${obj}</td><td>${bladeType}</td><td>${bladeApplication}</td></tr>`);
    }
    console.log(
`</tbody>
</table>`);
}

solve(["17.8", "19.4", "13", "55.8", "126.96541651", "3"]);