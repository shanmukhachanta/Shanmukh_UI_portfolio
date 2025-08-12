// optimize-images.mjs - ES Module version
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, 'src/assets/images');
const OUTPUT_DIR = path.join(__dirname, 'src/assets/optimized');

// Create output directory structure
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputDir, filename) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${filename} (${metadata.width}x${metadata.height})`);
    
    const baseName = path.parse(filename).name;
    const ext = path.parse(filename).ext.toLowerCase();
    
    // Create WebP version with same name (much smaller file size)
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await image
      .resize(800, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(webpPath);
    
    console.log(`✓ Created WebP: ${baseName}.webp`);
    
    // Create optimized JPEG/PNG with same name (smaller than original)
    const optimizedPath = path.join(outputDir, filename);
    if (ext === '.png') {
      await image
        .resize(800, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(optimizedPath);
    } else {
      await image
        .resize(800, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: 85 })
        .toFile(optimizedPath);
    }
    
    console.log(`✓ Created optimized: ${filename}`);
    
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function processDirectory(dir, baseInputDir = INPUT_DIR) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Create corresponding output directory
      const relativeDir = path.relative(baseInputDir, fullPath);
      const outputSubDir = path.join(OUTPUT_DIR, relativeDir);
      
      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
        console.log(`📁 Created directory: ${outputSubDir}`);
      }
      
      await processDirectory(fullPath, baseInputDir);
    } else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(item)) {
      const relativeDir = path.relative(baseInputDir, dir);
      const outputSubDir = path.join(OUTPUT_DIR, relativeDir);
      await optimizeImage(fullPath, outputSubDir, item);
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...');
  console.log(`📂 Input: ${INPUT_DIR}`);
  console.log(`📂 Output: ${OUTPUT_DIR}`);
  
  const startTime = Date.now();
  
  try {
    await processDirectory(INPUT_DIR);
    
    const duration = (Date.now() - startTime) / 1000;
    console.log(`\n✅ Optimization complete! Processed in ${duration.toFixed(2)} seconds`);
    console.log(`\n📋 Next steps:`);
    console.log(`1. Check the ${OUTPUT_DIR} folder for your optimized images`);
    console.log(`2. Update your imports to use the optimized versions`);
    console.log(`3. Test the performance improvement`);
    
  } catch (error) {
    console.error('❌ Optimization failed:', error);
  }
}

main();