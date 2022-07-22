const express = require("express");
const app = express();

// routes
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.status(200).send("This is homepage");
});
app.get("/contact", (req, res) => {
  res.status(200).send("This is contact page");
});
app.get("/profile/:name", (req, res) => {
  let data = {
    age: 22,
    job: "Co-founder",
    hobbies: ["Eating", "Swimming", "Praying"],
  };
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(5000, () => {
  console.log("Server is listening to port 3000...");
});
