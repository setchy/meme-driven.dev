# Meme Driven Development (MDD)

[![CI Workflow][ci-workflow-badge]][github-actions] [![Netlify Status][netlify-badge]][netlify-deploys] [![Quality Gate Status][quality-badge]][quality] [![Contributors][contributors-badge]][github] [![OSS License][license-badge]][license] [![Renovate enabled][renovate-badge]][renovate] [![wakatime][wakatime-badge]][wakatime]

> A novel (and fun) approach to modern software development.

![Meme Driven Development][social]

---

## ✨ Features

- 🎭 **MDD Manifesto** — uncovering better ways of developing software by creating and sharing memes
- 📜 **MDD Specification** — a formal specification for applying MDD before, during, and after coding, with all PR feedback delivered in meme form
- ✅ **Curated Best Practices** — a gallery of industry best practices, each captured as a meme
- 🛠️ **Built with** [Astro][astro], [Tailwind CSS][tailwindcss], and [TypeScript][typescript]

## 🚀 Quick Start

### 📋 Prerequisites

- 📦 [Node.js][nodejs] 24+ (see `.nvmrc`) and [pnpm][pnpm] (see `packageManager`)

### 🖥️ Run locally

```shell
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to see the site with hot module reload.

### 🏗️ Build for production

```shell
pnpm build
pnpm preview
```

## 🤝 Contributing

Any and all contributions to shaping the future of meme-driven development are greatly welcomed.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full development and contribution instructions.

To add your best practice:

1. **Create a New Meme Entry**: Add your best practice to `./src/memes/memes.ts` along with your meme image to `./src/memes/`.
2. **Submit a Pull Request**: Submit a PR, remembering to follow the MDD specification for PRs.
3. **Profit**: After a short review cycle your best practice will now be definitively an industry best practice.

## 💬 Community & Support

- Visit the live site at [meme-driven.dev][website].
- Open an [issue][github-issues] for bugs or feature requests.
- See [CONTRIBUTING.md](CONTRIBUTING.md) for more ways to get involved.

## 📜 License

Meme Driven Development is licensed under the MIT Open Source license.

See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgements

- [O'RLY Books][orly-books-website]: O'RLY Book Cover Generator

<!-- LINK LABELS -->
[social]: public/images/social.png
[website]: https://meme-driven.dev

[github]: https://github.com/setchy/meme-driven.dev
[github-actions]: https://github.com/setchy/meme-driven.dev/actions
[github-issues]: https://github.com/setchy/meme-driven.dev/issues

[ci-workflow-badge]: https://img.shields.io/github/actions/workflow/status/setchy/meme-driven.dev/lint.yml?logo=github&label=CI
[contributors-badge]: https://img.shields.io/github/contributors/setchy/meme-driven.dev?logo=github
[license]: LICENSE
[license-badge]: https://img.shields.io/github/license/setchy/meme-driven.dev?logo=github
[netlify-badge]: https://api.netlify.com/api/v1/badges/d6730e2d-6014-4a83-9f42-8b21ad34220c/deploy-status
[netlify-deploys]: https://app.netlify.com/sites/meme-driven-dev/deploys
[orly-books-website]: https://orlybooks.com/
[quality]: https://sonarcloud.io/summary/new_code?id=setchy_meme-driven.dev
[quality-badge]: https://img.shields.io/sonar/quality_gate/setchy_meme-driven.dev?server=https%3A%2F%2Fsonarcloud.io&logo=sonarqubecloud
[renovate]: https://github.com/setchy/meme-driven.dev/issues
[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovate&logoColor=white
[wakatime-badge]: https://wakatime.com/badge/user/2b948ae2-4be1-4020-8a57-7de60b53fe1d/project/3683a22e-647f-49a8-bc5d-9a0293258f5d.svg
[wakatime]: https://wakatime.com

[astro]: https://astro.build
[tailwindcss]: https://tailwindcss.com
[typescript]: https://typescriptlang.org
[nodejs]: https://nodejs.org
[pnpm]: https://pnpm.io