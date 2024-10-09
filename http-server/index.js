const http = require("http");
const fs = require("fs");

let h = "";
let p = "";

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

http
  .createServer((r, rs) => {
    let ul = r.url;
    rs.writeHeader(200, { "Content-Type": "text/html" });
    switch (ul) {
      case "/project":
        rs.write(project);
        rs.end();
        break;
      default:
        rs.write(home);
        rs.end();
        break;
    }
  })
  .listen(3000);
