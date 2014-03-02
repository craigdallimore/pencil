// Leap Stream
// ----------------------------------------------------------------------------

define([ 'bacon', 'leap' ], function(Bacon, Leap) {

  var leapController = new Leap.Controller({ enableGestures: true }),
      leapBus        = new Bacon.Bus();

  leapController.on('connect', function() {

    console.log('Leap Connected');

  });

  leapController.on('frame', leapBus.push);

  leapController.connect();

  return leapBus;

});
