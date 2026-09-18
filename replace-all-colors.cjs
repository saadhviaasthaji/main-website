const fs = require('fs');
const path = require('path');

const targetDirs = [
  'src/components/layout',
  'src/components/home',
  'src/components/about',
  'src/components/ui',
  'src/pages'
];

const replacements = [
  // Text colors
  { regex: /text-brand-charcoal(?!\/)/g, replacement: 'text-[#a63c06]' },
  { regex: /text-black(?!\/)/g, replacement: 'text-[#a63c06]' },
  { regex: /text-brand-charcoal\/(70|80|90)/g, replacement: 'text-[#c36f09]' },
  { regex: /text-black\/(70|80|90)/g, replacement: 'text-[#c36f09]' },
  { regex: /text-gray-(600|700|800)/g, replacement: 'text-[#c36f09]' },
  
  // Hover Text colors
  { regex: /hover:text-black(?!\/)/g, replacement: 'hover:text-[#a63c06]' },
  { regex: /hover:text-brand-charcoal(?!\/)/g, replacement: 'hover:text-[#a63c06]' },

  // Background colors
  { regex: /bg-brand-charcoal(?!\/)/g, replacement: 'bg-[#a63c06]' },
  { regex: /hover:bg-brand-charcoal(?!\/)/g, replacement: 'hover:bg-[#a63c06]' },
  { regex: /bg-brand-charcoal\/(10|20|30|50)/g, replacement: 'bg-[#a63c06]/$1' },
  { regex: /hover:bg-brand-charcoal\/(10|20|30|50)/g, replacement: 'hover:bg-[#a63c06]/$1' },

  // Border colors
  { regex: /border-brand-charcoal(?!\/)/g, replacement: 'border-[#a63c06]' },
  { regex: /border-brand-charcoal\/(10|20|30|50)/g, replacement: 'border-[#a63c06]/$1' },
];

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(dir => {
  const fullDirPath = path.join(__dirname, dir);
  processDirectory(fullDirPath);
});

console.log('Color replacement complete!');
