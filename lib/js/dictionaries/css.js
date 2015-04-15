var createAliases = require( './create_aliases' );

var properties = module.exports = {

  'content': { t: 'p' },

  'opacity': { t: 'u', u: '' },

  'vertical-align': { t: 'v', v: [ 'top', 'bottom', 'baseline', 'middle' ] },

  'display': { t: 'v', v: [ 'block', 'inline', 'inline-block', 'table', 'flex', 'inline-flex' ] },

  'visibility': { t: 'v', v: createAliases( [ [ 'visible', 'yes' ], [ 'hidden', 'no' ] ] ) },

  'cursor': { t: 'v', v: [ 'default', 'text', 'pointer' ] },

  'box-sizing': { t: 'v', v: createAliases( [ [ 'content-box', 'content' ], [ 'padding-box', 'padding' ], [ 'border-box', 'border' ] ] ) },

  'box-shadow': { t: 'm', v: [ 'inset' ] },

  'overflow': { t: 'v', v: [ 'visible', 'hidden', 'scroll' ] },

  'transition': { t: 'i', i: [ 'transition-property', 'transition-duration', 'transition-timing-function', 'transition-delay' ] },
  'transition-property': { t: 'v' },
  'transition-duration': { t: 'u', u: 's' },
  'transition-timing-function': { t: 'v', v: [ 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end' ] },
  'transition-delay': { t: 'u', u: 's' },

  'animation': {
    t: 'i', 
    i: [ 
      'animation-name', 'animation-duration', 'animation-timing-function', 'animation-delay', 
      'animation-iteration-count', 'animation-direction', 'animation-fill-mode', 'animation-play-state'
    ],
    u: 's'
  },
  'animation-name': { t: 'p' },
  'animation-duration': { t: 'u', u: 's' },
  'animation-timing-function': { t: 'v', v: [ 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end' ] },
  'animation-delay': { t: 'u', u: 's' },
  'animation-iteration-count': { t: 'm', v: [ 'infinite' ], u: '' },
  'animation-direction': { t: 'v', v: [ 'alternate' ] },
  'animation-fill-mode': { t: 'v', v: [ 'forwards', 'backwards', 'both' ] },
  'animation-play-state': { t: 'v', v: [ 'running', 'paused' ] },

  'background': { t: 'i', i: [ 'background-attachment', 'background-color', 'background-image', 'background-position', 'background-repeat' ] },
  'background-image': { t: 'p' },
  'background-color': { t: 'c' },
  'background-size': { t: 'm', v: [ 'cover', 'contain' ] },
  'background-position': { t: 'm', v: [ 'top', 'bottom', 'left', 'right', 'center' ] },
  'background-repeat': { t: 'v', v: createAliases( [ [ 'repeat', 'repeat-xy', 'xy', 'repeat-yes', 'yes' ], [ 'no-repeat', 'repeat-no', 'no' ], [ 'repeat-x', 'x' ], [ 'repeat-y', 'y' ] ] ) },
  'background-attachment': { t: 'v', v: [ 'fixed', 'scroll' ] },

  'outline': { t: 'i', i: [ 'outline-width', 'outline-style', 'outline-color' ] },
  'outline-width': { t: 'u' },
  'outline-style': { t: 'v', v: [ 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' ] },
  'outline-color': { t: 'c' },
  'outline-offset': { t: 'u' },

  'position': { t: 'v', v: [ 'absolute', 'relative', 'fixed', 'static' ] },
  'top': { t: 'u' },
  'bottom': { t: 'u' },
  'left': { t: 'u' },
  'right': { t: 'u' },
  'z-index': { t: 'u', u: '' },

  'font-size': { t: 'u' },
  'font-family': { t: 'p' },
  'font-style': { t: 'v', v: [ 'italic' ] },
  'font-weight': { t: 'm', v: [ 'bold' ], u: '00' },
  'line-height px': { t: 'u' },
  'line-height ml': { t: 'u', u: '' },
  'color': { t: 'c' },
  'text-align': { t: 'v', v: [ 'left', 'right', 'center', 'justify' ] },
  'text-decoration': { t: 'v', v: [ 'line-through', 'overline', 'underline' ] },
  'text-transform': { t: 'v', v: [ 'capitalize', 'lowercase', 'uppercase' ] },
  'text-shadow': { t: 'm' },
  'word-spacing': { t: 'u' },

  'height': { t: 'u' },
  'min-height': { t: 'u' },
  'max-height': { t: 'u' },

  'width': { t: 'u' },
  'min-width': { t: 'u' },
  'max-width': { t: 'u' },

  'flex': { t: 'i', i: [ 'flex-grow', 'flex-shrik', 'flex-basis' ] },
  'flex-grow': { t: 'u', u: '' },
  'flex-shrik': { t: 'u', u: '' },
  'flex-basis': { t: 'u' },
  'flex-direction': { t: 'v', v: [ 'row', 'row-reverse', 'column', 'column-reverse' ] },
  'flex-wrap': { t: 'v', v: createAliases( [ [ 'nowrap', 'no', 'wrap-no' ], [ 'wrap', 'yes', 'wrap-yes' ], 'wrap-reverse' ] ) },
  'order': { t: 'u', u: '' },

  'border-collapse': { t: 'v', v: createAliases( [ [ 'collapse', 'yes' ], [ 'separate', 'no' ] ] ) },
  'border-spacing': { t: 'u' },

  'border': { t: 'border', i: [ 'border-width', 'border-style', 'border-color' ] },
  'border-width': { t: 'u' },
  'border-style': { t: 'v', v: [ 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' ] },
  'border-color': { t: 'c' },
  'border-radius': { t: 'u' },

  'margin': { t: 'mar_pad' },
  'padding': { t: 'mar_pad' }

};
