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
                title='Why MPC Matters'
                subtitle="For most, MPC is uncharted territory, which can make it challenging to connect it with real-world problems. Here are some examples."
                cards={[
                    {
                        title: 'Medical Research',
                        subtitle: "Researchers need to leverage sensitive patient data to make breakthroughs. MPC can make that easier and safer.",
                    },
                    {
                        title: 'Auctions',
                        subtitle: 'Auctions are an extremely important economic tool because they improve trading efficiency. MPC can expand auction participation because it allows bidders to keep most of their price information secret.',
                    },
                    {
                        title: 'Asset Swaps',
                        subtitle: 'I have stuff. You have stuff. If we swapped stuff, we might have better stuff. MPC can help us swap the best stuff.',
                    },
                    {
                        title: 'Social Matching',
                        subtitle: "People have sensitive reasons for wanting to connect with others. MPC can help people find each other without disclosing those reasons.",
                    },
                    {
                        title: 'Private Personalized Insurance',
                        subtitle: 'The best insurance policies require lots of sensitive information. But exactly how that sensitive information is used is itself sensistive. MPC can reveal this hidden compatibility and/or price information without revealing anything else.',
                    },
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
