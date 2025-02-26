# web-three-utils

[![npm version](https://badge.fury.io/js/web-three-utils.svg)](https://badge.fury.io/js/web-three-utils)  
**Generate material maps (Roughness, Normal, Metalness) from albedo images for Web3D applications.**

`web-three-utils` is a lightweight utility library designed to help developers create essential 3D material maps—Roughness, Normal, and Metalness—from an albedo (base color) image. Built with the `canvas` library, it processes images efficiently in Node.js environments and is compatible with both CommonJS and ES Module systems.

---

## Features

- **Roughness Map Generation**: Convert albedo images into grayscale roughness maps with adjustable contrast, brightness, and opacity.
- **Normal Map Generation**: Create normal maps with customizable intensity for 3D lighting effects.
- **Metalness Map Generation**: Produce binary metalness maps based on brightness thresholds, with contrast, brightness, and opacity controls.
- **Dual Module Support**: Works with both `require()` (CommonJS) and `import` (ES Modules).
- **TypeScript Compatible**: Includes TypeScript definitions for better development experience.

---
## Usage
~~~
import { generateRoughnessMap, generateNormalMap, generateMetalnessMap } from "web-three-utils";

~~~
### `generateRoughnessMap(image, contrast = 1, brightness = 0, opacity = 1)`

- **image**: `Image` - The input albedo image object from the `canvas` library.
- **contrast**: `number` (default: `1`) - Adjusts the contrast of the roughness map. Higher values increase contrast.
- **brightness**: `number` (default: `0`) - Adjusts the brightness of the roughness map. Positive values brighten, negative values darken.
- **opacity**: `number` (default: `1`) - Sets the opacity of the roughness map (range: `0` to `1`).
- **Returns**: `Image` - The generated roughness map as an `Image` object with a `src` property containing the data URL.

### `generateNormalMap(image, intensity = 1)`

- **image**: `Image` - The input albedo image object from the `canvas` library.
- **intensity**: `number` (default: `1`) - Controls the strength of the normal effect. Higher values reduce the z-component's influence.
- **Returns**: `Image` - The generated normal map as an `Image` object with a `src` property containing the data URL.

### `generateMetalnessMap(image, threshold = 128, contrast = 1, brightness = 0, opacity = 1)`

- **image**: `Image` - The input albedo image object from the `canvas` library.
- **threshold**: `number` (default: `128`) - Brightness threshold (0-255) for determining metalness. Pixels above this value are metallic (`255`), below are non-metallic (`0`).
- **contrast**: `number` (default: `1`) - Adjusts the contrast of the brightness value before thresholding.
- **brightness**: `number` (default: `0`) - Adjusts the brightness of the image before thresholding.
- **opacity**: `number` (default: `1`) - Sets the opacity of the metalness map (range: `0` to `1`).
- **Returns**: `Image` - The generated metalness map as an `Image` object with a `src` property containing the data URL.
## Installation

Install the package via npm:

```bash
npm install web-three-utils
