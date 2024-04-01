// Destructuring the import from people.js
const { people, ages } = require("./people");

console.log(people, ages);

// OS is a 'core' module
const os = require("os");

console.log(os.platform(), os.homedir());
