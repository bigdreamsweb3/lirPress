const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");

// Function to create @lcx version of an image
async function createLcxImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(Math.floor(0.5 * (await sharp(inputPath).metadata()).width))
    .toFile(outputPath);
}

// Function to create a @thumbnail version of an image
async function createThumbnail(inputPath, outputPath) {
  await sharp(inputPath)
    .resize({ width: 200, height: 200, fit: "cover" })
    .toFile(outputPath);
}

// Function to check if the filename already contains "@lcx"
function hasLcxSuffix(filename) {
  return filename.includes("@lcx");
}

function hasThumbnailSuffix(filename) {
  return filename.includes("@thumbnail");
}

// Function to create @lcx versions and thumbnails for images in public/img folder
async function createLcxAndThumbnails() {
  const baseFolder = "./public/";
  const processedImages = new Set();

  const files = glob.sync(`${baseFolder}/**/*.+(png|jpg|jpeg|webp)`, {
    nodir: true,
  });

  for (const file of files) {
    const relativePath = path.relative(baseFolder, file);
    const folderPath = path.dirname(relativePath);

    const outputLcxFileName = path.join(
      baseFolder,
      folderPath,
      hasLcxSuffix(file)
        ? path.basename(file)
        : path.basename(file).replace(/\.(png|jpg|jpeg|webp)$/, "@lcx.$1")
    );

    const outputThumbnailFileName = path.join(
      baseFolder,
      folderPath,
      hasThumbnailSuffix(file)
        ? path.basename(file)
        : path.basename(file).replace(/\.(png|jpg|jpeg|webp)$/, "@thumbnail.$1")
    );

    if (
      !processedImages.has(outputLcxFileName) &&
      !processedImages.has(outputThumbnailFileName)
    ) {
      if (!fs.existsSync(outputLcxFileName)) {
        await createLcxImage(file, outputLcxFileName);
        console.log(`Created @lcx version of ${file}`);
      }

      if (!fs.existsSync(outputThumbnailFileName)) {
        await createThumbnail(file, outputThumbnailFileName);
        console.log(`Created thumbnail of ${file}`);
      }

      processedImages.add(outputLcxFileName);
      processedImages.add(outputThumbnailFileName);
    }
  }
}

// Call the function to create @lcx versions and thumbnails
createLcxAndThumbnails().catch((error) =>
  console.error("Error creating @lcx versions and thumbnails:", error)
);
