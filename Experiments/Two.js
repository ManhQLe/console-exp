const chalk = require('chalk');
const log = console.log
console.log(chalk.blue("Hello World"));

log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

log(chalk.bgHex('#808080')("test"))