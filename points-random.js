var points = require('./points');
var getRandomPoints = require('./lib/getRandomPoints');

module.exports = function(opts) {
  opts = opts || {};

  opts.points = getRandomPoints(opts);

  return points(opts);
};