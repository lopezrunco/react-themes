import React from "react";

interface TagsDataI {
    link: string;
    text: string;
}

const tagsData: TagsDataI[] = [
    { link: '#', text: 'After Effects' },
    { link: '#', text: 'Visual Studio' },
    { link: '#', text: 'Photoshop' },
    { link: '#', text: 'Gimp' },
    { link: '#', text: 'Illustrator' },
    { link: '#', text: 'VSC' },
    { link: '#', text: 'SASS' },
];

export const BlogTags: React.FC = () => {
    return (
        <div className="tags">
            <div className="row">
                <div className="col-12">
                    <h4>Most popular tags</h4>
                    {tagsData.map((el, i) => <a key={i} href={el.link}>{el.text}</a>)}
                </div>
            </div>
        </div>
    )
}