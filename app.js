const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'FolderName'); if I have put ejs files in different folder

// listen for requests
app.listen(4000);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Mental Health is important",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "IBA students launch Raabta",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "COVID-19 and Mental Health",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //res.send("<p>Home Page</p>");
  //res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>Home Page</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  //res.send("<p>Home Page</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("create", { title: "Create Blog" });
});

app.get("/signup", (req, res) => {
  //res.send("<p>Home Page</p>");
  res.sendFile("./views/signup.html", { root: __dirname });
});

// // Redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 Page (should always be at the very bottom)
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
