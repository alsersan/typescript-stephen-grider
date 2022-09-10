var webpack_modules = {
  './src/common-js/message.js': (module) => {
    module.exports = 'Hi there';
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
  moduleFn(module);
  return module.exports;
}

const message = webpack_require('./src/common-js/message.js');
console.log(message);
