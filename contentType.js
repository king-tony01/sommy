const { readFile } = require("fs");
const path = require("path");

/**
 * Reads the file specified at the `filePath` and respond to the server request with the contents of the file
 * @param {string} filePath
 * @param {Response} res
 */
module.exports = function serveType(filePath, res) {
  const extension = path.extname(filePath);
  let type;
  switch (extension) {
    case ".css":
      type = "text/css";
      const cssPath = path.join(__dirname, filePath);
      readFile(cssPath, "utf8", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(501, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal server error!" }));
        }
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      });
      break;
    case ".js":
      type = "application/javascript";
      const jsPath = path.join(__dirname, filePath);
      readFile(jsPath, "utf8", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(501, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal server error!" }));
        }
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      });
      break;
    case ".jpg":
      type = "image/jpg";
      const jpgPath = path.join(__dirname, filePath);
      readFile(jpgPath, "", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(501, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal server error!" }));
        }
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      });
      break;
    case ".jpeg":
      type = "image/jpeg";
      const jpegPath = path.join(__dirname, filePath);
      readFile(jpegPath, "", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(501, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal server error!" }));
        }
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      });
      break;
    case ".png":
      type = "image/png";
      const pngPath = path.join(__dirname, filePath);
      readFile(pngPath, "", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(501, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal server error!" }));
        }
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      });
      break;
    case ".ico":
      type = "image/vnd.microsoft.icon";
      const icoPath = path.join(__dirname, filePath);
      readFile(icoPath, "", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(501, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal server error!" }));
        }
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      });
      break;

    default:
      type = "text/html";
      const html = path.join(__dirname, filePath);
      readFile(html, "utf8", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(501, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Internal server error!" }));
        }
        res.writeHead(200, { "Content-Type": type });
        res.end(data);
      });
      break;
  }
};
