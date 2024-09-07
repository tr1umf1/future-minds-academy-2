function fetchDate() {
    return new Promise ((resolved, reject) => {
        setTimeout(() => {
          resolved("Done");
        }, 2000);
    });
}

fetchDate().then((data)=> {
    console.log(data);
}).catch((error) => {
    console.log("Error", error);
});