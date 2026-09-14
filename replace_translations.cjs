const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const targetComponent = 'AnimatedText';
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
  let originalContent = content;

  // Replace uppercase usage first
  const uppercaseRegex = /getTranslation\(\s*language\s*,\s*(['"`])(.*?)\1\s*,\s*(['"`])(.*?)\3\s*\)\.toUpperCase\(\)/g;
  content = content.replace(uppercaseRegex, '<AnimatedText section="$2" tKey="$4" uppercase />');

  // Replace normal usage
  const normalRegex = /getTranslation\(\s*language\s*,\s*(['"`])(.*?)\1\s*,\s*(['"`])(.*?)\3\s*\)/g;
  content = content.replace(normalRegex, '<AnimatedText section="$2" tKey="$4" />');

  // Check if we made replacements
  if (content !== originalContent) {
    // Add import if not present
    if (!content.includes('AnimatedText')) {
      const relPath = getRelativePath(filePath, targetComponentPath);
      const importStatement = `import AnimatedText from '${relPath}';\n`;
      // Insert after last import, or at top
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLine + 1) + importStatement + content.slice(endOfLine + 1);
      } else {
        content = importStatement + content;
      }
    }
    
    // Remove getTranslation import if it's no longer used
    if (!content.includes('getTranslation(')) {
      content = content.replace(/import\s+\{\s*getTranslation\s*\}\s+from\s+[^;]+;\n?/g, '');
      content = content.replace(/import\s+getTranslation\s+from\s+[^;]+;\n?/g, '');
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
  }
});
