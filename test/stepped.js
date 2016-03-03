var stepped = require('../stepped');
var renderEase = require('./renderEase');
var expo = require('eases/expo-in');
var getSamples = require('./getSamples');
var testFuzzyArray = require('test-fuzzy-array');

var EXPECTED_EXPO = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.2,0.2,0.2,0.2,0.3,0.3,0.3,0.3,0.4,0.4,0.4,0.5,0.5,0.5,0.6,0.6,0.7,0.7,0.8,0.8,0.9,1];

module.exports = function(t) {
  var fuzzyTest = testFuzzyArray(t);
  var nooptions = stepped();
  var twoStep = stepped({
    steps: 2
  });
  var expod = stepped({
    steps: 10,
    ease: expo
  });

  t.equal(nooptions(0), 0, '0 returns 0 for nooptions');
  t.equal(nooptions(0.5), 0, '0.25 returns 0 for nooptions');
  t.equal(nooptions(0.5), 0, '0.5 returns 0 for nooptions');
  t.equal(nooptions(0.5), 0, '0.75 returns 0 for nooptions');
  t.equal(nooptions(1), 1, '1 returns 1 for nooptions');

  t.equal(twoStep(0), 0, '0 returns 0 for twoStep');
  t.equal(twoStep(0.25), 0, '0.25 returns 0.25 for twoStep');
  t.equal(twoStep(0.5), 0.5, '0 returns 0 for twoStep');
  t.equal(twoStep(0.75), 0.5, '0.75 returns 0.5 for twoStep');
  t.equal(twoStep(1), 1, '1 returns 1 for twoStep');

  fuzzyTest(getSamples(expod, 100), EXPECTED_EXPO, 'custom ease with expo return correct values');
  
  renderEase(nooptions, 'stepped nooptions');
  renderEase(twoStep, 'stepped twoStep');
  renderEase(expod, 'stepped customEase expo');
  
  t.end();
};