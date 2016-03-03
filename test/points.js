var renderEase = require('./renderEase');
var points = require('../points');
var quint = require('eases/quint-in');
var getSamples = require('./getSamples');
var testFuzzyArray = require('test-fuzzy-array');
var elastic = require('eases/elastic-out');
var testStartEnd = require('./testStartEnd');

var EXPECTED_CUSTOM = [0,0.05,0.1,0.24999999999999997,0.4,0.5499999999999999,0.7,0.6166666666666667,0.5333333333333332,0.44999999999999996,0.36666666666666664,0.2833333333333332,0.2,0.3000000000000001,0.39999999999999997,0.5,0.6000000000000001,0.7,0.8,0.8999999999999999,1];
var EXPECTED_CUSTOM_WITH_EASE = [0,0.05,0.1,0.24999999999999997,0.4,0.5499999999999999,0.7,0.04787621485266291,0.2429603011562062,0.18895145654396028,0.20246078330057593,0.19959877966360828,0.2,0.3000000000000001,0.39999999999999997,0.5,0.6000000000000001,0.7,0.8,0.8999999999999999,1];

module.exports = function(t) {
  var fuzzyTest = testFuzzyArray(t);
  var custom = points({
    points: [
      [0.1, 0.1],
      [0.7, 0.3],
      [0.2, 0.6]
    ]
  });
  var customWithEase = points({
    points: [
      [0.1, 0.1],
      [0.7, 0.3, elastic],
      [0.2, 0.6]
    ]
  });

  testStartEnd(t, custom, 'points without ease');
  testStartEnd(t, customWithEase, 'points with ease');

  fuzzyTest(getSamples(custom, 20), EXPECTED_CUSTOM, 'custom returned correct values');
  fuzzyTest(getSamples(customWithEase, 20), EXPECTED_CUSTOM_WITH_EASE, 'custom with ease correct values')

  renderEase(custom, 'custom points');
  renderEase(customWithEase, 'custom points with elastic out');

  t.end();
};