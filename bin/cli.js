#!/usr/bin/env node

import process from 'process';
import { runScaffolder } from '../src/index.js';

// Captures the folder name parameter (e.g., npx brikz my-app)
const projectName = process.argv[2];

if (!projectName) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Error: Please specify a project directory name.');
  console.log('\nUsage:\n  npx brikz <project-name>\n');
  process.exit(1);
}

console.log('\x1b[36m%s\x1b[0m', '>>> Rapidnode starting...');
console.log(`Project: ${projectName}`);

// Pass control to the file generator
runScaffolder(projectName);