var cubicBezier = require('cubic-bezier');

module.exports = function(opts) {
  opts = opts || {};
  opts.points = opts.points || [0.21,1.08,1,-0.96];
  opts.precision = opts.precision || 1000;

  var props = opts.points.concat([opts.precision]);
  var ease = cubicBezier.apply(null, props);

  return function(t) {
    return ease(t);
  };
};