module.exports = function(opts) {
  opts = opts || {};

  var points = opts.points;

  points.unshift(
    [ 0, 0 ]
  );

  points.push(
    [ 1, 1 ]
  );

  if(points.length < 2) {
    throw new Error('points should contain 2 or more data points points currently has ' + points.length);
  }

  return function(t) {
    var start;
    var end;
    var tLerp;

    for(var i = 1; i < points.length; i++) {
      start = points[ i - 1];
      end = points[ i ];

      if(start[ 1 ] <= t && t <= end[ 1 ]) {
        break;
      }
    }

    tLerp = Math.max((t - start[ 1 ]) / (end[ 1 ] - start[ 1 ]), 0);

    if(t === 1) {
      // console.log((end[ 0 ] - start[ 0 ]) * tLerp + start[ 0 ]);
    }
    
    return (end[ 0 ] - start[ 0 ]) * tLerp + start[ 0 ];
  };
};