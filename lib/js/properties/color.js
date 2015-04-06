var Property = require( './property' );


var parts_orders = {
  1: [ 'l' ],
  2: [ 'l', 'a' ],
  3: [ 'h', 's', 'l' ],
  4: [ 'h', 's', 'l', 'a' ]
}


var ColorProperty = module.exports = function ( name ) {

  Property.call( this, name );

}


ColorProperty.prototype.__proto__ = Property.prototype;


ColorProperty.prototype.createColor = function ( nodes ) {

  var color = { h: 0, s: 0, l: 0, a: 1 };

  parts_orders[ nodes.length ].forEach( function ( part, index ) { 

    color[ part ] = nodes[ index ].val;

  } );

  return new this.nodes.HSLA( color.h, color.s, color.l, color.a );

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
