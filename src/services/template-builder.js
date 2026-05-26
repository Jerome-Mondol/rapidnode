import fs from 'fs'
import path from 'path'
import YAML from 'yaml'; 

const templatesDirPath = path.join(import.meta.dirname, '..', 'templates');


const parseYAMLToJs = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedYAML = YAML.parse(fileContent);
    return parsedYAML;
}


export const getAllTemplates = () => {
    const templates = fs.readdirSync(templatesDirPath);

    return templates;
}
