const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir(srcDir);
let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace max-w-7xl with w-full
    content = content.replace(/max-w-7xl/g, 'w-full');
    
    // Modify padding if they are standard ones to make borders smaller? The user wants smaller borders.
    // px-4 sm:px-6 lg:px-8 can be replaced with px-4 md:px-8 lg:px-12 to be wider but with small border? Wait, lg:px-12 is larger border. 
    // They want smaller border, so maybe px-4 md:px-6 lg:px-8 is fine but max-w-7xl was the main culprit.
    // Actually, w-full with px-4 md:px-8 lg:px-12 was my previous change. Let's just use w-full and keep the rest, or just replace max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 with w-full px-4 md:px-6 lg:px-8.
    
    // Let's replace "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" with "w-full mx-auto px-4 sm:px-6 lg:px-8"
    // Just doing replace max-w-7xl with w-full is safest.
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
        console.log('Updated:', file);
    }
});

console.log(`Updated ${changedCount} files.`);
