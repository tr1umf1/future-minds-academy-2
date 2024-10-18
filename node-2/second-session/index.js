const fs = require('fs').promises;
const path = require('path');


// update appendfile
//delete unlink

async function main() {
    try {
        const data = await fs.readFile('file.txt');
        console.log(data.toString());
    } catch(err) {
        throw err;
    }
}
main();