const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err,data) => {
  const apps = data.trim().split('\n').sort();
  console.log(apps);
});