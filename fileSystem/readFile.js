var fs = require("fs");
fs.readFile("./fileSystem/text.html", (error, data) => {
  if (error) {
    console.log("File Not Found");
  } else {
    console.log(data.toString());
  }
});
