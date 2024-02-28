import express from "express";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use("/assets", express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).send("<h1>BlogChef says Hello!</h1>");
});

app
  .get("/admin/login", (req, res) => {
    res.sendFile(join(__dirname, "views", "login.html"));
  })
  .post("/admin/login", (req, res) => {
    res.send("Handle Login Here!");
  });

app.listen(3000, () => console.log("BlogChef cooking on port 3000"));
