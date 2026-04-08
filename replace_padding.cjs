const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<section (.*?) className="(.*?)pt-12 pb-24(.*?)">/g,
  '<section $1 className="$2pt-24 pb-24$3">'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced padding');
