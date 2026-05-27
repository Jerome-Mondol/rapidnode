// ANSI color codes
const colors = {
  magenta: '\x1b[35m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

export const log = {
  step: (step, total, message) => {
    console.log(`${colors.magenta}${colors.bold}Step ${step}/${total}:${colors.reset} ${message}`);
  },
  success: (message) => {
    console.log(`${colors.green}✓${colors.reset} ${message}`);
  },
  error: (message) => {
    console.log(`${colors.red}✗${colors.reset} ${message}`);
  },
  info: (message) => {
    console.log(`${colors.cyan}ℹ${colors.reset} ${message}`);
  },
  warn: (message) => {
    console.log(`${colors.yellow}⚠${colors.reset} ${message}`);
  },
};
