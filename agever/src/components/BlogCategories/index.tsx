import React from "react";

interface CategoriesDataI {
    name: string;
    count: number;
    link: string;
}

const categoriesData: CategoriesDataI[] = [
    { name: 'Web server', count: 41, link: '#' },
    { name: 'Full stack developer', count: 23, link: '#' },
    { name: 'After Effects', count: 11, link: '#' },
    { name: 'Gimp Free source', count: 7, link: '#' },
    { name: 'Premiere Pro', count: 8, link: '#' },
    { name: 'Visual Studio Code', count: 6, link: '#' }
];

export const BlogCategories: React.FC = () => {
    return (
        <div className="categories">
            <div className="row">
                <div className="col-12">
                    <h4>Blog Categories</h4>
                    <ul className="list">
                        {categoriesData.map((el, i) => (
                            <li key={i}>
                                <a href={el.link}>{el.name}</a>
                                <span className="circle">{el.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}