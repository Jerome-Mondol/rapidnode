# Architecture & Templates

## Requirements

- **Node.js** 14.0.0 or higher
- **npm** 6.0.0 or higher

Check your versions:

```bash
node --version
npm --version
```

## Dependencies

RapidNode uses the following packages:

- **inquirer** - Interactive command-line prompts
- **yaml** - YAML parsing

## How Scaffolding Works

1. Creates a folder for the project and runs `npm init -y`
2. Installs production and dev dependencies if provided
3. Builds a project structure from a YAML template
4. Optional Git setup (init, commit, branch, remote, push)

## Understanding Templates

Templates are YAML files that define your project structure. They're located in the `src/templates/` directory.

### Template Format

```yaml
structure:
  src:
    config:
      db.js: ""
    routes:
      user.routes.js: ""
    index.js: ""
  tests: {}
  .gitignore: |
    node_modules/
    .env
  .env: ""
  README.md: ""
```

### Key Rules

- **Nested objects** = folders (with a trailing `{}` = empty folder)
- **String values** = file content written to disk
- **Arrays** = list of files to create (empty files)

## Available Templates

### 1. Clean Architecture

```
src/
  config/
    database.js
    logger.js
    env.js
  modules/
    users/
      domain/
      application/
      infrastructure/
  shared/
    middlewares/
    utils/
  index.js
tests/
  unit/
  integration/
```

**Best for:** Layered backends with clear domain boundaries

### 2. CQRS Pattern

```
src/
  config/
    db.js
  domain/
    entities/
  features/
    orders/
      commands/
      queries/
      handlers/
      controllers/
      routes.js
  shared/
    bus.js
  index.js
```

**Best for:** Command/query separation with explicit handlers

### 3. Event-Driven

```
src/
  config/
    broker.js
    db.js
  events/
    schemas/
  publishers/
  subscribers/
  services/
  index.js
Dockerfile
.dockerignore
```

**Best for:** Pub/sub systems and async workflows

### 4. Serverless/FaaS

```
src/
  functions/
    auth/
      login/
      register/
    users/
      getProfile/
      updateProfile/
  shared/
    db.js
    response.js
    middleware.js
serverless.yml
```

**Best for:** Serverless deployments and function-based APIs

### 5. Service Route Schema

```
src/
  routes/
  schemas/
  services/
  plugins/
  app.js
  server.js
```

**Best for:** REST APIs with explicit routing and schemas

### 6. Vertical Slice

```
src/
  config/
    db.js
  features/
    auth/
    posts/
  shared/
    middlewares/
    utils/
  index.js
```

**Best for:** Feature-driven teams and modular delivery

## Creating Custom Templates

1. Create a new YAML file in `src/templates/`
2. Define your structure following the format above
3. Run the CLI and select your custom template

## Best Practices

- **Choose based on scale**: Small projects → Vertical Slice or Service Route
- **Team size matters**: Larger teams → Clean Architecture or Vertical Slice
- **Consider growth**: Start simple, evolve with templates
- **Customize templates**: Tailor to your specific needs and patterns
