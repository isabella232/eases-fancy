module.exports = function getSamples(ease, count) {
  var samples = [];
  var time;

  for(var i = 0; i <= count; i++) {
    time = i / count;

    samples.push(
      ease(time)
    );
  }

  return samples;
};