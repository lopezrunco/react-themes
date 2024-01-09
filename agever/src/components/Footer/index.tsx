import React from "react";

interface SiteInfoI {
    copyright: string
    developerName: string
    developerLink: string
}

const siteInfo: SiteInfoI = {
    copyright: '© Copyright | 2020 | All rights reserved',
    developerName: 'Powered by lopezrunco',
    developerLink: 'https://github.com/lopezrunco'
}

export const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div className="content-wrap">
                <div className="row">
                    <div className="col-lg-6">
                        <p>{siteInfo.copyright}</p>
                    </div>
                    <div className="col-lg-6">
                        <p><a href={siteInfo.developerLink}>{siteInfo.developerName}</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}