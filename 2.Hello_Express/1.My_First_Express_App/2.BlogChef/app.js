import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>BlogChef says Hello!</h1>");
});

app.listen(3000, () => console.log("BlogChef cooking on port 3000"));
