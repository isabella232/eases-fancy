module.exports = function(opts) {
  opts = opts || {};

  var steps = opts.steps || 1;
  var ease = opts.ease || function(t) {
    return t;
  };
  var step = 1 / steps;

  return function(t) {
    t = ease(t);

    return Math.floor(t / step) / steps;
  };
};