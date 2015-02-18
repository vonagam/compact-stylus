# compact-stylus

## Installation

Just import 'index.styl' in your stylus file.

## Usage

<-
~~~stylus
@import 'compact-stylus'

.without_meaning
  mar x aut t 5
  pos rel t 1 z 2
  txt siz 16 fnt 'OpenSans' wei 9 ali cen clr black
  tra opa 1 e-in-out 3
~~~

->
~~~css
.without_meaning {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  position: relative;
  top: 1px;
  z-index: 2;
  font-size: 12px;
  font-family: 'OpenSans';
  text-align: center;
  color: black;
  transition: opacity 1s ease-in-out 3s;
}
~~~

For a full dictionary, for now, see 'lib/js/dictionaries/properties.js' 
