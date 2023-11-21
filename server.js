const { createServer } = require("http");
const { parse } = require("url");
const serveFile = require("./serveFile.js");
const contentType = require("./contentType.js");
const PORT = process.env.PORT || 8010;
const server = createServer((req, res) => {
  const { pathname, query } = parse(req.url, true);
  console.log(pathname);
  if (pathname.includes(".")) {
    contentType(pathname, res);
  }
  if (pathname == "/") {
    serveFile("/public/index.html", res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
