var Property = require( './property' );


var UnitProperty = module.exports = function ( name, data ) {

  Property.call( this, name );

  this.units = data.u !== undefined ? data.u : 'px';

}


UnitProperty.prototype.__proto__ = Property.prototype;


UnitProperty.prototype.parse = function ( nodes ) {

  return nodes.map( function ( node ) {

    if ( node instanceof this.nodes.Unit ) {

      node.type = node.type === 'x' ? '' : ( node.type || this.units );

      return node;

    }

    var common_value = this.findCommonValue( node );

    if ( common_value ) return common_value;

    return node;

  }, this );

}
