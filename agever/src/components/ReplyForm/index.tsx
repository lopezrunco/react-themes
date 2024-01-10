import React from "react"

export const ReplyForm: React.FC = () => {
    return (
        <div className="reply">
            <h2>Leave a reply</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sunt?</p>
            <form action="" className="reply-form">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <textarea name="message" id="message"
                    placeholder="Your message goes here..."></textarea>
                <input type="submit" value="Send" className="uppercase" />
            </form>
        </div>
    )
}