var Property = require( './property' );


var ValueProperty = module.exports = function ( name, data ) {

  Property.call( this, name );

  this.values = data.v || {};

}


ValueProperty.prototype.__proto__ = Property.prototype;


ValueProperty.prototype.parse = function ( nodes ) {

  return nodes.map( function ( node ) {

    var local_value = this.values[ this.getNodeName( node ) ];

    if ( local_value ) return local_value;

    var common_value = this.findCommonValue( node );

    if ( common_value ) return common_value;

    return node;

  }, this );

}
