import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title: 'Home', 
        path: '/'
    }
]

export default function Navigation({user}){

    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className="site-navigation">
        <span className="menu-title">React Blog</span>
        <div className={`menu-content-container ${menuActive && `active`}`}>
            <ul>
                { navLinks.map((link,index)=>(
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>)
}