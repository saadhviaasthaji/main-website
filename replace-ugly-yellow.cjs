const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'components', 'sanstha'),
  path.join(__dirname, 'src', 'pages', 'sanstha')
];

const replacements = [
  { regex: /bg-\[\#997a00\]\/90/g, replacement: 'bg-[#6b3112]/90' },
  { regex: /border-\[\#997a00\]\/30/g, replacement: 'border-[#6b3112]/30' }
];

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const rule of replacements) {
        content = content.replace(rule.regex, rule.replacement);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

directories.forEach(dir => processDirectory(dir));
console.log('Ugly yellow replacement complete.');
