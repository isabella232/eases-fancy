var stepped = require('../stepped');
var renderEase = require('./renderEase');
var expo = require('eases/expo-in');

module.exports = function(t) {
  var nooptions = stepped();
  var twoStep = stepped({
    steps: 2
  });
  var customEase = stepped({
    steps: 2,
    ease: function(t) { return 0 }
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

  t.equal(customEase(0.333), 0, 'custom ease is modifying values');

  t.equal(expod(0), 0, '0 returns 0 for expod');
  t.equal(expod(0.5), 0, '0 returns 0 for expod');
  t.equal(expod(0.75), 0.1, '0.75 returns 0.5 for expod');
  t.equal(expod(0.8), 0.2, '0.75 returns 0.5 for expod');
  t.equal(expod(0.9), 0.5, '0.75 returns 0.5 for expod');
  t.equal(expod(1), 1, '1 returns 1 for expod');

  renderEase(nooptions, 'stepped nooptions');
  renderEase(twoStep, 'stepped twoStep');
  renderEase(customEase, 'stepped customEase');
  renderEase(expod, 'stepped customEase expo');
  
  t.end();
};