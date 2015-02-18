var $specialBrd = require( '../specials/brd' );
var $specialMarPad = require( '../specials/mar_pad' );


module.exports = {

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
    pro: [ 'transition-property', false ],
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
    ___: [ 'outline' ],
    wid: [ 'outline-width' ],
    stl: [ 'outline-style', { dot: 'dotted', das: 'dashed', sld: 'solid', dbl: 'double', grv: 'groove', rdg: 'ridge', ins: 'inset', out: 'outset' } ],
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
    ___: [ $specialBrd, { dot: 'dotted', das: 'dashed', sld: 'solid', dbl: 'double', grv: 'groove', rdg: 'ridge', ins: 'inset', out: 'outset' } ],
    wid: [ 'border-width' ],
    stl: [ 'border-style', { dot: 'dotted', das: 'dashed', sld: 'solid', dbl: 'double', grv: 'groove', rdg: 'ridge', ins: 'inset', out: 'outset' } ],
    clr: [ 'border-color' ],
    rds: [ 'border-radius' ],
    w: [ 'border-width' ],
    c: [ 'border-color' ]
  },

  mar: [ $specialMarPad.bind( null, 'margin' ) ],
  pad: [ $specialMarPad.bind( null, 'padding' ) ]

}
