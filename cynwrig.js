/************************************
     Cynwrig

     Colors for npm console

************************************/
function cynwrigLog(str){
  if (isDebugMode){
    console.log(str);
  }
}

var isNode = false, isTty =false, isDebugMode = false, hasConsoles = false;
var isWindows = (process.platform.indexOf('win32') > -1) || (process.platform.indexOf('win64') > -1);
var oldConsoleWarn, oldConsoleError, oldConsoleInfo;
if(console && console.warn && console.info && console.error){
  oldConsoleWarn = console.warn;
  oldConsoleError = console.error;
  oldConsoleInfo = console.info;
  hasConsoles = true;
}


//Select Graphic Rendition - http://en.wikipedia.org/wiki/ANSI_escape_code
//blink is not supported in some Terminals
var sgr = [
  'bold', 'italic', 'underline', 'blinkSlow', 'blinkRapid', 'inverse', 'crossout',
  //Foreground color
  'black','red','green','yellow','blue','magenta','cyan','white',
  //Background color
  'blackBG','redBG','greenBG','yellowBG','blueBG','magentaBG','cyanBG','whiteBG'
];

var styles = {
  'bold'       : [1 , 22],
  'italic'     : [3, 23],
  'underline'  : [4, 24],
  'blinkSlow'  : [5, 25],
  'blinkRapid' : [6, 25],
  'inverse'    : [7, 27],
  'crossout'   : [9, 29],
  //Foreground color
  'black'      : [30, 39],
  'red'        : [31, 39],
  'green'      : [32, 39],
  'yellow'     : [33, 39],
  'blue'       : [34, 39],
  'magenta'    : [35, 39],
  'cyan'       : [36, 39],
  'white'      : [37, 39],
  //Background color
  'blackBG'    : [40, 49],
  'redBG'      : [41, 49],
  'greenBG'    : [42, 49],
  'yellowBG'   : [43, 49],
  'blueBG'     : [44, 49],
  'magentaBG'  : [45, 49],
  'cyanBG'     : [46, 49],
  'whiteBG'    : [47, 49]
}

if(typeof process !== "undefined" && process.env){
  isNode = true; // we are probably on a node env
}

//make sure we are on a supported terminal in node
if (isNode){
    isTty = require("tty").isatty(process.stdout);
}

//add the property to be used with the String object
function addProperty(prop, func){
  Object.defineProperty(String.prototype, prop, {
    enumerable: true,
    configurable: false,
    get: func
  });
}


  for (var index = 0; index < sgr.length; index++){
    var color = sgr[index];
    (function(color){
      addProperty(sgr[index], function(){
        return '\x1B[' +styles[color][0] + 'm' + this + '\x1B[' +styles[color][1] + 'm';
      });
    })(color);
  }

/*
//if cynwrig prefered as method and not proprties un mark this and mark the block above
  for (var index = 0; index < sgr.length; index++){
    var color = sgr[index];
    (function(color){
      addProperty(sgr[index], function(){
        return function() {
          return '\x1B[' +styles[color][0] + 'm' + this + '\x1B[' +styles[color][1] + 'm';
        }
      });
    })(color);
  }
*/

addProperty('textColor', function(){
  return function(color){
    if((color !== null) && (!isNaN(color))){
      if((color >= 0) && (color <= 255)){
        if(isWindows){
          return '\x1B[38;5;' + color + ';49m' + this + '\x1B[39m';  
        }
        return '\x1B[38;5;' + color + 'm' + this + '\x1B[39m';
      }
    }
    return '' + this;
  }
});

addProperty('textBGColor', function(){
  return function(color){
    if(color && (color !== null) && (!isNaN(color))){
      if((color >= 0) && (color <= 255)){
        return '\x1B[48;5;' + color + 'm' + this + '\x1B[49m';
      }
    }
    return '' + this;
  }
});

function colorMyConsole(){
    var infoColor = 39;
    var warnColor = 178;
    var errorColor = 196;
    if(isNode){
      if(hasConsoles){
          if(isWindows){
            infoColor = 94;
            warnColor = 93;
            errorColor = 91;
          }

        console.warn = function(str){
            var newString = str.textColor(warnColor);
            oldConsoleWarn(newString);
        }

        console.error = function(str){
            var newString = str.textColor(errorColor);
            oldConsoleError(newString);
        }

        console.info = function(str){
            var newString = str.textColor(infoColor);
            oldConsoleInfo(newString);
        }
      }
    }
}

function dontColorMyConsole(){
  if(hasConsoles){
    console.warn = oldConsoleWarn;
    console.info = oldConsoleInfo;
    console.error = oldConsoleError;
  }
}

//export Cynwrig
if (isNode){
  module.exports = {
	   'startDebug': function(){
       isDebugMode = true;
     },
     'stopDebug': function(){
        isDebugMode = false;
     },
     'testCynwrig': function(){
        console.log('Hello, my name is Cynwrig'.textColor(208).textBGColor(237));
     },
     'seeAllColors': function(){
       for(var i=0; i < 256; i++){
         console.log(('color #' + i).textColor(i));
       }
     },
     'colorMyConsole': colorMyConsole,
     'unColorMyConsole' : dontColorMyConsole
  }
}


//TODO: write to chrome console in colors?
//TODO: rainbow?
//TODO: release to npm repo
