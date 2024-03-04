const { createServer } = require("http");

class BisCotti {
  constructor() {
    this._routes = new Map();
  }

  get(path, handler) {
    this._routes.set(path, handler);
  }

  send(res) {
    return (content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    };
  }

  _router(path, res) {
    let routeHandler = this._routes.get(path);

    return routeHandler
      ? routeHandler(res)
      : res.send("<h2>Route not found!</h2>", 404, "text/html");
  }

  serve() {
    return createServer((req, res) => {
      const routePath = req.url.toLowerCase();
      res.send = this.send(res);

      return this._router(routePath, res);
    });
  }
}

module.exports = BisCotti;
