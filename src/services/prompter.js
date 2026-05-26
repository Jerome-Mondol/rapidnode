// src/services/prompter.js
import inquirer from 'inquirer';

export async function askProjectConfiguration() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'prodDependencies',
      message: 'Which production packages would you like to install (separated by space): ',
    },
    {
      type: 'input',
      name: 'devDependencies',
      message: 'Which development packages would you like to install (separated by space): ',
    }
  ]);

  return answers;
}