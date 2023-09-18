const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const { boiler } = require("./boilerplate");

const PORT = process.env.PORT || 2200;

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  console.log(pathname);
  let privatePath = path.join(
    __dirname,
    req.url.includes("private")
      ? "private"
      : req.url.includes("images")
      ? "images"
      : "",
    pathname
  );
  let extension = path.extname(pathname);
  let contentType;
  switch (extension) {
    case ".js":
      contentType = "application/javascript";
      fs.readFile(privatePath, "utf-8", (err, data) => {
        res.writeHead(200, contentType);
        res.end(data);
      });
      break;
    case ".css":
      contentType = "text/css";
      fs.readFile(privatePath, "utf-8", (err, data) => {
        res.writeHead(200, contentType);
        res.end(data);
      });
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      fs.readFile(`.${pathname}`, "", (err, data) => {
        res.writeHead(200, contentType);
        res.end(data);
      });
      break;
    case ".jpg":
      contentType = "image/jpg";
      fs.readFile(`.${pathname}`, "", (err, data) => {
        res.writeHead(200, contentType);
        res.end(data);
      });
      break;
    case ".png":
      contentType = "image/png";
      fs.readFile(`.${pathname}`, "", (err, data) => {
        res.writeHead(200, contentType);
        res.end(data);
      });
      break;

    default:
      // contentType = "text/html";
      // fs.readFile(privatePath, "utf-8", (err, data) => {
      //   res.writeHead(200, contentType);
      //   res.end(data);
      // });
      break;
  }

  if (req.url == "/") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Internal server error!" }));
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (pathname == "/sommy/write" && req.method == "POST") {
    let body;
    req.on("data", (chunk) => {
      body = chunk;
    });
    req.on("end", () => {
      let data = JSON.parse(body);
      const { subtitle, content } = data;
      let num = Math.max(subtitle.length, content.length);
      let contents;
      for (let i = 0; i < num; i++) {
        contents += ` <h2>${(subtitle[i] =
          subtitle[i] > subtitle.length ? "" : subtitle[i])}</h2>
        <br />
        <p>${(content[i] = content[i] > content.length ? "" : content[i])}</p>
        <br />`;
      }
      console.log(contents);
      const dataToWrite = boiler(data, contents);
      console.log(JSON.parse(body));
      fs.writeFileSync(
        `./blogs/${data.category}/${data.fileName}.html`,
        dataToWrite
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Successfully posted!" }));
    });
  }

  if (pathname == "/sommy/admin") {
    fs.readFile("./private/admin.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Internal server error!" }));
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (pathname == "/sommy/main.css") {
    fs.readFile("./private/main.css", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log("Server is up and running!");
});
