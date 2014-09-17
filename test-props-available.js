var assert = require('assert');
String.prototype.red = "a";
var testString = "test string";

var colors =['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
var cynwrig = require('./cynwrig.js');

function testTextColor(color, str){
  var string = '\x1B[3' + colors.indexOf(color) + 'm' + testString + '\x1B[39m';
  assert.equal(str,string);
}

testTextColor('white', testString.white);
testTextColor('blue', testString.blue);
testTextColor('red', testString.red);
assert.throws(function(){testString.red()});
assert.doesNotThrow(function(){
    cynwrig.colorMyConsole();

    console.warn("warn");
    console.info('info');
    console.error('error');
});
