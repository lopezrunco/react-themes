import React from "react";

interface MenuItem {
    title: string;
    link: string;
    isActive: boolean;
}

interface SocialItem {
    link: string;
    icon: string;
}

const menuItems: MenuItem[] = [
    { title: 'Home', link: '/', isActive: true },
    { title: 'About', link: '/about', isActive: false },
    { title: 'Services', link: '/services', isActive: false },
    { title: 'Portfolio', link: '/portfolio', isActive: false },
    { title: 'Blog', link: '/blog', isActive: false },
    { title: 'Contact', link: '/contact', isActive: false },
];

const socialItems: SocialItem[] = [
    { link: '#', icon: 'fas fa-search' },
    { link: '#', icon: 'fab fa-twitter' },
    { link: '#', icon: 'fab fa-instagram' },
];

export const Nav: React.FC = () => {
    return (
        <div className="nav-bar">
            <h1 className="main-logo">Web title</h1>
            <div className="img-logo">
                <a href="/">
                    <img src="./img/logo.png" alt="main logo" />
                </a>
            </div>
            <nav className="main-nav">
                <ul>
                    {menuItems.map((menuItem, i) => <li key={i}><a className={menuItem.isActive ? 'active' : ''} href={menuItem.link}>{menuItem.title}</a></li>)}
                </ul>
                <ul className="social-menu">
                    {socialItems.map((socialItem, i) => <li key={i}><a href={socialItem.link}><i className={socialItem.icon}></i></a></li>)}
                </ul>
            </nav>
            <div className="menu-bar" id="btn-menu">
                <i className="fas fa-bars"></i>
            </div>
            <div className="menu-search" id="btn-search">
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}