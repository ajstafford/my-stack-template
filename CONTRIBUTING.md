# Contributing to My Stack Template

Thank you for considering contributing to this project! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the [Issues](../../issues) section
2. If not, create a new issue with a clear title and description
3. Include steps to reproduce (for bugs) or use cases (for features)
4. Add relevant labels if possible

### Submitting Pull Requests

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/my-stack-template.git
   cd my-stack-template
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Make your changes**
   - Follow the existing code style
   - Write clear, concise commit messages
   - Add tests if applicable
   - Update documentation as needed

6. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   # or
   git commit -m "fix: fix your bug description"
   ```

   Use [Conventional Commits](https://www.conventionalcommits.org/) format:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Provide a clear description of your changes
   - Link any related issues

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex logic
- Use ESLint and fix all warnings

### Project Structure

- Place React components in `src/components/`
- Use `src/app/` for Next.js routes (App Router)
- Keep utility functions in `src/lib/`
- Follow the existing folder structure

### Testing

- Test your changes locally before submitting
- Ensure the build completes without errors
- Check that TypeScript types are correct

### Documentation

- Update the README.md if you add new features
- Add JSDoc comments for public APIs
- Update relevant documentation files

## Code Review Process

1. A maintainer will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited in the repository

## Getting Help

If you need help or have questions:

- Open a [Discussion](../../discussions) on GitHub
- Check existing issues and pull requests
- Reach out to the maintainers

## AI-Assisted Development

This project welcomes contributions developed with AI assistance (like Claude Code, GitHub Copilot, etc.). Please:

- Review and test all AI-generated code thoroughly
- Ensure the code follows project standards
- Verify that the code is secure and efficient
- Mention AI assistance in your PR description if significant

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow GitHub's [Community Guidelines](https://docs.github.com/en/github/site-policy/github-community-guidelines)

## License

By contributing, you agree that your contributions will be licensed under the same [MIT License](./LICENSE) that covers this project.

---

Thank you for contributing to My Stack Template! 🚀
