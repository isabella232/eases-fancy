var renderEase = require('./renderEase');
var pointsRandom = require('../points-random');
var quint = require('eases/quint-in');
var getSamples = require('./getSamples');
var testFuzzyArray = require('test-fuzzy-array');

module.exports = function(t) {
  var randPoints = pointsRandom();
  var randPointsClamped = pointsRandom({ clamp: true, offset: 10 });
  var randPointsQuint = pointsRandom({ ease: quint });
  var randPointsTaperIn = pointsRandom({ taper: 'in', offset: 1, numPoints: 100 });
  var randPointsTaperOut = pointsRandom({ taper: 'out', offset: 1, numPoints: 100 });

  t.ok(areClamped(getSamples(randPointsClamped, 100)), 'all points were clamped');

  renderEase(randPoints, 'random points');
  renderEase(randPointsClamped, 'random points clamped');
  renderEase(randPointsQuint, 'random points quint');
  renderEase(randPointsTaperIn, 'random points taper in');
  renderEase(randPointsTaperOut, 'random points taper out');

  t.end();
};

function areClamped(points) {
  return !points.reduce(function(notAllClamped, value) {
    return notAllClamped || value < 0 || value > 1;
  }, false);
}