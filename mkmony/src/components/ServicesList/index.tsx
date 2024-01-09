import React from "react"

import { services } from "../../config/services";
import { SearchBox } from "../SearchBox";

export const ServicesList: React.FC = () => {
    const styles = `
        #aside .our-services h5 {
            margin-bottom: 20px;
            font-family: 'Nunito', sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
        }
        
        #aside .our-services .services-list a {
            display: inline-block;
            padding: 16px 24px 14px;
            margin-bottom: 1px;
            width: 100%;
            background-color: #f2f2f2;
            font-size: 12px;
            font-weight: 400;
            font-family: 'Fira Sans';
            transition: ease-in-out .25s;
        }
        
        #aside .our-services .services-list a:hover {
            color: #fff;
            background: #1c1d1b;
        }
        
        #aside .our-services .search-box {
            margin: 30px 0px;
        }
        
        #aside .our-services .search-box .form-control {
            border-radius: 0;
            padding: 5px 10px;
            width: 70%;
            float: left;
            background: #eeeff2;
            border: 1px solid #e5e7e8;
            font-size: 16px;
            font-family: 'Nunito', sans-serif;
        }
        
        #aside .our-services button[type="submit"] {
            border: none;
            padding: 7px 10px;
            width: 20%;
            background: #000;
            color: #fff;
        }
    `

    return (
        <div className="col-12 our-services">
            <style>{styles}</style>
            <h5>Our services</h5>
            <div className="services-list">
                {services.map((el, i) => <a key={i} href={el.link}>{el.title}</a>)}
            </div>
            <SearchBox />
        </div>
    )
}