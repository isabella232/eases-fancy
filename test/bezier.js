var renderEase = require('./renderEase');
var bezier = require('../bezier');
var testFuzzyArray = require('test-fuzzy-array');
var getSamples = require('./getSamples');

var NUM_SAMPLES = 20;
var COMPARE = [ 0, 0.13949000887983, 0.23751998037198002, 0.29943001383129003, 0.33055997019402006, 0.33624994881501, 0.3218400490491, 0.29267001262326003, 0.25408005810162004, 0.21141004642044003, 0.16999995772527002, 0.13519001058024002, 0.11231994671232001, 0.10672998468564002, 0.12375998543646001, 0.16875004831962, 0.24704003427138002, 0.36397004264658006, 0.5248800535907701, 0.7351100472495001, 1.0000000037683 ];

module.exports = function(t) {

  var fuzz = testFuzzyArray(t);
  var ease = bezier();
  var samples = getSamples(ease, NUM_SAMPLES);

  fuzz(samples, COMPARE, 'bezier curve rendered the same');

  renderEase(bezier(), 'bezier');

  t.end();
};