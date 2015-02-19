var values = require( '../dictionaries/values' ),
    minify = require( './minify' );

var result = module.exports = {};

values.forEach( function ( value ) {

  result[ minify( value )[ 0 ] ] = value;

} );
