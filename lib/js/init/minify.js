var additionals = require( '../dictionaries/additionals' );


var minify = module.exports = function ( name ) {

  var result = [];

  name = name.replace( /[^\w\-\_]/g, '' );

  if ( additionals[ name ] ) result.push( additionals[ name ] );

  if ( name.length <= 3 ) {

    result.unshift( name );

  } else if ( name.indexOf( '-' ) !== -1 ) {

    result.unshift( name.split( '-' ).map( function ( part ) { return minify( part ) } ).join( '-' ) );

  } else {

    var check = name.slice( 1 );

    check = check.replace( /[aoieuy]/g, '' );

    if ( check.length === 2 ) {

      result.unshift( name[ 0 ] + check );

    } else {

      result.unshift( name.slice( 0, 3 ) );

    }

  }

  return result;

}
