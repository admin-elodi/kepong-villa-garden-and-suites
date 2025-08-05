// convert-to-webp.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Update this to your actual images folder
const rootDir = path.join(__dirname, 'src/assets/images');

const validExtensions = ['.jpg', '.jpeg', '.png'];

function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outputFile = filePath.replace(ext, '.webp');

  if (fs.existsSync(outputFile)) {
    console.log(`Skipped (already exists): ${outputFile}`);
    return;
  }

  sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outputFile)
    .then(() => console.log(`✅ Converted: ${filePath}`))
    .catch(err => console.error(`❌ Error converting: ${filePath}`, err));
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath); // Recursively go through subdirectories
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (validExtensions.includes(ext)) {
        convertImage(fullPath);
      }
    }
  });
}

walkDir(rootDir);
