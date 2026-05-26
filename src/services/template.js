import fs from 'fs'
import path from 'path'
import YAML from 'yaml'; 

const templatesDirPath = path.join(import.meta.dirname, '..', 'templates');


export const parseYAMLToJs = (fileContent) => {
    const parsedYAML = YAML.parse(fileContent);
    return parsedYAML;
}

export const generateTemplatePath = (templateName) => {
    return path.join(templatesDirPath, templateName);
} 

export const readYamlFile = (templatePath) => {
    return fs.readFileSync(templatePath, 'utf8');
}

export const checkIfFileIsYAML = (file) => {
    console.log(file)
    return (file.selectedTemplate.endsWith('.yaml') || file.selectedTemplate.endsWith('.yml')) ? true : false;
}

export const getAllTemplates = () => {
    const templates = fs.readdirSync(templatesDirPath);

    return templates;
}


