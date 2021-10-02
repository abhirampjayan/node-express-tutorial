const fs = require("fs");

const path = require("path");
//create folder
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err.message);
//     throw err.status;
//   }
//   console.log("Folder Created");
// });
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "I love JS", (err) => {
  if (err) {
    console.log(err.message);
    throw err.status;
  }
  console.log("File writen");
});
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "\n I love React",
  (err) => {
    if (err) {
      console.log(err.message);
      throw err.status;
    }
    console.log("File writen");
  }
);
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err,data) => {
  if (err) {
    console.log(err.message);
    throw err.status;
  }
  console.log(data);
});
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloworld.txt"), (err) => {
  if (err) {
    console.log(err.message);
    throw err.status;
  }
  console.log("renamed");
});