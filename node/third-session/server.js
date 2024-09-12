const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;

  const menuRestaurenat = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "File pule" },
  ];

  if (req.method === "GET" && pathname == "/api/menuRestaurenat") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Gell the menu", menuRestaurenat }));
  } else if (req.method === "POST" && pathname === "/api/menuRestaurenat") {
    console.log("Body", req);
    res.statusCode = 201;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Create a menu" }));
  } else {
    res.statusCode = 404;
    res.end("Ska menu ketu");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});


// give me a simple server that can get a restaurant meny 
