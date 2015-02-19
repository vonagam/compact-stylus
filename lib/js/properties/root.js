var Property = require( './property' );


var RootProperty = module.exports = function ( nesteds ) {

  Property.call( this );

  this.nesteds = nesteds;

}


RootProperty.prototype.__proto__ = Property.prototype;


RootProperty.prototype.receive = function ( nodes ) {

  var prop = this.nesteds[ '' ];
  var params = [];

  nodes.forEach( function ( node ) {

    var name = this.getNodeName( node );

    if ( name && this.nesteds[ name ] ) {

      if ( params.length && prop ) prop.receive( params );

      prop = this.nesteds[ name ];
      params = []

    } else {

      params.push( node );

    }

  }, this );

  if ( params.length && prop ) prop.receive( params );

}
