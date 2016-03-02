var stepped = require('../stepped');

module.exports = function(t) {
  var nooptions = stepped();
  var twoStep = stepped({
    steps: 2
  });
  var customEase = stepped({
    steps: 2,
    ease: function(t) { return 0 }
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
  
  t.end();
};