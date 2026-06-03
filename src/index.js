import process from 'process'
import { createNewProject } from './services/disk.js';
import { askProjectConfiguration, askTemplate } from './services/prompter.js';
import { getAllTemplates } from './services/template.js';
import { buildTemplate } from './services/folder-builder.js';
import { log } from './services/logger.js';
import { initialzeGit } from './services/git.js';

const targetDir = process.cwd();


export const runScaffolder = async (projectName) => {
    // // get dependencies to install
    // log.step(1, 3, 'dependency setup');
    // log.info('Enter the dependencies to install (leave blank to skip).');

    // const { prodDependencies, devDependencies } = await askProjectConfiguration();
    // const prodDependenciesArr = prodDependencies.trim().split(/\s+/);
    // const devDependenciesArr = devDependencies.trim().split(/\s+/);

    // // create new project 
    // log.step(2, 3, 'creating project');
    // const newProject = createNewProject(targetDir, projectName, prodDependenciesArr, devDependenciesArr);
    // log.success('project created');

    // // ask to select template
    // log.step(3, 4, 'template selection');
    // const templateChoice = await askTemplate(getAllTemplates());
    // // build the project 

    // log.step(4, 4, 'building the project')
    // buildTemplate(templateChoice);
    // log.success('scaffold complete!');

    // log.step(5, 5, 'setting up git');


    const pipeline = [
        // {
        //     name: 'dependency setup',
        //     fn: async (ctx) => {
        //         log.info('Enter the dependencies to install (leave blank to skip).');
        //         const { prodDependencies, devDependencies } = await askProjectConfiguration();
        //         ctx.prodDeps = prodDependencies.trim().split(/\s+/);
        //         ctx.devDeps = devDependencies.trim().split(/\s+/);
        //     }
        // },
        // {
        //     name: 'creating project',
        //     fn: async (ctx) => {
        //         createNewProject(targetDir, projectName, ctx.prodDeps, ctx.devDeps);
        //         log.success('project created');
        //     }
        // },
        // {
        //     name: 'template selection',
        //     fn: async (ctx) => {
        //         ctx.templateChoice = await askTemplate(getAllTemplates());
        //     }
        // },
        // {
        //     name: 'building the project',
        //     fn: async (ctx) => {
        //         buildTemplate(ctx.templateChoice);
        //         log.success('scaffold complete!');
        //     }
        // },
        {
            name: 'would you like to intialize git',
            fn: async (ctx) => {
                await initialzeGit();
            }
        }
    ];




    const context = {};
    const totalSteps = pipeline.length;

    for(let i = 0; i < totalSteps; i++) {
        const step = pipeline[i];
        const currentStep = i + 1;

        log.step(currentStep, totalSteps, step.name);
        await step.fn(context);
    }
}





