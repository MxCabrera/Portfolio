// CommonJS style
let kute = require("kute.js"); //grab the core
require("kute.js/kute-svg"); // Add SVG Plugin
require("kute.js/kute-css"); // Add CSS Plugin
require("kute.js/kute-attr"); // Add Attributes Plugin
require("kute.js/kute-text"); // Add Text Plugin

// AMD style
define([
   "kute.js",
   "kute.js/kute-svg.js", // optional for SVG morph, draw and other SVG related CSS
   "kute.js/kute-css.js", // optional for additional CSS properties
   "kute.js/kute-attr.js", // optional for animating presentation attributes
   "kute.js/kute-text.js" // optional for string write and number incrementing animations
], function (KUTE) {
   // ...
});
