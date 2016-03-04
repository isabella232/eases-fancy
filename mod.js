var quad = require('eases/quad-out');

module.exports = function(opts) {
  opts = opts || {};

  var linear = function(t) { return t; };

  opts.repeat = opts.repeat || 5;
  opts.ease = opts.ease || linear;

  return function(t) {
    var step = 1 / opts.repeat;
    var time = t;

    if(t !== 1) {
      time = (time % step) / step;
    }

    return opts.ease(time);
  };
};