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
- **yaml** - YAML parsing and stringification

## Understanding Templates

Templates are YAML files that define your project structure. They're located in the `src/templates/` directory.

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

## Available Templates

### 1. Clean Architecture

A layered architecture with clear separation of concerns:

```
src/
  entities/
  use_cases/
  interface_adapters/
  frameworks/
```

**Best for:** Large-scale applications with complex business logic

### 2. CQRS Pattern

Command Query Responsibility Segregation - separates read and write operations:

```
src/
  commands/
  queries/
  events/
  handlers/
```

**Best for:** Event-driven systems, complex workflows

### 3. Event-Driven

Publish-subscribe architecture for real-time systems:

```
src/
  events/
  subscribers/
  services/
  handlers/
```

**Best for:** Real-time apps, microservices, notification systems

### 4. Serverless/FaaS

Optimized for AWS Lambda, Google Cloud Functions, etc.:

```
src/
  functions/
  middleware/
  utils/
  config/
```

**Best for:** Serverless deployments, microservices

### 5. Vertical Slice

Feature-based organization where each feature contains all layers:

```
src/
  features/
    users/
      handlers/
      services/
      models/
    products/
      handlers/
      services/
      models/
```

**Best for:** Medium-to-large teams, feature-focused development

### 6. Service Route Schema

RESTful API structure with clear service routing:

```
src/
  services/
  routes/
  middleware/
  models/
```

**Best for:** REST APIs, traditional backend services

## Creating Custom Templates

1. Create a new YAML file in `src/templates/`
2. Define your structure following the format above
3. Run the CLI and select your custom template

### Example Custom Template: Microservice

Create `src/templates/microservice.yaml`:

```yaml
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

Then use it:

```bash
rapidnode your-service
# Select: microservice
```

## Examples

### Express + MongoDB Setup

```bash
$ rapidnode blog-api
? Production packages: express mongoose cors dotenv
? Dev packages: nodemon
? Select template: default-template
```

**Creates:**

- `src/` with MVC structure
- `package.json` with Express & Mongoose
- `node_modules/` with all dependencies installed
- Ready-to-code backend!

### Microservice with Docker

```bash
$ rapidnode payment-service
? Production packages: express
? Dev packages: jest
? Select template: microservice
```

**Creates:**

- Microservice-optimized structure
- Dockerfile ready for containerization
- Test setup with Jest
- Validation schemas

## Best Practices

- **Choose based on scale**: Small projects → Vertical Slice or Service Route
- **Team size matters**: Larger teams → Clean Architecture or Vertical Slice
- **Consider growth**: Start simple, evolve with templates
- **Customize templates**: Tailor to your specific needs and patterns
