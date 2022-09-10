'use strict';
var webpack_modules = {
  './src/es-modules/message.js': (unused_webpack_module, webpack_exports, webpack_require) => {
    webpack_require.r(webpack_exports);
    webpack_require.d(webpack_exports, { default: () => WEBPACK_DEFAULT_EXPORT });
    const WEBPACK_DEFAULT_EXPORT = 'Hi there';
  },

  './src/index.js': (unused_webpack_module, webpack_exports, webpack_require) => {
    webpack_require.r(webpack_exports);
    var importedModule = webpack_require('./src/es-modules/message.js');
    console.log(importedModule.default);
  },
};

var webpack_module_cache = {};

function webpack_require(moduleId) {
  if (webpack_module_cache[moduleId]) {
    return webpack_module_cache[moduleId].exports;
  }
  var moduleFn = webpack_modules[moduleId];
  var module = {
    exports: {},
  };
  webpack_module_cache[moduleId] = module;
  moduleFn(module, module.exports, webpack_require);
  return module.exports;
}

///////////

/* webpack/runtime/define property getters */
(() => {
  // define getter functions for harmony exports
  webpack_require.d = (exports, definition) => {
    for (var key in definition) {
      if (webpack_require.o(definition, key) && !webpack_require.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();

/* webpack/runtime/hasOwnProperty shorthand */
(() => {
  webpack_require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

/* webpack/runtime/make namespace object */
(() => {
  // define __esModule on exports
  webpack_require.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
})();

// Load entry module
webpack_require('./src/index.js');
