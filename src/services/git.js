import { log } from "./logger.js";
import { askForGit, askForGitRepo } from "./prompter.js";
import { execSync } from 'child_process'




const runGit = (command) => execSync(command, { stdio: 'inherit' });

export const initialzeGit = async () => {


    while (true) {
        let gitInitializerPermission = (await askForGit()).gitSetup.toLowerCase();

        if (gitInitializerPermission === 'n') {
            log.error('Quitting git setup...');
            return;
        }

        else if (gitInitializerPermission === 'y') {
            const githubRepo = (await askForGitRepo()).githubRepo;

            log.success(githubRepo);
            runGit('git init');
            runGit('git add .');

            const status = execSync('git status --porcelain').toString().trim();
            if (status) {
                runGit('git commit -m "init: project init by rapidnode"');
            } else {
                log.info('No changes to commit, skipping initial commit.');
            }

            runGit('git branch -M main');
            runGit(`git remote add origin ${githubRepo}`);
            runGit('git push -u origin main');


            log.success('Git initialized and code push successful');
            return;
        }

        else {
            log.error('Please answer the question properly');
        }


    }
}


