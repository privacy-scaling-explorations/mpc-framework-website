import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div>MPC Framework</div>
            <div className="grow"></div>
            <div>Made by PSE with support from the Ethereum Foundation</div>
            <div className="grow"></div>
            <div className="social-icons">
                <Icon iconSrc="/img/social-icons/github-icon.svg" linkUrl="https://github.com/privacy-scaling-explorations/mpc-framework" size="24px" />
                <Icon iconSrc="/img/social-icons/discord-icon.svg" linkUrl="https://discord.gg/btXAmwzYJS" size="24px" />
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
