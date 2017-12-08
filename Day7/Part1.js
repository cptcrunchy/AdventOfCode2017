const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err,data) => {
  const disks = new Set();
  const branches = new Set();

  const apps = data.trim().split('\n').forEach( row => {
    const sections = row.split(' -> ');
    disks.add(sections[0].split(' ')[0].trim());

    if(sections.length > 1) {
      sections[1].split(',').map( x => branches.add(x.trim()));
    }
  });

  branches.forEach( x => disks.delete(x));
  console.log(disks.values().next().value);
});