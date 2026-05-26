import fs from 'fs'
import path from 'path'
import process from 'process'
import { execSync } from 'child_process'


export const createNewProject = (dirPath, dirName, prodDependenciesArr, devDependenciesArr) => {
    const projectPath = path.join(dirPath, dirName)

    console.log(`Creating folder: ${projectPath}`)
    fs.mkdirSync(projectPath, { recursive: false })
    process.chdir(projectPath)

    console.log('Initializing npm project...')
    execSync('npm init -y', { stdio: 'inherit' })

    const prodDeps = (prodDependenciesArr || []).filter((dep) => dep && dep.trim())
    const devDeps = (devDependenciesArr || []).filter((dep) => dep && dep.trim())

    if (prodDeps.length > 0) {
        console.log(`Installing production deps: ${prodDeps.join(' ')}`)
        execSync(`npm install ${prodDeps.join(' ')}`, { stdio: 'inherit' })
    }

    if (devDeps.length > 0) {
        console.log(`Installing dev deps: ${devDeps.join(' ')}`)
        execSync(`npm install -D ${devDeps.join(' ')}`, { stdio: 'inherit' })
    }

    if (prodDeps.length === 0 && devDeps.length === 0) {
        console.log('No dependencies selected. Skipping install.')
    }

} 


