function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import fs from "fs";
var isNode = typeof window === "undefined"; // Check if running in Node.js

/**
 * Dynamically imports `canvas` in Node.js.
 * @returns {Promise<{ Image: typeof import("canvas").Image, createCanvas: typeof import("canvas").createCanvas }>}
 */
function getCanvasModule() {
  return _getCanvasModule.apply(this, arguments);
}
/**
 * Loads an image from a file path, Buffer, or Image object.
 * @param {string | Buffer | Image} input - Path to image, Buffer, or Image object.
 * @returns {Promise<Image>} - A promise resolving to an Image object.
 */
function _getCanvasModule() {
  _getCanvasModule = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (isNode) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", {
            Image: window.Image,
            createCanvas: null
          });
        case 2:
          _context.next = 4;
          return import("canvas");
        case 4:
          return _context.abrupt("return", _context.sent);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getCanvasModule.apply(this, arguments);
}
function loadImage(_x) {
  return _loadImage.apply(this, arguments);
}
/**
 * Generates a Roughness Map.
 * @param {string | Buffer | Image} input - Image source.
 * @param {number} contrast - Contrast adjustment (default 1).
 * @param {number} brightness - Brightness adjustment (default 0).
 * @param {number} opacity - Opacity (default 1).
 * @returns {Promise<Image>} - Roughness map image.
 */
function _loadImage() {
  _loadImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
    var _yield$getCanvasModul, Image;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getCanvasModule();
        case 2:
          _yield$getCanvasModul = _context2.sent;
          Image = _yield$getCanvasModul.Image;
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            if (input instanceof Image) return resolve(input);
            if (isNode) {
              fs.readFile(input, function (err, data) {
                if (err) return reject(err);
                var img = new Image();
                img.src = data;
                resolve(img);
              });
            } else {
              var img = new Image();
              img.onload = function () {
                return resolve(img);
              };
              img.onerror = reject;
              img.src = typeof input === "string" ? input : URL.createObjectURL(new Blob([input]));
            }
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _loadImage.apply(this, arguments);
}
export function generateRoughnessMap(_x2) {
  return _generateRoughnessMap.apply(this, arguments);
}

/**
 * Generates a Normal Map.
 * @param {string | Buffer | Image} input - Image source.
 * @param {number} intensity - Intensity of the normal effect (default 1).
 * @returns {Promise<Image>} - Normal map image.
 */
function _generateRoughnessMap() {
  _generateRoughnessMap = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(input) {
    var contrast,
      brightness,
      opacity,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          contrast = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 1;
          brightness = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 0;
          opacity = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 1;
          return _context3.abrupt("return", processImage(input, function (data, i) {
            var grayscale = (data[i] + data[i + 1] + data[i + 2]) / 3;
            grayscale = (grayscale - 128) * contrast + 128 + brightness;
            grayscale = 255 - Math.max(0, Math.min(255, grayscale));
            data[i] = data[i + 1] = data[i + 2] = grayscale;
            data[i + 3] = opacity * 255;
          }));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _generateRoughnessMap.apply(this, arguments);
}
export function generateNormalMap(_x3) {
  return _generateNormalMap.apply(this, arguments);
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
function _generateNormalMap() {
  _generateNormalMap = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(input) {
    var intensity,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          intensity = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 1;
          return _context4.abrupt("return", processImage(input, function (data, i, width) {
            var dx = data[i + 4] - data[i - 4];
            var dy = data[i + width * 4] - data[i - width * 4];
            var dz = 255 / intensity;
            var length = Math.sqrt(dx * dx + dy * dy + dz * dz);
            data[i] = dx / length * 128 + 128;
            data[i + 1] = dy / length * 128 + 128;
            data[i + 2] = dz / length * 128 + 128;
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _generateNormalMap.apply(this, arguments);
}
export function generateMetalnessMap(_x4) {
  return _generateMetalnessMap.apply(this, arguments);
}

/**
 * Processes an image and applies pixel transformation.
 * @param {string | Buffer | Image} input - Image source.
 * @param {Function} processPixel - Function to process pixels.
 * @returns {Promise<Image>} - Processed image.
 */
function _generateMetalnessMap() {
  _generateMetalnessMap = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(input) {
    var threshold,
      contrast,
      brightness,
      opacity,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          threshold = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 128;
          contrast = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 1;
          brightness = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : 0;
          opacity = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : 1;
          return _context5.abrupt("return", processImage(input, function (data, i) {
            var brightnessValue = (data[i] + data[i + 1] + data[i + 2]) / 3;
            brightnessValue = (brightnessValue - 128) * contrast + 128 + brightness;
            var metalness = brightnessValue > threshold ? 255 : 0;
            data[i] = data[i + 1] = data[i + 2] = metalness;
            data[i + 3] = opacity * 255;
          }));
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _generateMetalnessMap.apply(this, arguments);
}
function processImage(_x5, _x6) {
  return _processImage.apply(this, arguments);
}
/**
 * Converts a canvas to an Image object.
 * @param {Canvas} canvas - The canvas to convert.
 * @returns {Image} - An Image object with a Base64 source.
 */
function _processImage() {
  _processImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(input, processPixel) {
    var _yield$getCanvasModul2, createCanvas, image, canvas, ctx, imageData, data, width, i;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return getCanvasModule();
        case 2:
          _yield$getCanvasModul2 = _context6.sent;
          createCanvas = _yield$getCanvasModul2.createCanvas;
          _context6.next = 6;
          return loadImage(input);
        case 6:
          image = _context6.sent;
          if (isNode) {
            _context6.next = 9;
            break;
          }
          return _context6.abrupt("return", image);
        case 9:
          // Return original in browsers
          canvas = createCanvas(image.width, image.height);
          ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, image.width, image.height);
          imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          data = imageData.data;
          width = image.width;
          for (i = 0; i < data.length; i += 4) {
            processPixel(data, i, width);
          }
          ctx.putImageData(imageData, 0, 0);
          return _context6.abrupt("return", canvasToImage(canvas));
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _processImage.apply(this, arguments);
}
function canvasToImage(canvas) {
  var img = new Image();
  img.src = canvas.toDataURL();
  return img;
}