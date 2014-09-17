Cynwrig
=======

Adds color to the NPM console, Inspired by colors.js

for mac and linux terminals

## Installation

```node
npm install cynwrig
```


## Usage
Cynwrig adds color method to the String prototype so for every string you can do:
```js
var myString = "Hello world";
console.log(myString.red());
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
console.log(myString.red().blueBG());
```
## Available properties in String
  'bold' -        
  'italic'     
  'underline'  
  'blinkSlow' - Not supported wildly
  'blinkRapid' - Not supported wildly
  'inverse'   
  'crossout' - Not supported wildly
  //Foreground color
  'black'    
  'red'      
  'green'    
  'yellow'   
  'blue'     
  'magenta'  
  'cyan'     
  'white'    
  //Background color
  'blackBG'  
  'redBG'    
  'greenBG'  
  'yellowBG' 
  'blueBG'   
  'magentaBG'
  'cyanBG'
  'whiteBG'
