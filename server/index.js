const express = require("express");
//const server = http.createServer(() => {});

// dotenv.config();

const app = express();

const logging = (request, response, next) => {
    console.log(`${request.method} ${request.url} ${Date.now()}`);
    next();
  };

// if (request.url === "/status" && request.method === "GET") {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.write(JSON.stringify({ message: "Service healthy" }));
//   response.end();
// }

// DO NOT ADD CORS TO SERVER INDEX.JS ITS A SECURITY RISK
// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(express.json());
app.use(logging);
app.use(cors);

app
  .route("/status")
  .get((request, response) => {
     response.status(200).json({message: "Service healthy"})
  })
  .post((request, response) => {
    response.json({requestBody: request.body});
  });

const PORT = process.env.PORT || 4040;
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

  // server.listen(4040);
  // console.log("Listening on port 4040");
