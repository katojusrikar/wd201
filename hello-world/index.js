const http = require("http");
const fs = require("readline");

const x = fs.createInterface({
  input: process.stdin,
  output: process.stdout,
});

x.question("enter your name", (n) => {
  console.log(n);
  x.close();
});

//k
//server.listen(3000);
