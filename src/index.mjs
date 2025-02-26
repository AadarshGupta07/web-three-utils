import { createCanvas, Image } from "canvas";

/**
 * Generates a Roughness Map from an Image object.
 * @param {Image} image - The input image object.
 * @param {number} contrast - Contrast adjustment (default 1).
 * @param {number} brightness - Brightness adjustment (default 0).
 * @param {number} opacity - Opacity (default 1).
 * @returns {Image} - The processed roughness map image.
 */
export function generateRoughnessMap(image, contrast = 1, brightness = 0, opacity = 1) {
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0, image.width, image.height);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    let grayscale = (data[i] + data[i + 1] + data[i + 2]) / 3;
    grayscale = (grayscale - 128) * contrast + 128 + brightness;
    grayscale = 255 - Math.max(0, Math.min(255, grayscale));
    data[i] = data[i + 1] = data[i + 2] = grayscale;
    data[i + 3] = opacity * 255;
  }

  ctx.putImageData(imageData, 0, 0);
  
  const roughnessImage = new Image();
  roughnessImage.src = canvas.toDataURL();

  return roughnessImage;
}

/**
 * Generates a Normal Map from an Image object.
 * @param {Image} image - The input image object.
 * @param {number} intensity - Intensity of the normal effect (default 1).
 * @returns {Image} - The processed normal map image.
 */
export function generateNormalMap(image, intensity = 1) {
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0, image.width, image.height);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);
  const width = image.width;
  const height = image.height;
  const data = imageData.data;
  const normalData = new Uint8ClampedArray(data);

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      let i = (y * width + x) * 4;
      let dx = data[i + 4] - data[i - 4];
      let dy = data[i + width * 4] - data[i - width * 4];
      let dz = 255 / intensity;
      let length = Math.sqrt(dx * dx + dy * dy + dz * dz);
      normalData[i] = (dx / length) * 128 + 128;
      normalData[i + 1] = (dy / length) * 128 + 128;
      normalData[i + 2] = (dz / length) * 128 + 128;
    }
  }

  ctx.putImageData(new ImageData(normalData, width, height), 0, 0);

  const normalImage = new Image();
  normalImage.src = canvas.toDataURL();

  return normalImage;
}

/**
 * Generates a Metalness Map from an Image object.
 * @param {Image} image - The input image object.
 * @param {number} threshold - Metalness threshold (default 128).
 * @param {number} contrast - Contrast adjustment (default 1).
 * @param {number} brightness - Brightness adjustment (default 0).
 * @param {number} opacity - Opacity (default 1).
 * @returns {Image} - The processed metalness map image.
 */
export function generateMetalnessMap(image, threshold = 128, contrast = 1, brightness = 0, opacity = 1) {
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0, image.width, image.height);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    let brightnessValue = (data[i] + data[i + 1] + data[i + 2]) / 3;
    brightnessValue = (brightnessValue - 128) * contrast + 128 + brightness;
    let metalness = brightnessValue > threshold ? 255 : 0;
    data[i] = data[i + 1] = data[i + 2] = metalness;
    data[i + 3] = opacity * 255;
  }

  ctx.putImageData(imageData, 0, 0);

  const metalnessImage = new Image();
  metalnessImage.src = canvas.toDataURL();

  return metalnessImage;
}
