import fs from "fs";

const isNode = typeof window === "undefined"; // Check if running in Node.js

/**
 * Dynamically imports `canvas` in Node.js.
 * @returns {Promise<{ Image: typeof import("canvas").Image, createCanvas: typeof import("canvas").createCanvas }>}
 */
async function getCanvasModule() {
  if (!isNode) return { Image: window.Image, createCanvas: null };
  return await import("canvas");
}

/**
 * Loads an image from a file path, Buffer, or Image object.
 * @param {string | Buffer | Image} input - Path to image, Buffer, or Image object.
 * @returns {Promise<Image>} - A promise resolving to an Image object.
 */
async function loadImage(input) {
  const { Image } = await getCanvasModule();
  return new Promise((resolve, reject) => {
    if (input instanceof Image) return resolve(input);
    
    if (isNode) {
      fs.readFile(input, (err, data) => {
        if (err) return reject(err);
        const img = new Image();
        img.src = data;
        resolve(img);
      });
    } else {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = typeof input === "string" ? input : URL.createObjectURL(new Blob([input]));
    }
  });
}

/**
 * Generates a Roughness Map.
 * @param {string | Buffer | Image} input - Image source.
 * @param {number} contrast - Contrast adjustment (default 1).
 * @param {number} brightness - Brightness adjustment (default 0).
 * @param {number} opacity - Opacity (default 1).
 * @returns {Promise<Image>} - Roughness map image.
 */
export async function generateRoughnessMap(input, contrast = 1, brightness = 0, opacity = 1) {
  return processImage(input, (data, i) => {
    let grayscale = (data[i] + data[i + 1] + data[i + 2]) / 3;
    grayscale = (grayscale - 128) * contrast + 128 + brightness;
    grayscale = 255 - Math.max(0, Math.min(255, grayscale));
    data[i] = data[i + 1] = data[i + 2] = grayscale;
    data[i + 3] = opacity * 255;
  });
}

/**
 * Generates a Normal Map.
 * @param {string | Buffer | Image} input - Image source.
 * @param {number} intensity - Intensity of the normal effect (default 1).
 * @returns {Promise<Image>} - Normal map image.
 */
export async function generateNormalMap(input, intensity = 1) {
  return processImage(input, (data, i, width) => {
    const dx = data[i + 4] - data[i - 4];
    const dy = data[i + width * 4] - data[i - width * 4];
    const dz = 255 / intensity;
    const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
    data[i] = (dx / length) * 128 + 128;
    data[i + 1] = (dy / length) * 128 + 128;
    data[i + 2] = (dz / length) * 128 + 128;
  });
}

/**
 * Generates a Metalness Map.
 * @param {string | Buffer | Image} input - Image source.
 * @param {number} threshold - Metalness threshold (default 128).
 * @param {number} contrast - Contrast adjustment (default 1).
 * @param {number} brightness - Brightness adjustment (default 0).
 * @param {number} opacity - Opacity (default 1).
 * @returns {Promise<Image>} - Metalness map image.
 */
export async function generateMetalnessMap(input, threshold = 128, contrast = 1, brightness = 0, opacity = 1) {
  return processImage(input, (data, i) => {
    let brightnessValue = (data[i] + data[i + 1] + data[i + 2]) / 3;
    brightnessValue = (brightnessValue - 128) * contrast + 128 + brightness;
    let metalness = brightnessValue > threshold ? 255 : 0;
    data[i] = data[i + 1] = data[i + 2] = metalness;
    data[i + 3] = opacity * 255;
  });
}

/**
 * Processes an image and applies pixel transformation.
 * @param {string | Buffer | Image} input - Image source.
 * @param {Function} processPixel - Function to process pixels.
 * @returns {Promise<Image>} - Processed image.
 */
async function processImage(input, processPixel) {
  const { createCanvas } = await getCanvasModule();
  const image = await loadImage(input);
  if (!isNode) return image; // Return original in browsers

  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, image.width, image.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const width = image.width;

  for (let i = 0; i < data.length; i += 4) {
    processPixel(data, i, width);
  }

  ctx.putImageData(imageData, 0, 0);
  return canvasToImage(canvas);
}

/**
 * Converts a canvas to an Image object.
 * @param {Canvas} canvas - The canvas to convert.
 * @returns {Image} - An Image object with a Base64 source.
 */
function canvasToImage(canvas) {
  const img = new Image();
  img.src = canvas.toDataURL();
  return img;
}
