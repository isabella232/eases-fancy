var getSamples = require('./getSamples');

module.exports = function(t, ease, easeName) {
  var samples = getSamples(ease, 20);

  t.equal(samples[ 0 ], 0, easeName + ' start was 0');
  t.equal(samples[ samples.length - 1 ], 1, easeName + ' end was 1');
};