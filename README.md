# RapidNode

> ⚡ Instant cross-platform Node.js backend structure generator

**Scaffold a production-ready Node.js backend in seconds** with interactive setup and YAML templates.

## Quick Start

### Use npx

```bash
npx @jeroomew/rapidnode my-api
```

### Use pnpm

```bash
pnpm dlx @jeroomew/rapidnode my-api
```

## How It Works

1. **Run the command** with your project name
2. **Pick dependencies** (production and dev packages)
3. **Choose a template** (clean architecture, CQRS, event-driven, etc.)
4. **Scaffold the structure** from YAML
5. **Optional Git setup** (init, commit, branch, remote, push)

## Features

- One-command setup
- Optional dependency installation via npm
- Multiple architecture templates
- YAML-driven project structures
- Optional Git initialization and push
- Cross-platform support

## Available Templates

- clean-architecture
- cqrs-pattern
- event-driven
- serverless-faas
- service-route-schema
- vertical-slice

## Documentation

- [Architecture & Templates](https://github.com/Jerome-Mondol/rapidnode/blob/main/docs/ARCHITECTURE.md) - Learn about templates and customization
- [Contributing](https://github.com/Jerome-Mondol/rapidnode/blob/main/CONTRIBUTING.md) - How to contribute to RapidNode
- [GitHub](https://github.com/Jerome-Mondol/rapidnode) - Source code

## Troubleshooting

**Git push fails**

Make sure the repo URL is correct and the authenticated user has write access. For HTTPS, use a Personal Access Token.

**Dependencies not installed**

Ensure you have npm 6+ and Node 14+:

```bash
node --version
npm --version
```

## License

MIT © Jerome Mondol

## Author

**Jerome Mondol**

