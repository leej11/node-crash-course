const express = require("express");

// express app
const app = express();

// register view enginer
app.set("view engine", "ejs");
app.set("views", "views");

// listen for requests
app.listen(3000);

// send html
app.get("/", (req, res) => {
  //   res.send("<p>Home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
// Use this function for every request, but it runs only
// if the code reaches this point
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
