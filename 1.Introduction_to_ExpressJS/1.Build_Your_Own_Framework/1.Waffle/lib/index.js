// Waffle Framework
import { createServer } from "http";
import { resolve } from "path";
import { createReadStream } from "fs";

class Waffle {
  constructor() {
    this._routes = new Map();
  }

  get(path, handler) {
    this._routes.set(path, handler);
  }

  send(res) {
    return (content, status = 200, contentType = "text/plain") => {
      res.writeHead(status, { "Content-Type": contentType });
      res.end(content);
    };
  }

  _router(path, res) {
    let routeHandler = this._routes.get(path);
    return routeHandler
      ? routeHandler(res)
      : res.send("<h2>Route not found</h2>", 404, "text/html");
  }

  json(res) {
    return (obj, status = 200) => {
      res.send(JSON.stringify(obj), status, "application.json");
    };
  }

  html(res) {
    return (page) => {
      let filePath = resolve(__dirname, "../views", page);
      let fileStream = createReadStream(`${filePath}.html`);

      fileStream.on("open", () => {
        res.writeHead(200, { "Content-Type": "text/html" });
        fileStream.pipe(res);
      });

      fileStream.on("error", () => {
        res.writeHead(404);
        res.end("404 | Page not Found");
      });
    };
  }

  start(port, cb) {
    return createServer((req, res) => {
      const routePath = req.url.toLowerCase();
      res.send = this.send(res);
      res.json = this.json(res);
      res.html = this.html(res);
      // Route requests to handlers

      return this._router(routePath, res);
    }).listen(port, cb);
  }
}

export default Waffle;
