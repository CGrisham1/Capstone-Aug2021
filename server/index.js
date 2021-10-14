const http = require("http");
const server = http.createServer(() => {});

const logging = (request, response, next) => {
    console.log(`${request.method} ${request.url} ${Date.now()}`);
    next();
  };

  app.use(logging);

if (request.url === "/status" && request.method === "GET") {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ message: "Service healthy" }));
  response.end();
}


server.listen(4040);
console.log("Listening on port 4040");

