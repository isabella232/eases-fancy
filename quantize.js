module.exports = function(opts) {
  opts = opts || {};
  opts.ease = opts.ease || function(t) { return t; };
  opts.edge = opts.edge === undefined ? 0.5 : opts.edge;

  return function(t) {
    t = opts.ease(t);

    return t > opts.edge ? 1 : 0;
  };
};