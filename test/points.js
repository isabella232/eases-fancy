var renderEase = require('./renderEase');
var points = require('../points');
var quint = require('eases/quint-in');
var getSamples = require('./getSamples');
var testFuzzyArray = require('test-fuzzy-array');

var EXPECTED_CUSTOM = [0,0.05,0.1,0.24999999999999997,0.4,0.5499999999999999,0.7,0.6166666666666667,0.5333333333333332,0.44999999999999996,0.36666666666666664,0.2833333333333332,0.2,0.3000000000000001,0.39999999999999997,0.5,0.6000000000000001,0.7,0.8,0.8999999999999999,1];

module.exports = function(t) {
  var fuzzyTest = testFuzzyArray(t);
  var custom = points({
    points: [
      [0.1, 0.1],
      [0.7, 0.3],
      [0.2, 0.6]
    ]
  });

  fuzzyTest(getSamples(custom, 20), EXPECTED_CUSTOM, 'custom returned correct values');

  renderEase(custom, 'custom points');

  t.end();
};