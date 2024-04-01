const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   console.log(chunk);
//   writeStream.write("\n-----NEW CHUNK -----\n");
//   writeStream.write(chunk);
// });

// piping
// Piping is just a way of doing a readStream to a writeStream
// in a cleaner way
readStream.pipe(writeStream);
