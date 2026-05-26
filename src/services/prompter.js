// src/services/prompter.js
import inquirer from 'inquirer';

export const askProjectConfiguration = async () => {
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

export const askTemplate = async (allTemplates) => {
  const answer = await inquirer.prompt([
    {
      type: 'select',
      name: 'selectedTemplate',
      message: '🧩 Select a backend architecture template',
      choices: allTemplates.map((template) => ({
        name: template.split('.')[0],
        value: template,
      }))
    }
  ])

  return answer;

}