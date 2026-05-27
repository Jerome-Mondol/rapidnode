# RapidNode

> ⚡ Instant cross-platform Node.js backend structure generator

**Scaffold a production-ready Node.js backend in seconds** with interactive setup and custom templates.

## Quick Start

### Using npx

```bash
npx @jeroomew/rapidnode my-api
```

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

- ⚡ One-command setup
- 📦 Automatic dependency installation
- 🎨 Multiple architecture templates
- 🔄 Cross-platform support (Windows, macOS, Linux)
- 🎯 Interactive CLI with helpful prompts

## Documentation

- [Architecture & Templates](./docs/ARCHITECTURE.md) - Learn about templates, customization, and examples
- [Contributing](./CONTRIBUTING.md) - How to contribute to RapidNode
- [GitHub](https://github.com/jeroomew/rapidnode) - Source code

## License

MIT © Jerome Mondol

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

