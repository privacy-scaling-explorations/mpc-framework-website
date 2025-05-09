import React, { Fragment, useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ShowcaseCard, CtaImageButton } from '@infinum/docusaurus-theme';

const shuffleArray = (array) => array.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export default function ShowcaseGrid(props) {
    const headingTitle = 'Showcase';
    const headingSubtitle = 'Awesome apps built with MPC Framework.';
    const ctaTitle = <span>Want to add your <br /> project to the list?</span>;
    const ctaSubtitle = 'Open an issue on GitHub';
    const ctaUrl = 'https://github.com/privacy-scaling-explorations/mpc-framework-website/issues/new';

    const itemsData = [
        {
            image: useBaseUrl('img/mpc-hello.png'),
            label: 'MPC Hello',
            desc: 'The hello world of MPC!',
            link: '/apps/hello',
        },
        {
            image: useBaseUrl('img/mpc-lizard-spock.svg'),
            label: 'MPC Lizard Spock',
            desc: 'Play Rock Paper Scissors Lizard Spock while keeping your move secret.',
            link: '/apps/lizard-spock',
        },
        {
            image: useBaseUrl('img/2pc-is-for-lovers.png'),
            label: '2PC is for Lovers',
            desc: 'Secretly love your best friend? Find out if they love you back with MPC.',
            link: '/apps/2pc-is-for-lovers',
        },
        {
            image: useBaseUrl('img/jumboswap.svg'),
            label: 'JumboSwap',
            desc: 'Discover swap opportunities within groups.',
            link: '/apps/jumboswap',
        },
    ];

    // https://reactjs.org/docs/react-dom.html#hydrate
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);

    const items = shuffleArray(itemsData).map((item, index) => {
        const {
            image,
            label,
            link,
            desc,
        } = item;

        return (
            <ShowcaseCard
                key={index}
                url={link}
                imageUrl={image}
                imageAlt={label}
                title={label}
                description={desc}
            />
        )
    });

    return (
        // key={isClient ? 1 : 2} will trigger a rerender of the whole subtree and the images will be aligned with text
        <Fragment key={isClient ? 1 : 2}>
            <h1 className='es-big-title es-h-center'>{headingTitle}</h1>
            <p className='es-big-subtitle es-text-center es-h-center'>{headingSubtitle}</p>

            <div className='es-showcase-grid'>
                {items}
            </div>

            <CtaImageButton
                title={ctaTitle}
                buttonLabel={ctaSubtitle}
                buttonUrl={ctaUrl}
                imageUrl='/img/pentagram.svg'
            />
        </Fragment>
    );
}
