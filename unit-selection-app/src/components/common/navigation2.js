import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title: 'Home   >', 
        path: '/'
    },
    {
        title: 'Selection   >', 
        path: '/schedule'
    },
    {
        title:'Schedule   >',
        path:'/selection'
    },
    {
        title:'View',
        path:'/view'
    }
]

export default function Navigation2({user}){

    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav id="nav-override" className="navbar navbar-expand-lg">
        <span className="custom-logo navbar-brand"><Link to='/'>M Unit Selection</Link></span>

        <ul className="navbar-nav ms-auto">
            { navLinks.map((link,index)=>(
                <li key={index} className="nav-item">
                     <a className="nav-link"><Link to={link.path}>{link.title}</Link></a>
                </li>
             ))}
        </ul>
            
    </nav>)
}