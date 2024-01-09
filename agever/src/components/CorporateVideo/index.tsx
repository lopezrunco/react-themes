import React from "react"

interface CorporateVideoData {
    videoSrc: string;
    videoThumbSrc: string;
    description: string;
}

const corporateVideoData: CorporateVideoData = {
    videoSrc: '#',
    videoThumbSrc: 'img/inst-video-thumb.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, in.'
};

export const CorporateVideo: React.FC = () => {
    return (
        <section id="institutional">
            <article className="content-wrap">
                <div className="row">
                    <div className="col-12">
                        <h2>Our video</h2>
                        <p>{corporateVideoData.description}</p>
                    </div>
                    <div className="col-12 inst-video">
                        <a href={corporateVideoData.videoSrc}>
                            <i className="fas fa-play"></i>
                            <img src={corporateVideoData.videoThumbSrc} alt="Institutional video" />
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}