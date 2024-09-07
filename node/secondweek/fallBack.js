function fetchDate(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 10000);
}

console.log("Fetching data...");

fetchDate((data) => {
    console.log(data);
});

console.log("Data fetched successfully!");