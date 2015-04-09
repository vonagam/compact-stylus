var Property = require( './property' );


var MixedProperty = module.exports = function ( name, data ) {

  Property.call( this, name );

  this.values = data.v || {};
  this.units = data.u || 'px';

}


MixedProperty.prototype.__proto__ = Property.prototype;


MixedProperty.prototype.parse = function ( nodes ) {

  return nodes.map( function ( node ) {

    if ( node instanceof this.nodes.Unit ) {

      node.type = node.type === 'x' ? '' : ( node.type || this.units );

      return node;

    }

    var local_value = this.values[ this.getNodeName( node ) ];

    if ( local_value ) return local_value;

    var common_value = this.findCommonValue( node );

    if ( common_value ) return common_value;

    return node;

  }, this );

}
