import process from 'process'
import { createNewProject } from './services/disk.js';
import { askProjectConfiguration, askTemplate } from './services/prompter.js';
import { getAllTemplates } from './services/template-builder.js';

const targetDir = process.cwd();


export const runScaffolder = async (projectName) => {
    // get dependencies to install
    console.log('\x1b[35m%s\x1b[0m', 'Step 1/3: dependency setup');
    console.log('Enter the dependencies to install (leave blank to skip).')
    const { prodDependencies, devDependencies } = await askProjectConfiguration();
    const prodDependenciesArr = prodDependencies.trim().split(/\s+/);
    const devDependenciesArr = devDependencies.trim().split(/\s+/);


    // create new project 
    console.log('\x1b[35m%s\x1b[0m', 'Step 2/3: creating project');
    const newProject = createNewProject(targetDir, projectName, prodDependenciesArr, devDependenciesArr);
    console.log('\x1b[32m%s\x1b[0m', 'Step 3/3: done');

    // ask to select template
    const templateChoice = await askTemplate(getAllTemplates());

}


