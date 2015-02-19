var UnitProperty = require( './unit' ),
    directions_dictionary = require( '../dictionaries/directions' );


var dirs = {
  t: [ 't' ],
  b: [ 'b' ],
  l: [ 'l' ],
  r: [ 'r' ],
  x: [ 'r', 'l' ],
  y: [ 't', 'b' ],
  all: [ 't', 'b', 'r', 'l' ]
}

var dirs_order = {
  1: [ 'all' ],
  2: [ 'y', 'x' ],
  3: [ 't', 'x', 'b' ],
  4: [ 't', 'r', 'b', 'l' ]
}

var setDirections = function ( directions, key, value ) {

  if ( key ) {

    dirs[ key ].forEach( function ( dir ) { directions[ dir ] = value; } );

  } else {

    dirs_order[ value.length ].forEach( function ( key, index ) { 

      setDirections( directions, key, value[ index ] );

    } );

  }

}


var MarPadProperty = module.exports = function ( name, data ) {

  UnitProperty.call( this, name, data );

}


MarPadProperty.prototype.__proto__ = UnitProperty.prototype;


MarPadProperty.prototype.receive = function ( nodes ) {

  nodes = UnitProperty.prototype.parse.call( this, nodes );

  var directions = {
    t: null,
    l: null,
    r: null,
    b: null
  }

  var dir = false;
  var value = [];


  nodes.forEach( function ( node ) {

    var name = this.getNodeName( node );

    if ( dirs[ name ] ) {

      if ( value.length ) setDirections( directions, dir, value );

      dir = name;

      return;

    } else {

      value.push( node );

    }

  }, this );


  if ( dir === false ) {

    this.writeProperty( value );

    return;

  }


  if ( value.length ) setDirections( directions, dir, value );

  for ( var direction in directions ) {

    var value = directions[ direction ];

    if ( value !== null ) {

      this.writeProperty( value, this.name + '-' + directions_dictionary[ direction ] );

    }

  }

}
