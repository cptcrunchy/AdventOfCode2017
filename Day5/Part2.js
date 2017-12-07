const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err,data) => {
  let jumps = data.trim().split('\n').map(Number);
  let count = 0;
  let offset = 0;

  while(offset >= 0 && offset < jumps.length) {
    let offsetTotal = offset;
    offset += jumps[offset];
    jumps[offsetTotal] += jumps[offsetTotal] >= 3 ? -1 : 1; 
    count++;
  }
  console.log(count);
});