import React from "react"

export const NotFound: React.FC = () => {
    const style = `
        #message-404 {
            margin: 70px 0;
        }
        
        #message-404 .message-box {
            text-align: center;
            font-family: 'Fira Sans';
        }
        
        #message-404 .message-box h3 {
            border-bottom: 1px solid #ccc;
            margin-bottom: 50px;
            font-size: 250px;
        }
        
        #message-404 .message-box span {
            margin-bottom: 20px;
            padding: 0 230px;
            font-size: 40px;
            line-height: initial;
            text-transform: uppercase;
        }
        
        #message-404 .message-box a {
            display: inline-block;
            border: 2px solid #3f9f42;
            padding: 20px 30px;
            background: #3f9f42;
            color: #fff;
        }
        
        #message-404 .message-box a:hover {
            background: #fff;
            color: #3f9f42;
        }

        @media only screen and (max-width: 820px) {
            #message-404 .message-box h3 {
                font-size: 140px
            }
        
            #message-404 .message-box span {
                padding: 0;
                font-size: 30px;
            }
        }
    `

    return (
        <main role="main">
            <section id="message-404">
                <article className="content-wrap">
                    <div className="row">
                        <div className="message-box col">
                            <h3>404</h3>
                            <span>The page you are looking for does not exist</span>
                            <a href="/">Go back to Home page</a>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}