var Utils = require( './utils' );
var compactProp = require( './compact_prop' );


var plugin = function () {

  return function ( style ) {

    var utils = new Utils( this.nodes );
    
    compactProp( this.nodes, utils, style );

  };

};


module.exports = plugin;
