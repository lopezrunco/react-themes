import React from "react";

export const QuickContactForm: React.FC = () => {
    return (
        <section id="contact-form">
            <article className="content-wrap">
                <div className="row section-title">
                    <h2>Contact us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, deleniti?</p>
                </div>
                <div className="row form">
                    <form action="post">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="number" name="phone" id="phone" placeholder="Phone" />
                        <select name="budget" id="budget">
                            <option selected disabled>Choose your plan</option>
                            <option>I want a custom plan</option>
                            <option>Plan 1</option>
                            <option>Plan 2</option>
                            <option>Plan 3</option>
                        </select>
                        <textarea name="message" id="message">Message</textarea>
                        <input type="button" value="Send now!" className="btn btn-primary" />
                    </form>
                </div>
            </article>
        </section>
    )
}