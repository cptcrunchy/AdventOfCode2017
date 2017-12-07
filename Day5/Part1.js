const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err,data) => {
  let jumps = data.trim().split('\n').map(Number);
  let count = 0;
  let offset = 0;;
  while(offset >= 0 && offset < jumps.length) {
    offset += jumps[offset]++;
    count++;
  }
  console.log(count);
});