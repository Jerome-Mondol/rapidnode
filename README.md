# RapidNode

> ⚡ Instant cross-platform Node.js backend structure generator

**Scaffold a production-ready Node.js backend in seconds** with interactive setup and custom templates.

## Quick Start


### Use the following command to get started using npx.

```bash
npx @jeroomew/rapidnode my-api
```

### Use the following command to get started using pnpm

### Using pnpm dlx

```bash
pnpm dlx @jeroomew/rapidnode my-api
```

## How It Works

1. **Run the command** with your project name
2. **Select dependencies** (production and dev packages)
3. **Choose a template** (clean architecture, CQRS, event-driven, etc.)
4. **Done!** Your project is ready to use

## Features

- One-command setup
- Automatic dependency and dev dependency installation
- Multiple architecture templates
- Cross-platform support

## Documentation

- [Architecture & Templates](https://github.com/Jerome-Mondol/rapidnode/blob/main/docs/ARCHITECTURE.md) - Learn about templates, customization, and examples
- [Contributing](https://github.com/Jerome-Mondol/rapidnode/blob/main/CONTRIBUTING.md) - How to contribute to RapidNode
- [GitHub](https://github.com/Jerome-Mondol/rapidnode) - Source code

## License

MIT © Jerome Mondol

### Microservice Template

```bash
$ npx @jeroomew/rapidnode payment-service
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

## Author

**Jerome Mondol**

