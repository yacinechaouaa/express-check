const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, (err) => {
  if (err) console.log("error");
  else console.log("ok");
});

app.use(
  (date = (req, res, next) => {
    let d = new Date();
    console.log(d.getDay());
    if (d.getHours() >= 8 && d.getHours() <= 18 && d.getDay() < 6) {
      next();
    } else {
      console.log(d.getHours());
      res.status(503).send("Our office is not open now");
    }
  })
);
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/services", (req, res) => {
  res.render("service");
});
