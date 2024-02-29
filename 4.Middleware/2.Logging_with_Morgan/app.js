import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { createWriteStream } from "fs";
import morgan from "morgan";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, "blogchef.log");

// app.use(morgan("dev"));
app.use(morgan(":method - :url - :date - :response-time ms")); //Custom Format
app.use(
  morgan(":method - :url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Email: " + email);
    console.log("Password: " + password);
    res.redirect("/admin/dashboard");
  });

app.get("/admin/dashboard", (req, res) =>
  res.render("dashboard", {
    user: "Joe Mockery",
    posts: [
      {
        id: 1,
        author: "Joe M",
        title: "I love Express",
        content: "Express is wonderful framework for building Node.js apps",
      },
      {
        id: 2,
        author: "Mike F",
        title: "Have you tried Pug?",
        content:
          "I recently tried the Pug templating language and its Excellent!",
      },
    ],
  })
);

app.post("/admin/approve", (req, res) => res.redirect("/admin/dashboard"));

app.get("/admin/logout", (req, res) => res.redirect("/admin/login"));

app.post("/api/posts", (req, res) => {
  console.log(req.body);
  res.json({ message: "Got It" });
});

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));


