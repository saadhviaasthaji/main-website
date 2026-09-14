const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const targetComponentPath = path.join(srcDir, 'components', 'ui', 'AnimatedText.jsx');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const getRelativePath = (from, to) => {
  let rel = path.relative(path.dirname(from), to).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel.replace(/\.jsx?$/, '');
};

walkDir(srcDir, function(filePath) {
  if (!filePath.endsWith('.jsx')) return;
  if (filePath === targetComponentPath) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('<AnimatedText') && !content.includes('import AnimatedText')) {
    const relPath = getRelativePath(filePath, targetComponentPath);
    const importStatement = `import AnimatedText from '${relPath}';\n`;
    
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLine + 1) + importStatement + content.slice(endOfLine + 1);
    } else {
      content = importStatement + content;
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added import to: ${filePath}`);
  }
});
