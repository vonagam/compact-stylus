var createAliases = module.exports = function ( aliases_array ) {

  var result = {};

  aliases_array.forEach( function ( aliases ) {

    if ( aliases instanceof Array ) {

      var value = aliases[ 0 ];

      aliases.forEach( function ( alias ) {

        result[ alias ] = value;

      } );

    } else {

      result[ aliases ] = aliases;

    }

  } );

  return result;

}
