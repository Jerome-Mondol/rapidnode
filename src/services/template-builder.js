import fs from 'fs'
import path from 'path'
import YAML from 'yaml'; 

const templatesDirPath = path.join(import.meta.dirname, '..', 'templates');
const templates = fs.readdirSync(templatesDirPath);


templates.forEach(file => {
    let filePath;
    filePath = path.join(templatesDirPath, file);    

    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(YAML.parse(fileContent));
})