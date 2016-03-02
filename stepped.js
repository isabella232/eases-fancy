module.exports = function(options) {
  options = options || {};

  var steps = options.steps || 1;
  var ease = options.ease || function(t) {
    return t;
  };
  var step = 1 / steps;

  return function(t) {
    t = ease(t);

    return Math.floor(t / step) / steps;
  };
};