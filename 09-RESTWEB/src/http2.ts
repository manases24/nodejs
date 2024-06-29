import fs from "fs";
import http2 from "http2";
import path from "path";

export const serverHttp2 = http2.createSecureServer(
  {
    key: fs.readFileSync("./keys/server.key"),
    cert: fs.readFileSync("./keys/server.crt"),
  },
  (req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      const htmlFilePath = path.join(__dirname, "../public/index.html");
      try {
        const htmlFile = fs.readFileSync(htmlFilePath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlFile);
      } catch (error) {
        console.error(error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }
);

// serverHttp2.listen(3300, () => {
//   console.log(`Server running on port 3300`);
// });
