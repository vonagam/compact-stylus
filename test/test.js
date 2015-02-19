var stylus = require( 'stylus' ),
    expect = require( 'chai' ).expect,
    fs = require( 'fs' );


it( 'mixins', function () {

  var mixins = fs.readFileSync( 'lib/mixins.styl', 'utf8' );

  var mixins_names = mixins.match( /\w+(?=\(\))/g );

  var compact_properties = require( '../lib/js/init/compact' );

  var compact_names = Object.keys( compact_properties );

  expect( mixins_names ).eql( compact_names );

} );


describe( 'cases', function () {

  // nib test style

  this.slow( 200 );

  var cases = fs.readdirSync( 'test/cases' ).filter( function ( file ) {

    return ~file.indexOf( '.styl' );

  } ).map( function ( file ) {

    return file.replace( '.styl', '' );

  } );

  cases.forEach( function ( test ) {

    var name = test.replace( /[-_.]/g, ' ' );

    it( name, function () {

      var path = 'test/cases/' + test + '.styl';
      var input_styl = fs.readFileSync( path, 'utf8' );
      var output_css = fs.readFileSync( 'test/cases/' + test + '.css', 'utf8' );

      var style = 
        stylus( input_styl )
        .set( 'filename', path )
        .include( __dirname + '/../' )
        .import( 'index' );

      style.render( function( err, result ) {

        if ( err ) throw err;

        expect( result.trim() ).equal( output_css.trim() );

      } );

    } );

  } );

} );
