var IncludingProperty = require( './including' ),
    directions_dictionary = require( '../dictionaries/directions' );


var BorderProperty = module.exports = function ( name, data, includeds ) {

  IncludingProperty.call( this, name, data, includeds );

}


BorderProperty.prototype.__proto__ = IncludingProperty.prototype;


BorderProperty.prototype.setSubProperty = function ( sub, dir, value ) {

  this.writeProperty( value, 'border' + dir + '-' + sub );

}


BorderProperty.prototype.receive = function ( nodes ) {

  nodes = IncludingProperty.prototype.parse.call( this, nodes );

  var dir = '';


  nodes.forEach( function ( node ) {

    var name = this.getNodeName( node );

    if ( directions_dictionary[ name ] ) {

      dir = '-' + directions_dictionary[ name ];

    } else {

      if ( node instanceof this.nodes.Unit ) {

        this.setSubProperty( 'width', dir, node );

      } else if ( node === 'transparent' || node instanceof this.nodes.RGBA || node instanceof this.nodes.HSLA ) {

        this.setSubProperty( 'color', dir, node );

      } else {

        this.setSubProperty( 'style', dir, node );

      }

    }

  }, this );

}
