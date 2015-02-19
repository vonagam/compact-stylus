var common_values = require( '../init/values' );


var Property = module.exports = function ( name ) {

  if ( name ) {

    this.name = name.replace( /\s.+$/, '' );

  }

}


Property.prototype.getNodeName = function ( node ) {

  if ( node instanceof this.nodes.Ident || node instanceof this.nodes.Function ) return node.name;

}


Property.prototype.findCommonValue = function ( node ) {

  return common_values[ this.getNodeName( node ) ];

}


Property.prototype.valueToExpression = function ( value ) {

  if ( value instanceof this.nodes.Node ) return value.toExpression();

  var expression = new this.nodes.Expression;

  if ( value instanceof Array ) {

    value.forEach( function ( element ) { expression.push( element ); } );

  } else {

    expression.push( value );

  }

  return expression;

}


Property.prototype.writeProperty = function ( value, name ) {

  var name = name || this.name;

  var prop = new this.nodes.Property( [ name ], this.valueToExpression( value ) );
  var block = Property.block;

  var len = block.nodes.length
    , head = block.nodes.slice( 0, block.index )
    , tail = block.nodes.slice( block.index++, len );

  head.push( prop );

  block.nodes = head.concat( tail );
  
}


Property.prototype.receive = function ( nodes ) {

  this.writeProperty( this.parse( nodes ) );

}