# RapidNode

> ⚡ Instant cross-platform Node.js backend structure generator

Scaffold a production-ready Node.js backend project in seconds. RapidNode automates project initialization with pre-configured folder structures, dependency installation, and customizable templates.

## Features

- **Instant Setup** - Create a complete Node.js backend in one command
- **Automatic Dependencies** - Install production and dev dependencies interactively
- **Template-Based** - Use YAML templates to define custom project structures
- **Cross-Platform** - Works seamlessly on Windows, macOS, and Linux
- **Interactive CLI** - User-friendly prompts with inquirer
- **Professional Structure** - MVC-ready folder hierarchy included

## Installation

Use with `npx`:

```bash
npx @jeroomew/rapidnode <project-name>
```

Or with `pnpm dlx`:

```bash
pnpm dlx @jeroomew/rapidnode <project-name>
```


## Usage

**Example:**

```bash
rapidnode ecommerce-api
# Project: ecommerce-api
# ✅ Folder created
# ✅ npm initialized
# ✅ Dependencies installed
# ✅ Template applied
```

### Interactive Prompts

The CLI will ask:

```
Step 1/3: dependency setup
Enter the dependencies to install (leave blank to skip).
? Which production packages would you like to install (separated by space): 
express cors dotenv mongoose

? Which development packages would you like to install (separated by space): 
nodemon

Step 2/3: creating project
...

Step 3/3: done
? Select a template:
  default-template.yaml
```

## Templates

Templates are YAML files that define your project structure. They must be located in `src/templates/`.

### Template Format

```yaml
structure:
  src:
    config:
      db.js: ""
    controllers:
      user.controller.js: ""
    routes:
      user.routes.js: ""
    index.js: ""
  tests: {}
  .env: ""
  README.md: ""
```

### Key Rules

- **Nested objects** = folders (with a trailing `{}` = empty folder)
- **String values** = files (created empty)
- **Arrays** = list of files to create

### Default Template

The included `default-template.yaml` scaffolds an MVC-style backend:

```yaml
structure:
  src:
    config:
      db.js: ""          # Database connections (Mongoose, PostgreSQL, etc.)
      redis.js: ""       # Caching layer configurations (Optional but standard)
    models:              # The "M" in MVC (Data schemas, validation blueprints)
      user.model.js: ""
      post.model.js: ""
    controllers:         # The "C" in MVC (Handles requests, interacts with models)
      user.controller.js: ""
      auth.controller.js: ""
    routes:              # Express route definitions pointing to controllers
      auth.routes.js: ""
      user.routes.js: ""
      index.routes.js: "" # Master router aggregator
    middlewares:         # Security guards, request filtering, error interception
      auth.middleware.js: ""
      error.middleware.js: ""
      rateLimiter.js: ""
    utils:               # Helper methods (Hashing tokens, custom formatters)
      helpers.js: ""
    index.js: ""         # Server ignition point (App listening, global plugins)
  tests: {}              # Backend unit and integration test workspace
  .gitignore: ""
  .env: ""
  README.md: ""
```



## API

### Command Line

```bash
rapidnode <project-name>
```

## Requirements

- **Node.js** 14.0.0 or higher
- **npm** 6.0.0 or higher

## Dependencies

- **inquirer** - Interactive command-line prompts
- **yaml** - YAML parsing and stringification

## Creating Custom Templates

1. Create a new YAML file in `src/templates/`:

```yaml
# src/templates/microservice.yaml
structure:
  src:
    handlers:
      handler.js: ""
    schemas:
      validation.js: ""
    middleware:
      auth.js: ""
    app.js: ""
  dist: {}
  .dockerignore: ""
  Dockerfile: ""
```

2. Run `rapidnode your-service` and select your template

## Examples

### Express + MongoDB Setup

```bash
$ rapidnode blog-api
? Production packages: express mongoose cors dotenv
? Dev packages: nodemon
? Select template: default-template.yaml
```

Creates:
- `src/` with MVC structure
- `package.json` with Express & Mongoose
- `node_modules/` with all dependencies installed
- Ready-to-code backend!

### Microservice Template

```bash
$ rapidnode payment-service
? Production packages: express
? Dev packages: jest
? Select template: microservice.yaml
```

## Troubleshooting

**Dependencies not installed**

Ensure you have npm 6+ and Node 14+:
```bash
node --version
npm --version
```

## Contributing

Contributions are welcome! Please submit a PR or open an issue.

## License

MIT © Jerome Mondol

## Author

**Jerome Mondol**

