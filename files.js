const fs = require("fs");

//////////////////////////////
// reading files
//////////////////////////////
// fs.readFile("./docs/blog1.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

//////////////////////////////
// writing files
//////////////////////////////
// fs.writeFile("./docs/blog1.txt", "hello, world", () => {
//   console.log("File was written");
// });

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//////////////////////////////
// deleting files
//////////////////////////////
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
