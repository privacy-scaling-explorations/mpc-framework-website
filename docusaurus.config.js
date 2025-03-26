const { themes } = require('prism-react-renderer');

const darkTheme = themes.dracula;

module.exports = {
    title: 'MPC Framework',
    tagline:
        'Create secure MPC apps easily in TypeScript.',
    url: 'https://mpc.pse.dev',
    baseUrl: '/',
    favicon: '/img/favicon.png',
    organizationName: 'PSE',
    projectName: 'mpc-framework-website',
    staticDirectories: ['static'],
    scripts: [
        {
            src: 'https://buttons.github.io/buttons.js',
            async: true,
            defer: true,
        },
    ],
    themeConfig: {
        navbar: {
            title: 'MPC Framework',
            logo: {
                alt: 'MPC Framework Logo',
                src: '/img/logo-nav.png',
            },
            items: [
                {
                    to: 'docs/quick-guide',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'right',
                },
                {
                    to: '/blog',
                    activeBasePath: 'blog',
                    label: 'Blog',
                    position: 'right',
                },
                {
                    to: '/showcase',
                    activeBasePath: 'showcase',
                    label: 'Showcase',
                    position: 'right',
                },
            ],
        },
        // algolia: {
        //     appId: 'TODO',
        //     apiKey: 'TODO',
        //     indexName: 'TODO',
        //     startUrls: [
        //         'https://mpc.pse.dev/',
        //         'https://mpc.pse.dev/docs',
        //     ],
        //     contextualSearch: false,
        // },
        prism: {
            theme: darkTheme,
            additionalLanguages: ['php', 'scss', 'css', 'diff'],
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
            },
        },
        trailingSlash: false,
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    sidebarCollapsible: true,
                },
                gtag: {
                    trackingID: 'GTM-P5GG5DH',
                    anonymizeIP: true,
                },
                theme: {
                    customCss: [
                        require.resolve('./src/theme/styles.css'),
                        require.resolve('@infinum/docusaurus-theme/dist/style.css'),
                    ],
                },
                blog: {
                    blogTitle: 'Tutorials and articles about MPC Framework',
                    blogDescription:
                        'Tutorials and articles about MPC Framework',
                    blogSidebarTitle: 'Latest posts',
                    showReadingTime: true,
                    postsPerPage: 9,
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            },
        ],
    ],
    plugins: [
        'es-text-loader',
    ],
    customFields: {
        keywords: [
            'MPC',
            'cryptography',
            'multi-party computation',
            'typescript',
            'framework',
            'secure',
            'privacy',
            'security',
            'boolean circuits',
        ],
        image: 'pentagram.png',
    },
};
