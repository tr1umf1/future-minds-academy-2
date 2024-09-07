const EventEmitter = require('events');
const fs = require('fs');

const myEmitter = new EventEmitter();

function writeFile(title, data) {
    fs.writeFileSync(`${title}.txt`, data, "utf8", (error)=> {
    if (err) {
        console.error("Error");
        return;
    }
    console.log("File has been saved!");
})
}

myEmitter.on("krijofile", () => {
    console.log("Po krijohet nje file");        
    writeFile("bota", "sillet rreth diellit")
});

myEmitter.emit("krijofile");