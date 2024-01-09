import React from "react";
import { menuItems } from "../Nav";

export const MobileMenu: React.FC = () => (
    <div id="menu" className="hidden">
        <ul>
            {menuItems.map((el, i) => (
                <li key={i}><a href={el.link}>{el.title}</a></li>
            ))}
        </ul>
        <span>Menu</span>
        <i id="close" className="fas fa-times"></i>
    </div>
)