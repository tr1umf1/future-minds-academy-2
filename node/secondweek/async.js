function fetchDate() {
    return new Promise ((resolved, reject) => {
        setTimeout(() => {
         
        }, 2000);
    });
}

async function getData() {
    return new Promise ((resolved, reject) => {
        setTimeout(() => {
          resolved("Done");
        }, 2000);
    });
}


const response = await getData();
console.log(response);