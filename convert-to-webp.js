import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFolder = path.join(__dirname, './src/assets/images');
const outputFolder = path.join(__dirname, './src/assets/images-webp');

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file);
  if (ext === '.jpg' || ext === '.jpeg') {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(
      outputFolder,
      path.basename(file, ext) + '.webp'
    );

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Converted ${file} -> ${outputPath}`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
