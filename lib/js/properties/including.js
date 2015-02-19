var MixedProperty = require( './mixed' ),
    UnitProperty = require( './unit');


var IncludingProperty = module.exports = function ( name, data, includeds ) {

  MixedProperty.call( this, name, data );

  var units = false;

  includeds.forEach( function ( included ) {

    for ( var key in included.values ) {

      this.values[ key ] = included.values[ key ];

    }

    if ( included instanceof UnitProperty || included instanceof MixedProperty ) {

      if ( units === false ) {

        units = included.units;

      } else if ( units !== included.units ) {

        units = '';

      }

    }

  }, this );

  if ( typeof units === 'string' ) this.units = units;

}


IncludingProperty.prototype.__proto__ = MixedProperty.prototype;
