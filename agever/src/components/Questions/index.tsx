import React from "react";

interface VideoDataI {
    videoSrc: string;
    thumbnailSrc: string;
}

const videoData: VideoDataI = {
    videoSrc: "#",
    thumbnailSrc: "img/about-5.jpg"
}

export const Questions: React.FC = () => {
    return (
        <section className="contact-form institutional-0-margin" id="institutional">
            <article className="content-wrap">
                <div className="row">
                    <Form />
                    <InstruccionsVideo />
                </div>
            </article>
        </section>
    )
}

const Form: React.FC = () => (
    <div className="col-sm-6 form">
        <h2>Questions?</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ex placeat, explicabo
            mollitia nesciunt beatae pariatur cupiditate quod facilis minima? Quis, laboreLorossimus, eum.</p>
        <form action="">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Website" />
            <input type="submit" placeholder="Send" className="btn btn-primary uppercase" />
        </form>
    </div>
)

const InstruccionsVideo: React.FC = () => (
    <div className="col-sm-6 inst-video">
        <a href={videoData.videoSrc}>
            <i className="fas fa-play"></i>
            <img src={videoData.thumbnailSrc} />
        </a>
    </div>
)