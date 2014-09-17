var cynwrig = require('./cynwrig.js');

console.log("hello".black);
console.log("hello".red);
console.log("hello".blue);
console.log("hello".magenta);
console.log("hello".cyan);
console.log("hello".white);
console.log("hello".green);
console.log("hello".yellow);

console.log("hello".blackBG);
console.log("hello".redBG);
console.log("hello".blueBG);
console.log("hello".magentaBG);
console.log("hello".cyanBG);
console.log("hello".whiteBG);
console.log("hello".greenBG);
console.log("hello".yellowBG);

console.log("hello".bold);
console.log("hello".italic);
console.log("hello".underline);
console.log("hello".blinkSlow);
console.log("hello".blinkRapid);
console.log("hello".inverse);
console.log("hello".crossout);
console.log("hello".bold);

console.log("red+blackBG".red.blackBG);
console.log("hello".redBG.green);
console.log("hello".blueBG.yellow);
console.log("hello".magentaBG.red);
console.log("hello".whiteBG.black);

console.error('error');
console.info('info');
console.warn('warn');
cynwrig.colorMyConsole();
console.error('error');
console.info('info');
console.warn('warn');
cynwrig.unColorMyConsole();
console.error('error');
console.info('info');
console.warn('warn');
