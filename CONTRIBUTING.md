# Contributing to RapidNode

Thank you for considering contributing to RapidNode! We welcome contributions of all kinds.

## Ways to Contribute

- 🐛 **Report bugs** - Found an issue? Let us know
- ✨ **Suggest features** - Have an idea? We'd love to hear it
- 📝 **Improve docs** - Help make documentation clearer
- 🎨 **Add templates** - Create and share new architecture templates
- 💻 **Fix code** - Submit pull requests with improvements

## Getting Started

### Fork & Clone

```bash
git clone https://github.com/jeroomew/rapidnode.git
cd rapidnode
```

### Install Dependencies

```bash
npm install
```

### Project Structure

```
rapidnode/
├── bin/                    # CLI entry point
├── src/
│   ├── index.js           # Main scaffolder logic
│   ├── services/          # Core services
│   │   ├── disk.js        # File system operations
│   │   ├── folder-builder.js  # Template building
│   │   ├── prompter.js    # User prompts
│   │   ├── template.js    # Template utilities
│   │   └── logger.js      # Logging utilities
│   └── templates/         # YAML architecture templates
├── docs/                  # Documentation
└── README.md              # Main documentation
```

## Adding a New Template

1. Create a new YAML file in `src/templates/`
2. Follow the structure format documented in [ARCHITECTURE.md](./docs/ARCHITECTURE.md)
3. Test it locally by running the CLI: `node bin/cli.js test-project`
4. Submit a pull request

### Template Checklist

- [ ] Valid YAML syntax
- [ ] Clear folder structure
- [ ] Appropriate file organization
- [ ] Follows naming conventions
- [ ] Tested and working

## Making Changes

1. Create a branch for your feature: `git checkout -b feature/your-feature`
2. Make your changes
3. Test the CLI: `node bin/cli.js test-project`
4. Commit with clear messages: `git commit -m "Add: feature description"`
5. Push to your fork and create a Pull Request

## Code Style

- Use meaningful variable names
- Add comments for complex logic
- Keep functions focused and small
- Use the custom `log` utility for console output

### Example:

```javascript
// ✅ Good
import { log } from './services/logger.js';

log.info('Starting process...');
log.success('Process completed!');

// ❌ Avoid
console.log('process');
```

## Reporting Bugs

When reporting bugs, include:

- What version of RapidNode you're using
- Your operating system (Windows, macOS, Linux)
- Steps to reproduce the issue
- Expected vs actual behavior
- Any error messages or logs

## Troubleshooting

### Dependencies not installed

Ensure you have npm 6+ and Node 14+:

```bash
node --version
npm --version
```

If versions are correct but dependencies still don't install:

1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules/`: `rm -rf node_modules`
3. Reinstall: `npm install`

### Template not showing up

- Verify the YAML file is in `src/templates/`
- Check YAML syntax (use a validator if unsure)
- Ensure the file ends with `.yaml`
- Restart the CLI if you added a new template

### Project creation fails

Check that:

- You have write permissions in the target directory
- Node.js and npm are properly installed
- Disk space is available
- You're not using special characters in the project name

## Pull Request Process

1. Ensure your code follows the project style
2. Update documentation if needed
3. Test thoroughly before submitting
4. Write a clear PR description
5. Link any related issues

## Questions?

Open an issue on GitHub or reach out to the maintainers.

---

**Thank you for contributing to RapidNode! 🚀**
