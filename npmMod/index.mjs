import chalk from 'chalk';
import validator  from "validator";
 
const result = validator.isEmail("arun@1199.com")

const log = console.log;

log(result ? chalk.green.inverse(result): chalk.red.inverse(result));

//console.log(chalk.red('Hello world!'));
// log(chalk.blue.bgRed.bold('Hello world!'));
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') + ' that becomes green again!'));

// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);