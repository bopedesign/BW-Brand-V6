const fs = require('fs');
const path = require('path');
function find(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const full = path.join(dir, file);
      if (file === '.gemini') {
        console.log(full);
      } else if (fs.statSync(full).isDirectory() && !full.includes('proc') && !full.includes('sys') && !full.includes('dev')) {
        find(full);
      }
    }
  } catch (e) {}
}
find('/');
