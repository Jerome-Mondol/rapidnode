import fs from 'fs'
import path from 'path'
import process from 'process'
import { checkIfFileIsYAML, generateTemplatePath, parseYAMLToJs, readYamlFile } from "./template.js";
import { log } from './logger.js';

export const buildTemplate = (template) => {        
    const { selectedTemplate } = template; 
    try {
        if(!checkIfFileIsYAML(template)) {
            log.error('Invalid file type');
            return
        };

        const templatePath = generateTemplatePath(selectedTemplate);
        const yamlFileContent = readYamlFile(templatePath);
        const parsedYamlContent = parseYAMLToJs(yamlFileContent);
        const targetDir = process.cwd();

        if (!parsedYamlContent || !parsedYamlContent.structure) {
            log.error("Template is missing a 'structure' root node.");
            return
        }

        log.info(`Building project structure from: ${selectedTemplate}`);
        log.newline();

        const createNodes = (currentFolder, structureData) => {
            if (Array.isArray(structureData)) {
                structureData.forEach((fileName) => {
                    const filePath = path.join(currentFolder, fileName)
                    fs.mkdirSync(path.dirname(filePath), { recursive: true })
                    fs.writeFileSync(filePath, '', 'utf8')
                })
                return
            }

            for (const [key, value] of Object.entries(structureData)) {
                const nextPath = path.join(currentFolder, key)

                if (typeof value === 'object' && value !== null && Object.keys(value).length > 0) {
                    fs.mkdirSync(nextPath, { recursive: true })
                    createNodes(nextPath, value)
                } else if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) {
                    fs.mkdirSync(nextPath, { recursive: true })
                } else {
                    fs.mkdirSync(path.dirname(nextPath), { recursive: true })
                    fs.writeFileSync(nextPath, '', 'utf8')
                }
            }
        }

        createNodes(targetDir, parsedYamlContent.structure)
        log.newline();
        log.success('Template build complete.');
        
    } catch (err) {
        log.error(`There was an error creating the project: ${err.message}`);
    }

}