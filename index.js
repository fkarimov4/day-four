const fs = require("fs");
const fileName = "data.json";

function readFileSync(file) {
  const data = fs.readFileSync(file, "utf-8");
  console.log("This was loaded synchronously", data);
}

function readFileAsync() {
  fs.readFile(fileName, "utf-8", (err, file) => {
    if (err) throw err;
    console.log("This was loaded asynchronously", file);
  });
}

readFileSync(fileName);
readFileAsync();