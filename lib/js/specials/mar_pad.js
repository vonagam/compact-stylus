var $directions = require( '../dictionaries/directions' );


var $dirs = {
  t: [ 't' ],
  b: [ 'b' ],
  l: [ 'l' ],
  r: [ 'r' ],
  x: [ 'r', 'l' ],
  y: [ 't', 'b' ],
  all: [ 't', 'b', 'r', 'l' ]
}

var $dirs_order = {
  1: [ 'all' ],
  2: [ 'y', 'x' ],
  3: [ 't', 'x', 'b' ],
  4: [ 't', 'r', 'b', 'l' ]
}

var setDirections = function ( directions, key, value ) {

  if ( key ) {

    $dirs[ key ].forEach( function ( dir ) { directions[ dir ] = value; } );

  } else {

    $dirs_order[ value.length ].forEach( function ( key, index ) { 

      setDirections( directions, key, value[ index ] );

    } );

  }

}


module.exports = function ( attr, args, $utils, $node ) {

  var addProperty = $utils.addProperty;
  var getNodeName = $utils.getNodeName;
  var arrayToExpression = $utils.arrayToExpression;


  var directions = {
    t: null,
    l: null,
    r: null,
    b: null
  }

  var dir = false;
  var value = [];

  args.forEach( function ( arg ) {

    var name = getNodeName( arg );

    if ( $dirs[ name ] ) {

      if ( value.length ) setDirections( directions, dir, value );

      dir = name;

    } else {

      value.push( arg );

    }

  } );

  if ( dir === false ) {

    addProperty( attr, arrayToExpression( value ) );

    return;

  }

  if ( value.length ) setDirections( directions, dir, value );

  for ( var direction in directions ) {

    var value = directions[ direction ];

    if ( value !== null ) {

      addProperty( attr + '-' + $directions[ direction ], arrayToExpression( value ) );

    }

  }

}
