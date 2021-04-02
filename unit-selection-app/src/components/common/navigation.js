import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";

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

export default function Navigation(){

    return (
    <nav id="nav-override" className="navbar navbar-expand-lg">
        <span className="custom-logo navbar-brand"><Link to='/'>M Unit Selection</Link></span>

        <ul className="navbar-nav">
            { navLinks.map((link,index)=>(
                <li key={index} className="nav-item">
                     <a className="nav-link"><Link to={link.path}>{link.title}</Link></a>
                 </li>
             ))}
        </ul>

        <button className="ms-auto btn btn-primary navbar-btn"><Link to="/selection">Start Scheduling {`>`}</Link></button>
            
    </nav>)
}

const navLinksSchedule = [
    {
        title: 'Home', 
        path: '/home'
    },
    {
        title: '>', 
        path: '/selection'
    },
    {
        title: 'Selection', 
        path: '/selection'
    },
    {
        title: '>', 
        path: '/schedule'
    },
    {
        title:'Schedule',
        path:'/schedule'
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

function NavigationSelection(props){

    return (
    <div className="my-3 mx-4"> 
        <nav id="nav-override" className="navbar navbar-expand-lg">
            <span className="custom-logo navbar-brand">
                <GiHamburgerMenu className="me-3 mb-1"  onClick={props.onSide}/>
                <Link to='/'>M Unit Selection</Link>
            </span>

            <ul className="navbar-nav ms-auto">
                { navLinksSchedule.map((link,index)=>(
                    <li key={index} className="nav-item">
                        <a className="nav-link"><Link style={link.title==="Selection" ? {color:"#006DAE"}:{}} to={link.path}>{link.title}</Link></a>
                    </li>
                ))}
            </ul>
        
        </nav>
    </div>
    )
}


function NavigationView(){

    return (
    <nav className="site-navigation">
        <span className="menu-title">M Unit Selection</span>
            <ul>
                { navLinksSchedule.map((link,index)=>(
                    <li key={index}>
                        <Link style={link.title==="View" ? {color:"#006DAE"}:{}} to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

       

    </nav>)
}


function NavigationSchedule(){

    return (
    <div className="my-3 mx-4">  
        <nav id="nav-override" className="navbar navbar-expand-lg">
            <span className="custom-logo navbar-brand"><Link to='/'>M Unit Selection</Link></span>

            <ul className="navbar-nav ms-auto">
                { navLinksSchedule.map((link,index)=>(
                    <li key={index} className="nav-item">
                        <a className="nav-link"><Link style={link.title==="Schedule" ? {color:"#006DAE"}:{}} to={link.path}>{link.title}</Link></a>
                    </li>
                ))}
            </ul>
                
        </nav>
    </div>)
}


export {NavigationSchedule,NavigationSelection, NavigationView};