const { readFile } = require("fs");
const path = require("path");

/**
 * Reads the file specified at the `filePath` and respond to the server request with the contents of the file
 * @param {string} filePath
 * @param {Response} res
 */
module.exports = function serve(filePath, res) {
  const actualPath = path.join(__dirname, filePath);
  readFile(actualPath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(501, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal server error!" }));
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};
