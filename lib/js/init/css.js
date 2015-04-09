var Property = require( '../properties/property' ),
    BorderProperty = require( '../properties/border' ),
    ColorProperty = require( '../properties/color' ),
    IncludingProperty = require( '../properties/including' ),
    MarPadProperty = require( '../properties/mar_pad' ),
    MixedProperty = require( '../properties/mixed' ),
    UnitProperty = require( '../properties/unit' ),
    ValueProperty = require( '../properties/value' );

var css_dictionary = require( '../dictionaries/css' );

var minify = require( './minify' );

var result = module.exports = {};

var includings = [];

var types = {
  'p': Property,
  'c': ColorProperty,
  'm': MixedProperty,
  'u': UnitProperty,
  'v': ValueProperty,
  'mar_pad': MarPadProperty
}

var minifyValues = function ( values ) {

  var minifieds = {};

  if ( values instanceof Array ) {

    values.forEach( function ( value ) {

      minify( value ).forEach( function ( minified ) {

        minifieds[ minified ] = value;

      } );
    
    } );

  } else {

    for ( var key in values ) {

      minify( key ).forEach( function ( minified ) {

        minifieds[ minified ] = values[ key ];

      } );

    }

  }

  return minifieds;

}

for ( var name in css_dictionary ) {

  var data = css_dictionary[ name ];

  if ( data.v ) {

    data.v = minifyValues( data.v );

  }

  if ( data.t === 'i' || data.t === 'border' ) {

    includings.push( { name: name, data: data } );

    continue;

  }

  var prop = new types[ data.t ]( name, data )

  result[ name ] = prop;

}

includings.forEach( function ( including ) {

  var name = including.name;
  var data = including.data;
  var includeds = data.i.map( function ( name ) { return result[ name ] } );

  if ( data.t === 'border' ) {

    result[ name ] = new BorderProperty( name, data, includeds );

  } else {

    result[ name ] = new IncludingProperty( name, data, includeds );

  }

} );
