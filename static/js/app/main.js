// Main
// ----------------------------------------------------------------------------

require(['bacon', 'app/leap'], function(Bacon, leap) {

  // Leap Event
  // --------------------------
  //_rotation: Array[9]
  //_scaleFactor: 3.71962
  //_translation: Array[3]
  //controller: module.exports
  //currentFrameRate: undefined
  //data: Object
  //fingers: Array[0]
  //gestures: Array[0]
  //hands: Array[0]
  //handsMap: Object
  //historyIdx: 888
  //id: 13456
  //interactionBox: module.exports
  //pointables: Array[0]
  //pointablesMap: Object
  //timestamp: 123170524
  //tools: Array[0]
  //type: "frame"
  //valid: true

  var gestureStream = leap.map('.gestures').throttle(10);
  var fingerStream  = leap.map('.fingers').throttle(10);
  var handsStream   = leap.map('.hands').throttle(10);

  var $x = document.querySelector('.x'),
      $y = document.querySelector('.y'),
      $z = document.querySelector('.z');

  var handPos = handsStream.onValue(function(hands) {
    var hand = hands.length ? hands[0].palmPosition : null;

    if (!hand) { return; }

    //console.log(hand);
    $x.innerText = 'x ' + hand[0];
    $y.innerText = 'y ' + hand[1];
    $z.innerText = 'z ' + hand[2];

  });

});
