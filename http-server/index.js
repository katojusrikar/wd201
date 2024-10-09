const http = require("http");
const fs = require("fs");
const mini = require("minimist");
const args = mini(process.argv.slice(2));

const pot = parseInt(args.port);
let h = "";
let p = "";
let reg = "";

fs.readFile("home.html", (e, d) => {
  if (e) {
    throw e;
  }
  h = d;
});
fs.readFile("project.html", (e, d) => {
  if (e) {
    throw e;
  }
  p = d;
});
fs.readFile("registration.html", (e, d) => {
  if (e) {
    throw e;
  }
  reg = d;
});

http
  .createServer((r, rs) => {
    let ul = r.url;
    rs.writeHeader(200, { "Content-Type": "text/html" });
    switch (ul) {
      case "/project":
        rs.write(p);
        rs.end();
        break;
      case "/registration":
        rs.write(reg);
        rs.end();
        break;
      default:
        rs.write(h);
        rs.end();
        break;
    }
  })
  .listen(pot);
