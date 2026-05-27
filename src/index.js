import process from 'process'
import { createNewProject } from './services/disk.js';
import { askProjectConfiguration, askTemplate } from './services/prompter.js';
import { getAllTemplates } from './services/template.js';
import { buildTemplate } from './services/folder-builder.js';
import { log } from './services/logger.js';

const targetDir = process.cwd();


export const runScaffolder = async (projectName) => {
    // get dependencies to install
    log.step(1, 3, 'dependency setup');
    log.info('Enter the dependencies to install (leave blank to skip).');

    const { prodDependencies, devDependencies } = await askProjectConfiguration();
    const prodDependenciesArr = prodDependencies.trim().split(/\s+/);
    const devDependenciesArr = devDependencies.trim().split(/\s+/);

    // create new project 
    log.step(2, 3, 'creating project');
    const newProject = createNewProject(targetDir, projectName, prodDependenciesArr, devDependenciesArr);
    log.success('project created');

    // ask to select template
    log.step(3, 4, 'template selection');
    const templateChoice = await askTemplate(getAllTemplates());
    // build the project 

    log.step(4, 4, 'building the project')
    buildTemplate(templateChoice);
    log.success('scaffold complete!');
}

