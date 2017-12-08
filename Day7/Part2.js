const fs = require('fs');

fs.readFile(__dirname + '/input.txt', 'utf8', (err,data) => {
  const disks = {};

  const app = data.trim().split('\n').forEach( row => {
    const rows = row.split(' -> ');
    const disk = rows[0].split(' ');
    const name = disk[0].trim();
    disks[name] = {
      value: Number(disk[1].substr(1, disk[1].indexOf(')') - 1)),
      children: [],
      total: 0,
    };

    if(rows.length > 1) {
      disks[name].children = rows[1].split(',').map( x => x.trim());
    }
  });

  const root = getRoot(disks);
  sumWeights(root, disks);
  console.log(balance(root, disks));
});

const getRoot = disks => {
  const keys = new Set(Object.keys(disks));
  for(const key in disks) {
    for(const i in disks[key].children) {
      keys.delete(disks[key].children[i]);
    }
  }
  return keys.values().next().value;
}

const sumWeights = (root, tree) => {
  tree[root].total = tree[root].value;
  tree[root].children.forEach( child => {
    tree[root].total += sumWeights(child, tree);
  });
  return tree[root].total;
}


const balance = (root, tree, target) => {
  const children = {};
  let newRoot;
  tree[root].children.forEach( child => {
    if( children[tree[child].total] === undefined ) {
      children[tree[child].total] = child;
    }else {
      children[tree[child].total] = false;
      newRoot = tree[child].total;
    }
  });

  for(const i in children) {
    if( children[i]) {
      return balance(children[i], tree, newRoot);
    }
  }

  return tree[root].value + target - tree[root].total;
}




