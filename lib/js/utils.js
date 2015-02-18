var methods = {

  getNodeName: function ( node ) {

    if ( node instanceof this.node.Ident || node instanceof this.node.Function ) return node.name;

  },

  addProperty: function ( name, value ) {

    var prop = new this.node.Property( [ name ], value );

    var len = this.block.nodes.length
      , head = this.block.nodes.slice( 0, this.block.index )
      , tail = this.block.nodes.slice( this.block.index++, len );

    head.push( prop );

    this.block.nodes = head.concat( tail );

  },

  arrayToExpression: function ( array ) {

    var expression = new this.node.Expression;

    array.forEach( function ( element ) { expression.push( element ); } );

    return expression;

  }

}


var Utils = module.exports = function ( $node ) {

  this.block = undefined;
  this.node = $node;

  for ( var method_name in methods ) {

    this[ method_name ] = methods[ method_name ].bind( this );

  }

}
