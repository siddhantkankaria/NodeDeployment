import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.listen(3000, () => {
  console.log("server 3000 run");
});
