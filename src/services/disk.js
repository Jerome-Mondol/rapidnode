import fs from 'fs'
import path from 'path'
import process from 'process'
import { execSync } from 'child_process'
import { log } from './logger.js';


export const createNewProject = (dirPath, dirName, prodDependenciesArr, devDependenciesArr) => {
    const projectPath = path.join(dirPath, dirName)

    log.info(`Creating folder: ${projectPath}`);
    fs.mkdirSync(projectPath, { recursive: false })
    process.chdir(projectPath)

    log.info('Initializing npm project...');
    execSync('npm init -y --quiet')

    const prodDeps = (prodDependenciesArr || []).filter((dep) => dep && dep.trim())
    const devDeps = (devDependenciesArr || []).filter((dep) => dep && dep.trim())

    if (prodDeps.length > 0) {
        log.debug(`Installing production deps: ${prodDeps.join(' ')}`);
        execSync(`npm install ${prodDeps.join(' ')}`, { stdio: 'ignore' })
    }

    if (devDeps.length > 0) {
        log.debug(`Installing dev deps: ${devDeps.join(' ')}`);
        execSync(`npm install -D ${devDeps.join(' ')}`, { stdio: 'ignore' })
    }

    if (prodDeps.length === 0 && devDeps.length === 0) {
        log.warn('No dependencies selected. Skipping install.');
    }

} 


