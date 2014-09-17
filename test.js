var assert = require('assert');
var cynwrig = require('./cynwrig.js');

var testString = "test string";
var colors =['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
var oldConsoleWarn, oldConsoleError, oldConsoleInfo;
if(console && console.warn && console.info && console.error){
  oldConsoleWarn = console.warn;
  oldConsoleError = console.error;
  oldConsoleInfo = console.info;
  hasConsoles = true;
}

function testTextColor(color, str){
  var string = '\x1B[3' + colors.indexOf(color) + 'm' + testString + '\x1B[39m';
  assert.equal(str,string);
}

testTextColor('white', testString.white);
testTextColor('blue', testString.blue);
testTextColor('red', testString.red);

assert.equal('Hello, my name is Cynwrig'.textColor(208).textBGColor(237), "\x1B[48;5;237m\x1B[38;5;208mHello, my name is Cynwrig\x1B[39m\x1B[49m");
assert.equal('\x1B[40m' + testString + '\x1B[49m', testString.blackBG);
assert.equal('\x1B[45m' + testString + '\x1B[49m', testString.magentaBG);

if(console && console.warn && console.info && console.error){
  cynwrig.colorMyConsole();
  cynwrig.unColorMyConsole();
  assert.equal(console.warn, oldConsoleWarn);
  assert.equal(console.info, oldConsoleInfo);
}
