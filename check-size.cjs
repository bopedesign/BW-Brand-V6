const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = dir + '/' + file;
    if (name.includes('node_modules') || name.includes('.git') || name.includes('.next') || name.includes('dist')) continue;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push({ name, size: fs.statSync(name).size });
    }
  }
  return files;
}

const files = getFiles('.');
files.sort((a, b) => b.size - a.size);
const totalSize = files.reduce((acc, f) => acc + f.size, 0);
console.log('Total size (excluding node_modules/dist): ' + (totalSize / 1024 / 1024).toFixed(2) + ' MB');
console.log('Top 15 largest files:');
files.slice(0, 15).forEach(f => console.log((f.size / 1024 / 1024).toFixed(2) + ' MB - ' + f.name));
