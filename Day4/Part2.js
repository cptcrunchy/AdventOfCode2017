const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err,data) => {
  
  let invalidPhrase = 0;
  let rows= data.trim().split('\n');
  
  rows.forEach(row => {
    let phrases = row.trim().split(' ');
    phrases = phrases.map( x => x.split('').sort().join('')).sort();

    for( let i = phrases.length - 1; i > 0; i--) {
      if(phrases[i] === phrases[i - 1]){
        invalidPhrase++;
        break;
      }
    }
  });
  console.log(rows.length - invalidPhrase);

});