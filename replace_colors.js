import fs from 'fs';
import path from 'path';

const replaceInFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      content = content.replace(/#4FA8D8/ig, '#000000');
      content = content.replace(/#2c739c/ig, '#000000');
      
      // also replace rgba if any
      content = content.replace(/rgba\(79,168,216,/ig, 'rgba(0,0,0,');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
};

replaceInFiles('./src');
console.log('Done');
