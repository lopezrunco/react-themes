import React from "react";

interface AuthorDataI {
    name: string;
    avatar: string;
    info: string;
}

const authorData: AuthorDataI = {
    name: 'By Randy Rhoads',
    avatar: '../img/team-1 (1).jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem deserunt, tempora quidem cumque tempore adipisci.'
}

export const AuthorInfo: React.FC = () => {
    return (
        <div className="author">
            <div className="row">
                <div className="col-xs-4 col-sm-2 col-lg-4">
                    <div className="img-wrapper">
                        <img src={authorData.avatar} />
                    </div>
                </div>
                <div className="col-xs-8 col-sm-4 col-lg-8">
                    <div className="author-name">
                        <h4>{authorData.name}</h4>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-12">
                    <div className="author-info">
                        <p>{authorData.info}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}