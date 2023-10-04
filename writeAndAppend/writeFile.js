var fs = require("fs");

// fs.writeFile(
//   "./writeAndAppend/text.txt",
//   "Hi Annaldas Aravind",
//   (error, data) => {
//     if (error) {
//       console.log("Un Successfull");
//     } else {
//       console.log("completed Succesfully");
//     }
//   }
// );

// fs.appendFile("./writeAndAppend/text.txt", " This is NodeJS", (error, data) => {
//   if (error) {
//     console.log("Un Successfull");
//   } else {
//     console.log("completed Succesfully");
//   }
// });

// fs.unlink("./writeAndAppend/text.txt", (error) => {
//   if (error) {
//     console.log("Delete unSuccessfull");
//   } else {
//     console.log("Delete Succesfull");
//   }
// });

// fs.mkdir("./makeDirectory", (error) => {
//   if (error) {
//     console.log("created unSuccessfull");
//   } else {
//     console.log("created Succesfull");
//   }
// });

// fs.rmdir("./makeDirectory", (error) => {
//   if (error) {
//     console.log("Deleted unSuccessfull");
//   } else {
//     console.log("Deleted Succesfull");
//   }
// });

fs.readdir("./makeDirectory", (error, data) => {
  if (error) {
    console.log("created unSuccessfull");
  } else {
    console.log("created Succesfull");
    console.log(data);
    for (f of data) {
      fs.readdir("./makeDirectory/" + f, (err, data) => {
        if (err) {
          console.log("file is present");
        } else {
          console.log(data);
        }
      });
    }
  }
});
