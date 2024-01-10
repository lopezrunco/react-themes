import React from "react";

export const Newsletter: React.FC = () => {
    return (
        <section id="newsletter">
            <article className="content-wrap">
                <div className="row title">
                    <div className="col-12">
                        <h2>Subscribe to Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, alias optio qui sequi
                            consectetur repudiandae!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <form action="" className="subscribe-form">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="submit" value="Subscribe" className="uppercase" />
                    </form>
                </div>

            </article>
        </section>
    )
}