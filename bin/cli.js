#!/usr/bin/env node

import process from 'process';
import { runScaffolder } from '../src/index.js';
import { log } from '../src/services/logger.js';

// Captures the folder name parameter (e.g., npx brikz my-app)
const projectName = process.argv[2];

if (!projectName) {
  log.error('Please specify a project directory name.');
  log.newline();
  log.info('Usage: npx rapidnode <project-name>');
  log.newline();
  process.exit(1);
}

log.info('Rapidnode starting...');
log.info(`Project: ${projectName}`);
log.newline();

// Pass control to the file generator
runScaffolder(projectName);