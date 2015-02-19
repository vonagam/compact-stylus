var map = require( './init/compact' ),
    Property = require( './properties/property' );


var plugin = module.exports = function () {

  return function ( style ) {

    Property.prototype.nodes = this.nodes;

    style.define( '$compactProp', function () {

      Property.block = this.currentBlock;

      var prop = map[ this.property.name ];
      var args = Array.prototype.slice.call( arguments, 0 );

      if ( prop === undefined ) throw new Error( 'undefined compact with name: ' + this.property.name );

      prop.receive( args );

    } );

  };

};
