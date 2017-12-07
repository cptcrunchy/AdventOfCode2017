const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err,data) => {
  const banks = data.trim().split(/\s+/).map(Number);
  const states = {};
  let cycles = 0;

  states[banks.join('|')] = true;

  while(true) {
    distribute(banks);
    cycles++;
    let hash = banks.join('|');
    if(states[hash]) {
      console.log(cycles - states[hash]);
      break;
    }
    states[hash] = cycles;
  }
});

function distribute(banks){
  let idx = findLargestInt(banks);
  let val = banks[idx];
  banks[idx] = 0;
  
  while(val) {
    idx = (idx + 1) % banks.length;
    banks[idx]++;
    val--;
  }
}

function findLargestInt(banks) {
  let max = 0;
  let key = 0;
  for(let i = 0; i < banks.length; i++) {
    if(banks[i] > max) {
     max = banks[i];
     key = i;
    }
  }
  return key;
}