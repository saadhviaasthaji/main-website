const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src', 'pages'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  content = content.replace(/bg-white min-h-screen/g, 'bg-transparent min-h-screen');
  content = content.replace(/className="py-20 bg-white"/g, 'className="py-20 bg-transparent"');
  if (original !== content) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
