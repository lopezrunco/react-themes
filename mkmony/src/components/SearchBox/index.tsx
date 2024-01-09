import React from "react";

export const SearchBox: React.FC = () => {
    const styles = `
        @media only screen and (max-width: 820px) {
            .search-box .form-control {
                width: 60%;
            }
        }

        @media only screen and (max-width: 380px) {
            #aside .our-services .search-box .form-control {
                width: 70%;
            }
        }
    `

    return (
        <div className="search-box">
            <style>{styles}</style>
            <form role="search" method="GET" className="search-form" action="">
                <input type="search" className="form-control" placeholder="Search..." />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}