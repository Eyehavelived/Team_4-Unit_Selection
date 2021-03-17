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
    <nav id="nav-override" className="navbar navbar-expand-lg">
        <span className="custom-logo navbar-brand"><Link to='/'>M Unit Selection</Link></span>

        <ul className="navbar-nav mr-auto">
            { navLinks.map((link,index)=>(
                <li key={index} className="nav-item">
                     <a className="nav-link"><Link to={link.path}>{link.title}</Link></a>
                 </li>
             ))}
        </ul>

        <button className="ml-auto btn btn-primary navbar-btn"><Link to="/schedule">Start Scheduling {`>`}</Link></button>
            
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