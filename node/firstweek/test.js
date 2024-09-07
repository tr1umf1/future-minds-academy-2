const fs = require('fs');


const data = "hello world";

fs.writeFileSync("example.txt", data, "utf8", (error)=> {
    if (err) {
        console.error("Error");
        return;
    }
    console.log("File has been saved!");
})