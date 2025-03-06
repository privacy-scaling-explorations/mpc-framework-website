import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import { Footer as InfinumFooter } from '@infinum/docusaurus-theme';

function Footer() {
    const { footer } = useThemeConfig();

    return (
        <div className="footer">
            <div>MPC Framework</div>
            <div className="grow"></div>
            <div>Made by PSE with support from the Ethereum Foundation</div>
            <div className="grow"></div>
            <div className="social-icons">
                <Icon iconSrc="/img/social-icons/github-icon.svg" linkUrl="https://github.com/voltrevo/mpc-framework" size="24px" />
                <Icon iconSrc="/img/social-icons/discord-icon.svg" linkUrl="https://discord.gg/2wm8wa3X4N" size="24px" />
                <Icon iconSrc="/img/social-icons/telegram-icon.svg" linkUrl="https://t.me/+FKnOHTkvmX02ODVl" size="24px" />
            </div>
        </div>
    );
}

function Icon({ iconSrc, linkUrl, size }) {
    return (
        <a target="_blank" href={
            linkUrl
                ? linkUrl
                : '#'
        }>
            <img src={iconSrc} style={{
                height: size,
                width: size,
            }} />
        </a>
    );
}

export default React.memo(Footer);
