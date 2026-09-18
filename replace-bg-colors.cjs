const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'components', 'sanstha'),
  path.join(__dirname, 'src', 'pages', 'sanstha')
];

const replacements = [
  { regex: /bg-emerald-900\/80/g, replacement: 'bg-[#4a2e1b]/90' },
  { regex: /bg-blue-900\/80/g, replacement: 'bg-[#8b6508]/90' },
  { regex: /bg-rose-900\/80/g, replacement: 'bg-[#3e2723]/90' },
  { regex: /bg-orange-900\/80/g, replacement: 'bg-[#997a00]/90' },
  { regex: /bg-amber-900\/80/g, replacement: 'bg-[#5c4033]/90' },
  
  // Also replace any matching border colors
  { regex: /border-emerald-500\/20/g, replacement: 'border-[#4a2e1b]/30' },
  { regex: /border-blue-500\/20/g, replacement: 'border-[#8b6508]/30' },
  { regex: /border-rose-500\/20/g, replacement: 'border-[#3e2723]/30' },
  { regex: /border-orange-500\/20/g, replacement: 'border-[#997a00]/30' },
  { regex: /border-amber-500\/20/g, replacement: 'border-[#5c4033]/30' },
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
console.log('Background color replacement complete.');
