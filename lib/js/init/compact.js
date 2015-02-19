var RootProperty = require( '../properties/root' ),
    css_properties = require( './css' ),
    minify = require( './minify' ),
    compact_dictionary = require( '../dictionaries/compact' ),
    setTraDictionary = require( './set_tra_dictionary' );

var result = module.exports = {};


for ( var compact_name in compact_dictionary ) {

  var value = compact_dictionary[ compact_name ];

  if ( typeof value === 'string' ) {

    result[ minify( compact_name )[ 0 ] ] = css_properties[ value ];

    continue;

  }

  var nesteds = {}

  for ( var nested_name in value ) {

    var css_name = value[ nested_name ];

    minify( nested_name ).forEach( function ( minified ) {

      nesteds[ minified ] = css_properties[ css_name ];

    } );

  }

  result[ minify( compact_name )[ 0 ] ] = new RootProperty( nesteds );

}


setTraDictionary( result, css_properties );
