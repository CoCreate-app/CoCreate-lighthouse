(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["./client"], function(CoCreateLighthouse) {
        	return factory(CoCreateLighthouse)
        });
    } else if (typeof module === 'object' && module.exports) {
      const CoCreateLighthouse = require("./server.js")
      module.exports = factory(CoCreateLighthouse);
    } else {
        root.returnExports = factory(root["./client.js"]);
  }
}(typeof self !== 'undefined' ? self : this, function (CoCreateLighthouse) {
  return CoCreateLighthouse;
}));