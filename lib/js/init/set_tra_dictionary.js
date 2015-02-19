var RootProperty = require( '../properties/root' );


var setTraDictionary = module.exports = function ( compact_properties, css_properties ) {

  var properties = {};

  for ( var name in compact_properties ) {

    var property = compact_properties[ name ];

    if ( property instanceof RootProperty ) {

      for ( var nested_name in property.nesteds ) {

        var nested_property = property.nesteds[ nested_name ];

        var full_name = nested_name ? name + '-' + nested_name : name;

        properties[ full_name ] = nested_property.name;;

      }

    } else {

      properties[ name ] = property.name;

    }

  }

  console.log( Object.keys( compact_properties ).length );

  [ 'transition', 'transition-property' ].forEach( function ( css_name ) {

    var merge_to = css_properties[ css_name ].values;

    for ( var key in properties ) {

      merge_to[ key ] = properties[ key ];

    }

  } );

}
