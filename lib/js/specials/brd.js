var $directions = require( '../dictionaries/directions' );


module.exports = function ( args, $utils, $node ) {

  var addProperty = $utils.addProperty;
  var getNodeName = $utils.getNodeName;
  var arrayToExpression = $utils.arrayToExpression;


  var dir = ''

  var setSubProperty = function ( sub, value ) {

    addProperty( 'border' + dir + '-' + sub, arrayToExpression( [ value ] ) );

  }

  args.forEach( function ( arg ) {

    var name = getNodeName( arg );

    if ( $directions[ name ] ) {

      dir = '-' + $directions[ name ];

    } else {

      if ( arg instanceof $node.Unit ) {

        setSubProperty( 'width', arg );

      } else if ( arg === 'transparent' || arg instanceof $node.RGBA || arg instanceof $node.HSLA ) {

        setSubProperty( 'color', arg );

      } else {

        setSubProperty( 'style', arg );

      }

    }

  } );

}
