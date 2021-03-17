import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title: 'Home', 
        path: '/'
    },
    {
        title:'About',
        path:'/About'
    },
    {
        title:'How to use',
        path:'/howtouse'
    }
]

export default function Navigation({user}){

    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className="site-navigation">
        <div className="menu-left">
        <span className="menu-title">M Unit Selection</span>
        <div className={`menu-content-container ${menuActive && `active`}`}>
            <ul>
                { navLinks.map((link,index)=>(
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

        </div>
        </div>
        <button className="menu-button"><Link to="/schedule">Start Scheduling {'>'}</Link></button>
    </nav>)
}

const navLinksSchedule = [
    {
        title: 'Selection', 
        path: '/'
    },
    {
        title: '>', 
        path: '/schedule'
    },
    {
        title:'Schedule',
        //Not sure what this schedule refers to
        path:'/schedulepage'
    },
    {
        title: '>', 
        path: '/view'
    },
    {
        title:'View',
        path:'/view'
    }
]

function NavigationSchedule({user}){

    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className="site-navigation">
        <span className="menu-title">M Unit Selection</span>
        <div className={`menu-content-container ${menuActive && `active`}`}>
            <ul>
                { navLinksSchedule.map((link,index)=>(
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

        </div>

    </nav>)
}

export {NavigationSchedule};