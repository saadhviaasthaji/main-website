const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components', 'sanstha');

const replacements = [
  { regex: /text-black/g, replacement: 'text-[#a63c06]' },
  { regex: /text-brand-charcoal/g, replacement: 'text-[#a63c06]' },
  { regex: /text-gray-400/g, replacement: 'text-[#c36f09]' },
  { regex: /text-gray-500/g, replacement: 'text-[#c36f09]' },
  { regex: /text-gray-600/g, replacement: 'text-[#c36f09]' },
  { regex: /text-gray-700/g, replacement: 'text-[#c36f09]' },
];

function processDirectory(dir) {
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

processDirectory(directoryPath);
console.log('Color replacement complete.');
