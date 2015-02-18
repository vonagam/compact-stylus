var $specialBrd = require( '../specials/brd' );
var $specialMarPad = require( '../specials/mar_pad' );


var $border_styles = { dot: 'dotted', das: 'dashed', sld: 'solid', dbl: 'double', grv: 'groove', rdg: 'ridge', ins: 'inset', out: 'outset' }


var properties = {

  opa: [ 'opacity', false ],

  con: [ 'content', false ],

  ver: [ 'vertical-align', { t: 'top', b: 'bottom', bas: 'baseline', mid: 'middle' } ],

  dis: [ 'display', { blo: 'block', inl: 'inline', "inl-blo": 'inline-block', tbl: 'table', flx: 'flex', "inl-flx": 'inline-flex' } ],

  vis: [ 'visibility', { vis: 'visible', hid: 'hidden', yes: 'visible', no: 'hidden', non: 'hidden' } ],

  cur: [ 'cursor', { def: 'default', txt: 'text', pnt: 'pointer' } ],

  box: [ 'box-sizing', { con: 'content-box', pad: 'padding-box', brd: 'border-box' } ],

  sha: [ 'box-shadow', { ins: 'inset' } ],

  ovr: [ 'overflow', { vis: 'visible', hid: 'hidden', scr: 'scroll' } ],

  tra: {
    ___: [ 'transition', { e: 'ease', "e-in": 'ease-in', "e-out": 'ease-out', "e-in-out": 'ease-in-out', lin: 'linear', "s-sta": 'step-start', "s-end": 'step-end' }, 's' ],
    pro: [ 'transition-property', {} ],
    dur: [ 'transition-duration', 's' ],
    fun: [ 'transition-timing-function', { e: 'ease', "e-in": 'ease-in', "e-out": 'ease-out', "e-in-out": 'ease-in-out', lin: 'linear', "s-sta": 'step-start', "s-end": 'step-end' } ],
    del: [ 'transition-delay', 's' ]
  },

  bac: {
    ___: [ 'background' ],
    img: [ 'background-image' ], 
    clr: [ 'background-color' ],
    siz: [ 'background-size', { cvr: 'cover', con: 'contain' } ],
    pos: [ 'background-position', { t: 'top', b: 'bottom', l: 'left', r: 'right', cen: 'center' } ],
    rpt: [ 'background-repeat', { non: 'no-repeat', no: 'no-repeat', yes: 'repeat', xy: 'repeat', x: 'repeat-x', y: 'repeat-y' } ],
    att: [ 'background-attachment', { fix: 'fixed', src: 'scroll' } ],
    c: [ 'background-color' ],
    s: [ 'background-size', { cvr: 'cover', con: 'contain' } ],
    p: [ 'background-position', { t: 'top', b: 'bottom', l: 'left', r: 'right', cen: 'center' } ],
    r: [ 'background-repeat', { non: 'no-repeat', no: 'no-repeat', yes: 'repeat', xy: 'repeat', x: 'repeat-x', y: 'repeat-y' } ]
  },

  out: {
    ___: [ 'outline', $border_styles ],
    wid: [ 'outline-width' ],
    stl: [ 'outline-style', $border_styles ],
    clr: [ 'outline-color' ],
    off: [ 'outline-offset' ]
  },

  pos: {
    ___: [ 'position', { abs: 'absolute', rel: 'relative', fix: 'fixed', sta: 'static' } ],
    t: [ 'top' ],
    b: [ 'bottom' ],
    l: [ 'left' ],
    r: [ 'right' ],
    z: [ 'z-index', '' ]
  },

  txt: {
    siz: [ 'font-size' ],
    fnt: [ 'font-family' ],
    stl: [ 'font-style', { ita: 'italic' } ],
    wei: [ 'font-weight', { bld: 'bold' }, '00' ],
    hei: [ 'line-height' ],
    clr: [ 'color' ],
    ali: [ 'text-align', { l: 'left', r: 'right', cen: 'center', jus: 'justify' } ],
    pos: [ 'text-align', { l: 'left', r: 'right', cen: 'center', jus: 'justify' } ],
    dec: [ 'text-decoration', { thr: 'line-through', ove: 'overline', und: 'underline' } ],
    tra: [ 'text-transform', { cap: 'capitalize', low: 'lowercase', upp: 'uppercase' } ],
    sha: [ 'text-shadow' ],
    spa: [ 'word-spacing' ],
    s: [ 'font-size' ],
    f: [ 'font-family' ],
    w: [ 'font-weight', { bld: 'bold' }, '00' ],
    h: [ 'line-height' ],
    c: [ 'color' ],
    p: [ 'text-align', { l: 'left', r: 'right', cen: 'center', jus: 'justify' } ],
    lh: [ 'line-height', '' ]
  },

  hei: { 
    ___: [ 'height' ],
    max: [ 'max-height' ],
    min: [ 'min-height' ],
    txt: [ 'line-height' ]
  },
    
  wid: { 
    ___: [ 'width' ],
    max: [ 'max-width' ],
    min: [ 'min-width' ]
  },
    
  siz: { 
    hei: [ 'hei' ],
    wid: [ 'wid' ],
    h: [ 'hei' ],
    w: [ 'wid' ]
  },

  clr: {
    bac: [ 'background-color' ],
    txt: [ 'color' ],
    brd: [ 'border-color' ],
    out: [ 'outline-color' ]
  },

  flx: {
    ___: [ 'flex', '' ],
    grw: [ 'flex-grow', '' ],
    shr: [ 'flex-shrik', '' ],
    bss: [ 'flex-basis' ],
    dir: [ 'flex-direction', { row: 'row', "row-r": 'row-reverse', col: 'column', "col-r": 'column-reverse' } ],
    wrp: [ 'flex-wrap', { non: 'nowrap', no: 'nowrap', yes: 'wrap', rvr: 'wrap-reverse' } ],
    ord: [ 'order', '' ]
  },

  brd: {
    ___: [ $specialBrd, $border_styles ],
    wid: [ 'border-width' ],
    stl: [ 'border-style', $border_styles ],
    clr: [ 'border-color' ],
    rds: [ 'border-radius' ],
    w: [ 'border-width' ],
    c: [ 'border-color' ]
  },

  mar: [ $specialMarPad.bind( null, 'margin' ) ],
  pad: [ $specialMarPad.bind( null, 'padding' ) ]

};

( function () {

  var props = {};

  var specials = {

    brd: 'border',
    mar: 'margin',
    pad: 'padding'

  }

  for ( var short_name in properties ) {

    var prop = properties[ short_name ];

    if ( prop instanceof Array ) {

      var long_name = prop[ 0 ];

      if ( typeof long_name === 'function' ) long_name = specials[ short_name ];

      props[ short_name ] = long_name;

    } else {

      for ( var nested_short_name in prop ) {

        var nested_prop = prop[ nested_short_name ];

        var full_short_name = short_name;

        if ( nested_short_name !== '___' ) {

          full_short_name += '-' + nested_short_name;

        }

        var long_name = nested_prop[ 0 ];

        if ( typeof long_name === 'function' ) long_name = specials[ full_short_name ];

        props[ full_short_name ] = long_name;

      }

    }

  }

  console.log( props );

  [ '___', 'pro' ].forEach( function ( key ) {

    var merge_to = properties.tra[ key ][ 1 ];

    for ( var short_name in props ) {

      merge_to[ short_name ] = props[ short_name ];

    }

  } );

} )();

module.exports = properties;
