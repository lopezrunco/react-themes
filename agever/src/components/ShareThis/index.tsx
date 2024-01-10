import React from "react";

interface SocialShareI {
    link: string;
    icon: string;
}

const socialShare: SocialShareI[] = [
    { link: '#', icon: "fab fa-facebook-square" },
    { link: '#', icon: "fab fa-linkedin" },
    { link: '#', icon: "fab fa-instagram" },
    { link: '#', icon: "fab fa-twitter-square" }
];

export const ShareThis: React.FC = () => {
    return (
        <div className="share-this">
            <h4>Share this</h4>
            <ul className="social-share">
                {socialShare.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}><i className={el.icon}></i></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}