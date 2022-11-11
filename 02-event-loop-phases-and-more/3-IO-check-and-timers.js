const fs = require("fs");

fs.readFile(__filename, (_err, _data) => {
  console.log("file read");

  setTimeout(() => {
    console.log("timeout execute always after immediate");
  });
  setImmediate(() => {
    console.log("immediate execute always after reading the file");
  });
});
