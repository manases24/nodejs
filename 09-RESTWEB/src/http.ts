import fs from "fs";
import http, { IncomingMessage, ServerResponse } from "http";
import path from "path";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(`<h1>URL ${req.url}</h1>`);
    //   res.end();

    //   const data = { name: "John Doe", age: 30, city: "Buenos Aires" };
    //   res.writeHead(200, { "Content-Type": "json" });
    //   res.end(JSON.stringify(data));
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

server.listen(3300, () => {
  console.log(`Server running on port 3300`);
});
