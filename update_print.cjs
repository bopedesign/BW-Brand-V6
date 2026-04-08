const fs = require('fs');

const file = 'src/pages/BrandStrategy.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/flex flex-col md:flex-row/g, 'flex flex-col md:flex-row print:flex-row');
content = content.replace(/grid-cols-1 md:grid-cols-2/g, 'grid-cols-1 md:grid-cols-2 print:grid-cols-2');
content = content.replace(/grid-cols-1 md:grid-cols-3/g, 'grid-cols-1 md:grid-cols-3 print:grid-cols-3');
content = content.replace(/grid-cols-1 sm:grid-cols-2/g, 'grid-cols-1 sm:grid-cols-2 print:grid-cols-2');
content = content.replace(/grid-cols-1 lg:grid-cols-2/g, 'grid-cols-1 lg:grid-cols-2 print:grid-cols-2');
content = content.replace(/grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3');

// Also add break-inside-avoid to sections
content = content.replace(/<section id="([^"]+)" className="([^"]+)"/g, '<section id="$1" className="$2 print:break-inside-avoid"');

fs.writeFileSync(file, content);
console.log('Updated BrandStrategy.tsx');
