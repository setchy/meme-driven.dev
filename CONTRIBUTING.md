# Meme Driven Development Contributing Guide

Hi, we're really excited that you're interested in contributing to Meme Driven Development!

Before submitting your contribution, please read through the following guide.

### 🎭 Project Philosophy

This project is a website presenting Meme Driven Development (MDD) — a novel (and fun) approach to modern software development where memes take center stage before, during, and after writing code.

### 🚀 Getting Started

To get started:

Clone the repository and install dependencies:
  ```shell
  pnpm install
  ```

Start development mode (includes hot module reload):
  ```shell
  pnpm dev
  ```

Open [http://localhost:4321](http://localhost:4321) to view the site locally.

### 🧪 Checks

There are two main checks:
1. Linter & formatter with [Biome][biome-website]
2. Production build with [Astro][astro-website]

```shell
# Run biome to check linting and formatting
pnpm lint:check

# Auto-fix linting and formatting
pnpm lint

# Build for production
pnpm build
```

### 🧹 Code Style & Conventions

- We use [Biome][biome-website] for linting and formatting. Please run `pnpm lint:check` before submitting a PR.
- Follow existing file and folder naming conventions.
- Keep commit messages clear and descriptive.

### 🖼️ Adding a Best Practice

To add a new best practice meme to the gallery:

1. Add your meme image (`.jpg`, `.png`, or `.svg`) to `./src/memes/`.
2. Register a new entry in `./src/memes/memes.ts`:

   ```ts
   {
     title: 'Your Best Practice',
     meme: 'your-meme-file-name',
     ext: 'jpg',
     caption: 'Your caption',
   },
   ```

3. Submit a PR, remembering to follow the MDD specification for PRs. 😉

### 🐛 How to Report Bugs or Request Features

If you encounter a bug or have a feature request, please [open an issue][github-issues] with clear steps to reproduce or a detailed description of your idea. Check for existing issues before creating a new one.

### 🧐 MDD Reviews

Per the [MDD Specification][website], all feedback on pull requests must be provided in meme form. 🎭

<!-- LINK LABELS -->
[astro-website]: https://astro.build/
[biome-website]: https://biomejs.dev/
[github-issues]: https://github.com/setchy/meme-driven.dev/issues
[website]: https://meme-driven.dev