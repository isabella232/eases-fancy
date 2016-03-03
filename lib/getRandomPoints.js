var NUM_POINTS = 20;

module.exports = function getRandomPoint(opts) {
  opts.offset = opts.offset || 0.3;
  opts.numPoints = opts.numPoints || NUM_POINTS;
  opts.maxTime = 1 / opts.numPoints;
  opts.ease = opts.ease || function(t) { return t; };

  if(opts.taper !== undefined && opts.taper !== 'out' && opts.taper !== 'in') {
    throw new Error('opts.taper should be either "out" or "in"');
  }

  var points = Array.apply(null, Array(opts.numPoints - 2))
  .map(rand.bind(null, opts));

  // clap the values if needed
  if(opts.clamp) {
    points.forEach(function(value) {
      value[ 0 ] = Math.min(Math.max(value[ 0 ], 0), 1);
    });
  }

  opts.time = undefined;

  return points;
};

function getRand(opts) {
  if(opts.clamp) {
    return randClamped.bind(null, opts);
  } else {
    return rand.bind(null, opts);
  }
}

function rand(opts, value, i) {
  var scale = 1;
  var time = (i + 1) / (opts.numPoints - 1);
  var ease = opts.ease;

  if(opts.taper === 'out') {
    scale = 1 - time;
  } else if(opts.taper === 'in') {
    scale = time;
  }

  return [
    ease(time) + (Math.random() * opts.offset - opts.offset * 0.5) * scale, // value
    time // time
  ];
}