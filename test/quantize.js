var quantize = require('../quantize');
var expo = require('eases/expo-out');
var renderEase = require('./renderEase');
var points = require('../points');
var testStartEnd = require('./testStartEnd');
var getSamples = require('./getSamples');
var testFuzzyArray = require('test-fuzzy-array');

var NO_OPTS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var CUSTOM_EASE = [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var CUSTOM_EDGE = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

module.exports = function(t) {
  var noopts = quantize();
  var customEase = quantize({ ease: expo });
  var customEdge = quantize({ edge: 0.8 });
  var customUsingPointsEase = quantize({ 
    ease: points({
      points: [
        [ 0, 0 ],
        [ 0, 0.2499999 ],
        [ 0.8, 0.25 ],
        [ 0.8, 0.4 ],
        [ 0, 0.40001 ]
      ]
    })
  });

  t.deepEqual(getSamples(noopts, 100), NO_OPTS, 'expected samples for noopts');
  t.deepEqual(getSamples(customEase, 100), CUSTOM_EASE, 'expected samples for custom ease');
  t.deepEqual(getSamples(customEdge, 100), CUSTOM_EDGE, 'expected samples for custom edge');

  testStartEnd(t, noopts, 'quantize noopts');
  testStartEnd(t, customEase, 'quantize custom ease');
  testStartEnd(t, customEdge, 'quantize custom edge');
  testStartEnd(t, customUsingPointsEase, 'quantize using points');

  renderEase(noopts, 'quantize noopts');
  renderEase(customEase, 'quantize custom ease');
  renderEase(customEdge, 'quantize custom edge');
  renderEase(customUsingPointsEase, 'quantize using points');

  t.end();
};