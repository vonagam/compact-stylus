# compact-stylus

## Installation

Just import 'index.styl' in your stylus file.

## Example

<-
~~~stylus
@import 'compact-stylus'

.without_meaning
  wid 100% max 50
  mar x aut t 5
  pos rel t 1 z 2
  txt siz 16 fnt 'OpenSans' wei 9 ali cen clr black
  tra opa 1 e-in-out 3
~~~

->
~~~css
.without_meaning {
  width: 100%;
  max-width: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  position: relative;
  top: 1px;
  z-index: 2;
  font-size: 12px;
  font-family: 'OpenSans';
  font-weight: 900;
  text-align: center;
  color: black;
  transition: opacity 1s ease-in-out 3s;
}
~~~

## Usage

Let's say we want to say 'background-size: cover;'.  
For this we see the dictionary 'lib/js/dictionaries/compact.js'.  
We find that 'background-size' is associated with 'size' property in 'background'.  
It's not always so straightforward, for example,  
'font-size' is 'size' in 'text' or 'order' is 'order' in 'flex'.  
We apply the abbreviation rule described below to 'background', 'size' and 'cover'.  
And then by combining results we get 'bac siz cvr'.  

Let's do it again for 'color: inherited;'.  
'color' is 'color' in 'text', so we get 'text', 'color', 'inherited'.  
The result is 'txt clr inh'.  

### The Abbreviation Rule

Implementation is in 'lib/js/init/minify.js'.  

If string has length <= 3, then string won't need abbreviation.  
If string has the hyphen sign ('-') in it, then split the string by '-' and apply this rule to parts.  
If string has only 2 consonants except for a first letter,  
then the result will be the first letter and those two consonants,  
otherwise it will be first 3 letters.  

Examples:  
top -> top  
size -> siz  
font -> fnt  
display-block -> dis-blo  
