export const siteMetadata = {
  title: 'Meme Driven Development (MDD)',
  url: 'https://meme-driven.dev',
  description: 'A novel (and fun) approach to modern software development',
  repo: {
    fullName: 'setchy/meme-driven.dev',
    owner: 'setchy',
    name: 'meme-driven.dev',
  },
  keywords: 'meme,meme-driven,mdd,development,methodology,setchy',
  author: {
    name: 'Adam Setch (@setchy)',
    site: 'https://setchy.io',
  },
  google: {
    analytics: 'G-736BKHY5WS',
    siteVerification: '',
  },
  menuLinks: [
    {
      name: 'Manifesto',
      path: '/#manifesto',
    },
    {
      name: 'Specification',
      path: '/#specification',
    },
    {
      name: 'Best Practices',
      path: '/#best-practices',
    },
  ],
};

export const URLs = {
  GITHUB: {
    REPO: `https://github.com/${siteMetadata.repo.fullName}`,
    ISSUES: `https://github.com/${siteMetadata.repo.fullName}/issues`,
    LATEST_RELEASE: `https://github.com/${siteMetadata.repo.fullName}/releases/latest`,
  },
};
