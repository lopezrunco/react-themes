import React from "react";

interface ImageI {
    src: string;
}

const images: ImageI[] = [
    { src: '../img/gallery-1.jpg' },
    { src: '../img/gallery-2.jpg' },
    { src: '../img/gallery-3.jpg' },
    { src: '../img/gallery-4.jpg' },
    { src: '../img/gallery-5.jpg' },
    { src: '../img/gallery-6.jpg' },
];

export const AsideGallery: React.FC = () => {
    return (
        <div className="gallery">
            <div className="row">
                <div className="col-12">
                    <h4>Image gallery</h4>
                </div>
                {images.map((el, i) => (
                    <div className="col-xs-6" key={i}>
                        <div className="img-wrapper">
                            <img src={el.src} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}