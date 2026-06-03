import { log } from "./logger.js";
import { askForGit } from "./prompter.js";

export const initialzeGit = async () => {
    let gitInitializerPermission = (await askForGit()).gitSetup.toLowerCase();

    if(gitInitializerPermission === 'n') {
        log.error('Quitting git setup');
        return;
    }

    else {
        log.success('test')
    }
}


