import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { createWriteStream } from "fs";
import morgan from "morgan";
import session from "express-session";
import compression from "compression";
import home from "./routes/home/index.js";
import admin from "./routes/admin/index.js";
import api from "./routes/api/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, "blogchef.log");

app.use(compression());
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
app.use(
  "/admin",
  session({
    name: "sessId", // Name of cookie to store data
    resave: false, // to prevent unmodified data to get stored in store
    saveUninitialized: true, // save uninitialized session data into store

    // sign session key
    secret:
      app.get("env") === "production"
        ? process.env.sessionSecret // for cloud
        : "2bb375hfkshfkdjco97dd8r", //random alphanumeric key

    cookie: {
      httpOnly: true, // to prevent malicious js code on client
      maxAge: 18000000, // time period of cookie in ms
      secure: app.get("env") === "production" ? true : false,
    },
  })
);
app.set("view engine", "pug");

app.use("/", home);

app.use("/admin", admin);

app.use("/api", api);

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));

