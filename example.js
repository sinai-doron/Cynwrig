var cynwrig = require('./cynwrig.js');

cynwrig.startDebug();
cynwrig.testCynwrig();
cynwrig.seeAllColors();
console.log("Test test test".textColor(208));
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
