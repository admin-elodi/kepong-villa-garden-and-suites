import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Recursively find all .jsx files
const walk = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walk(filepath, filelist);
    } else if (filepath.endsWith('.jsx')) {
      filelist.push(filepath);
    }
  });
  return filelist;
};

// Replace bad paths in file
const updateImports = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = content;

  // Fix relative paths like ../../public/assets/images/...
  updated = updated.replace(/(['"`])((\.\.\/)+)public\/assets\/(images\/[^\1;]*?)\1/g, (match, quote, _, __, rest) => {
    return `${quote}@/assets/${rest}${quote}`;
  });

  // Fix root-style paths like /assets/images/...
  updated = updated.replace(/(['"`])\/assets\/(images\/[^\1;]*?)\1/g, (match, quote, rest) => {
    return `${quote}@/assets/${rest}${quote}`;
  });

  // Save if anything changed
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✔ Updated: ${filePath}`);
  }
};

// Run the script
const allJsxFiles = walk(path.resolve(__dirname, 'src'));
allJsxFiles.forEach(updateImports);

console.log('\n✅ All JSX import paths refactored to "@/assets/".');
