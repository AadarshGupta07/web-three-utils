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

## Installation

Install the package via npm:

```bash
npm install web-three-utils
