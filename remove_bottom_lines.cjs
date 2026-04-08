const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /\{\/\* Bottom Subtle Line \*\/\}\n\s*<div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-px bg-(?:white|black)\/10"><\/div>\n/g,
  ''
);

fs.writeFileSync('src/App.tsx', content);
console.log('Removed bottom subtle lines');
