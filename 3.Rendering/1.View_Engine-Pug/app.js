import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use("/assets", express.static(join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => res.send("<h1>Login API</h1>"));

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
