Cynwrig
=======

Adds color to the NPM console, Inspired by colors.js

On mac terminals all colors are supported 0-255
On windows only the basic colors are supported in two sets of intensity:
for text color:
intense: 30-37
regular: 90-97

set background color by value is not supported currently on windows

## Installation

```node
npm install cynwrig
```


## Usage
Cynwrig adds color properties to the String prototype so for every string you can do:
```js
var myString = "Hello world";
console.log(myString.red);
```

and this will appear red in the console.

##Supported colors as methods
black
red
green
yellow
blue
magenta
cyan
white

to set those colors as background color ad BG to the color as
```js
var myString = "Hellow world"
console.log(myString.red.blueBG);
```
## Available properties in String
  'bold' - increase the weight of the font
  'italic'
  'underline'  
  'blinkSlow' - Not supported wildly
  'blinkRapid' - Not supported wildly
  'inverse'
  'crossout' - Not supported wildly

  //Foreground color -set text color
-  'black'
-  'red'
-  'green'
-  'yellow'
-  'blue'
-  'magenta'
-  'cyan'
-  'white'

  //Background color -set text background color
-  'blackBG'  
-  'redBG'
-  'greenBG'  
-  'yellowBG'
-  'blueBG'
-  'magentaBG'
-  'cyanBG'
-  'whiteBG'

  2 method added to string:

  textColor(value 0 - 255) - print the text in the given color value (see below for available colors)
  textBGColor(value 0 - 255) - same as above for background color - not supported in windows

## Other method available through cynwrig are
'seeAllColors' - will print all available colors and numbers that can be uses in textColor and textBGColor
'colorMyConsole' - will change the following methods to print in colors:
- console.warn - will print in yellow
- console.info - will print in blue
- console.error - will print in red

'unColorMyConsole' - will revert the function to the original functions
}
