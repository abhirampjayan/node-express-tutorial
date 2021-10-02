const http = require("http");
const path = require("path");
const fs = require("fs");
const { Agent } = require("https");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(path.join(__dirname, "/public", "index.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.write(data);
  //       res.end();
  //     });
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(path.join(__dirname, "/public", "about.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.write(data);
  //       res.end();
  //     });
  //   }
  //   if (req.url === "/api/users") {
  //     const users = [
  //       {
  //         id: 1,
  //         name: "Abhi",
  //         age: 23,
  //       },
  //       { id: 2, name: "Ramos", age: 24 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  let extension = path.extname(filepath);
  let content = "text/html";
  switch (extension) {
    case ".js":
      content = "text/javascript";
      break;
    case ".html":
      content = "text/html";
      break;
    case ".json":
      content = "application/json";
      break;
    default:
      break;
  }
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "/public", "404.html"),
          (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        );
      }else{
          res.writeHead(500)
          res.end(`server Error : ${err.code}`);
      }
    }else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(content,'utf8');
    }
  });
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server Running on Port", PORT));
