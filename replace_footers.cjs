const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /\{\/\* Bottom Footer Area \*\/\}\n\s*<div className="absolute bottom-0 left-0 right-0 p-6 md:px-12 lg:px-24 flex justify-between items-center bg-\[#1f1f1d\](?: z-20)?">\n\s*<div className="text-\[19\.2px\] font-bold tracking-\[0\.3em\]">B Ō P E<\/div>\n\s*<div className="text-\[16px\] opacity-80 font-medium">bopedesign\.com<\/div>\n\s*<\/div>/g,
  `{/* Bottom Subtle Line */}\n        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-px bg-white/10"></div>`
);

content = content.replace(
  /\{\/\* Bottom Footer Area \*\/\}\n\s*<div className="absolute bottom-0 left-0 right-0 p-6 md:px-12 lg:px-24 flex justify-between items-center bg-\[#f0eee4\]">\n\s*<div className="text-\[19\.2px\] font-bold tracking-\[0\.3em\] text-\[#262624\]">B Ō P E<\/div>\n\s*<div className="text-\[16px\] opacity-80 font-medium text-\[#262624\]">bopedesign\.com<\/div>\n\s*<\/div>/g,
  `{/* Bottom Subtle Line */}\n        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-px bg-black/10"></div>`
);

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced footers');
