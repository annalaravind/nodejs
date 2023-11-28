const exp = require("express");
const app = exp();

app.listen(8800, () => {
  console.log("Hello! server has started");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/search", (req, res) => {
//   if (req.query.state) {
//     res.send(`You are searching for : ${req.query.state}`);
//   } else {
//     res.status(404).json({ msg: "Cannot receive data" });
//   }
// });

app.get("/:city", (req, res) => {
  if (req.params.city) {
    res.send(`You are searching for ${req.params.city}`);
  }
});
