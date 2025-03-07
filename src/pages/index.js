import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { Hero, ImageAndText, CtaCards, TextCards, FeatureShowcase, CtaImageButton, icons } from '@infinum/docusaurus-theme';
import { EsOpenSource } from '../theme/sections/os-projects';
import { EsOsFreebies } from '../theme/sections/os-freebies';

export default function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}
            keywords={siteConfig.customFields.keywords}
            metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
            wrapperClassName='es-footer-white'
        >
            <Hero
                title='MPC Framework'
                subtitle='Create secure MPC apps easily in TypeScript.'
                buttonLabel='Get started'
                buttonUrl='#get-started'
                imageUrl='/img/kids-puzzle-mpc.webp'
                gray
            />

            <ImageAndText
                title="What is MPC?"
                imageUrl='/img/kids-magic-burgers.webp'
                gray
            >
                Imagine you want to go eat with someone. You'd like to go somewhere you both like,
                but you're apprehensive about revealing your true preferences. The other person
                might agree prematurely to please you, or they could take issue with an unusual
                suggestion.
                <br />
                <br />
                MPC is like having a special kind of telepathy - it gives you the answer to a
                question over your combined inputs, without having to share those inputs with
                each other, or anyone else. The only thing that is revealed is the answer to your
                mutual question.
                <br />
                <br />
                It's not actually magic, but <b>M</b>ulti-<b>P</b>arty <b>C</b>omputation is
                a cryptographic protocol which achieves the same thing. Inputs are encoded as
                bits and questions are formalized as boolean circuits over those bits. MPC
                Framework provides tools to make this easy in TypeScript.
            </ImageAndText>

            <div id='get-started'>
                <CtaCards
                    title='Get started in minutes, not hours'
                    subtitle="MPC Hello provides template projects to get you started quickly. Choose the one that's right for you and start building your MPC app today."
                    cards={[
                        {
                            icon: icons.puzzleOpenJob,
                            text: 'Client ↔ Client',
                            buttonLabel: 'Open Template',
                            buttonUrl: 'https://github.com/voltrevo/mpc-hello/tree/main/client-client',
                        },
                        {
                            icon: icons.frontendDevelopment,
                            text: 'Client ↔ Server',
                            buttonLabel: 'Open Template',
                            buttonUrl: 'https://github.com/voltrevo/mpc-hello/tree/main/client-server',
                        },
                        {
                            icon: icons.frontendDevelopment,
                            text: 'Server ↔ Server',
                            buttonLabel: 'Open Template',
                            buttonUrl: 'https://github.com/voltrevo/mpc-hello/tree/main/server-server',
                        },
                        {
                            icon: icons.puzzleOpenJob,
                            text: 'NextJS ↔ NextJS',
                            buttonLabel: 'Open Template',
                            buttonUrl: 'https://github.com/voltrevo/mpc-hello/tree/main/next-js',
                        },
                    ]}
                />
            </div>

            <TextCards
                title='Batteries included'
                subtitle="The DevKit is feature-packed, with a bunch of cool things making the lives of developers and end-users easier!"
                cards={[
                    {
                        title: 'Custom Block Editor blocks',
                        subtitle: "Build a dynamic block faster than you can say Gutenberg. With automatic block registration and top-notch attribute handling, you'll be shipping blocks in record time.",
                    },
                    {
                        title: 'Sustainable, like code should be',
                        subtitle: 'All our code follows battle-tested programming practices. OOP? Check. Unit tests? Double-check. Code doc blocks, linters for coding standards and great documentation? Triple-check.'
                    },
                    {
                        title: 'Eightshift Libs',
                        subtitle: 'Library aimed at bringing the modern development tools to your project.'
                    },
                    {
                        title: 'WP Boilerplate',
                        subtitle: "Include features you need, and leave out the ones you don't using our powerful WP-CLI tooling."
                    },
                    {
                        title: 'As responsive as it can get',
                        subtitle: 'Declare breakpoints once, use them everywhere — from media queries to blocks. Override any attribute value for particular breakpoints without breaking a sweat. Need to tweak that width for tablets? Done.'
                    },
                    {
                        title: 'A build process to love',
                        subtitle: 'Eightshift Development kit comes with Webpack pre-configured, so you can start building your JavaScript and CSS assets from the start. Vendor prefixes? Polyfills? SCSS compilation? Asset minification? All taken care of!'
                    },
                    {
                        title: 'First-class CSS variables',
                        subtitle: 'Forget about conditional classnames: build out CSS variables from attribute values and scope them to a particular block with almost no code.'
                    },
                    {
                        title: 'Cache busting',
                        subtitle: "Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production."
                    },
                    {
                        title: 'OOP: The good way to write PHP code',
                        subtitle: 'Object-oriented programming is at the core of Eightshift Development kit, making your projects cleaner and allowing you to extend and replace functionality.'
                    },
                    {
                        title: 'Eightshift Frontend Libs',
                        subtitle: 'A collection of useful front-end utility modules and all the tools you need to start building modern Block Editor dynamic blocks.'
                    }
                ]}
            />

            <FeatureShowcase
                title='An editing experience content editors will love'
                text='Provide the ease of use and flexibility that your content editors crave for. Rely on our user-friendly default blocks or use plug&play editor components to build great experiences.'
                imageUrl='/img/pentagram.svg'
                gray
            />

            <EsOpenSource />
            <EsOsFreebies />
        </Layout>
    );
}
