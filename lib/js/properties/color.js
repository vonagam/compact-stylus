var Property = require( './property' );


var ColorProperty = module.exports = function ( name ) {

  Property.call( this, name );

}


ColorProperty.prototype.__proto__ = Property.prototype;


ColorProperty.prototype.createColor = function ( nodes ) {

  var h = 0,
      s = 0,
      l = 0,
      a = 0;

  switch ( nodes.length ) {

    case 1:

      a = nodes[ 0 ].val;

      break;

    case 2:

      l = nodes[ 0 ].val;
      a = nodes[ 1 ].val;

      break;

    case 3:

      h = nodes[ 0 ].val;
      s = nodes[ 1 ].val;
      l = nodes[ 2 ].val;

      break;

    default:

      h = nodes[ 0 ].val;
      s = nodes[ 1 ].val;
      l = nodes[ 2 ].val;
      a = nodes[ 3 ].val;

      break;

  }

  return new this.nodes.HSLA( h, s, l, a );

}


ColorProperty.prototype.parse = function ( nodes ) {

  if ( nodes.length > 0 && nodes.every( function ( node ) { return node instanceof this.nodes.Unit }, this ) ) {

    return this.createColor( nodes );

  } else {

    return nodes.map( function ( node ) {

      var common_value = this.findCommonValue( node );

      if ( common_value ) return common_value;

      return node;

    }, this );

  }

}
