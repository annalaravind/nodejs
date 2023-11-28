const exp = require("express");

const app = exp();

app.listen(4444, () => {
  console.log("server has started");
});

let person = {
  name: "aravind",
  age: 22,
  place: "GDK",
};

app.get("/", (req, res) => {
  res.send(person);
});
app.post("/", (req, res) => {
  res.send("post request has been sent");
});
app.put("/", (req, res) => {
  res.send("put request has been sent");
});
app.delete("/", (req, res) => {
  res.send("delete request has been sent");
});
