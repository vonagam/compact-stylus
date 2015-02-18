var $common_values = require( './dictionaries/values' );
var $dictionary = require( './dictionaries/properties' );


module.exports = function ( $node, $utils, $style ) {

  var addProperty = $utils.addProperty;
  var getNodeName = $utils.getNodeName;
  var arrayToExpression = $utils.arrayToExpression;


  var proceedProp = function ( prop, args ) {

    var name = prop[ 0 ];
    var dictionary;
    var units;
    var value = [];

    if ( prop[ 1 ] === false ) {

      addProperty( name, arrayToExpression( args ) );

      return;

    }

    if ( typeof prop[ 1 ] === 'string' ) {

      console.log( prop[ 1 ] );

      dictionary = {};
      units = prop[ 1 ];

    } else {

      dictionary = prop[ 1 ] || {};
      units = prop[ 2 ] || 'px';

    }

    args.forEach( function ( arg ) {

      //if length( $arg ) > 1 $arg = $proceedColor( $arg )
      //wanted to do stuff like: bac clr ( 0 0.5 ) -> background-color hsla( 0,0%,0%,0.5 )
      //but for some reason can't get length of ( 0 0.5 ) any more

      if ( arg instanceof $node.Unit ) {

        arg.type = arg.type || units; 

      } else {

        var name = getNodeName( arg );
        var real;

        if ( name && ( ( real = dictionary[ name ] ) || ( real = $common_values[ name ] ) ) ) arg = real;

      }

      value.push( arg );

    } );

    if ( typeof name === 'function' ) {

      name( value, $utils, $node );

    } else {

      addProperty( name, arrayToExpression( value ) );

    }

  }


  var proceedProps = function ( props, args ) {

    var prop = props.___;
    var params = [];

    args.forEach( function ( arg ) {

      var name = getNodeName( arg );

      if ( name && props[ name ] ) {

        if ( params.length && prop ) proceedProp( prop, params );

        prop = props[ name ];
        params = []

      } else {

        params.push( arg );

      }

    } );

    if ( params.length && prop ) proceedProp( prop, params );

  }


  $style.define( '$compactProp', function () {

    $utils.block = this.currentBlock;

    var prop = $dictionary[ this.property.name ];
    var args = Array.prototype.slice.call( arguments, 0 );

    if ( prop === undefined ) throw new Error( 'undefined compact with name: ' + this.property.name );

    if ( prop instanceof Array ) {

      proceedProp( prop, args );

    } else {

      proceedProps( prop, args );

    }

  } );

}
