// Configure app loading
// ----------------------------------------------------------------------------

require.config({

  paths: {

    bacon: 'libs/Bacon',
    leap:  'libs/leap.min'

  },

  shim: {

    leap: { exports: 'Leap' }

  }

});

require([ 'app/main' ]);
