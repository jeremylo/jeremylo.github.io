// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jeremy Lo Ying Ping',
  tagline: 'Hello!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jezz.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jeremylo', // Usually your GitHub org/user name.
  projectName: 'jeremylo.github.io', // Usually your repo name.
  deploymentBranch: 'production',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: ['docusaurus-plugin-sass'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jeremy Lo Ying Ping',
        logo: {
          alt: 'Jeremy Lo Ying Ping',
          src: 'img/jeremy_lo_ying_ping.jpg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docsSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Associations',
            items: [
              {
                label: '💻 DOXA',
                href: 'https://doxaai.com/',
              },
              {
                label: '🌍 Climate Hack.AI',
                href: 'https://climatehack.ai/',
              },
              {
                label: '🤖 UCL AI Society',
                href: 'https://uclaisociety.co.uk/',
              },
            ],
          },
          {
            title: 'Get in touch',
            items: [
              {
                label: 'Email',
                href: 'mailto:jeremylo2001@googlemail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jeremyloyingping/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/MUvbQ3UYcf',
              },
            ],
          },
          {
            title: 'Fun links',
            items: [
              {
                label: '🚆 Carto Metro',
                href: 'https://cartometro.com/cartes/metro-tram-london/index.php',
              },
              {
                label: '🎸 Funky Grooves',
                href: 'https://www.youtube.com/watch?v=le0BLAEO93g',
              },
              {
                label: '🐍 The Zen of Python',
                href: 'https://peps.python.org/pep-0020/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jeremy Lo Ying Ping`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
