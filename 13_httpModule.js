
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }

  if (req.url === "/about") {
    res.end("here is our short history");
  }
  //console.log(req);
  //res.write("Welcome to our homepage");
  res.end(`<h1>Oops!!</h1> 
 <p> we cant find the page</p>
 <a href="/">Backhome</a> `);
});

server.listen(5000);
