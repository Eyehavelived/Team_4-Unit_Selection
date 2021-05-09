import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';



const navLinks = [
    {
        title: 'Home', 
        path: 'home'
    },
    {
        title:'How to use',
        path:'howtouse'
        
    },
    {
        title:'About',
        path:'about'
    }
]

const Navigation = ()=>{

    return (
    <nav id="nav-override" className="navbar navbar-expand-lg px-3">
        <span className="custom-logo navbar-brand"><LinkR to='/'>M Unit Selection</LinkR></span>

        <ul className="navbar-nav">
            { navLinks.map((link,index)=>(
                <li key={index} className="nav-item">
                     <a className="nav-link"><LinkS to={link.path} offset={-70} smooth={true} duration={50}>{link.title}</LinkS></a>
                 </li>
             ))}
        </ul>

        <button className="ms-auto btn btn-primary navbar-btn"><LinkR to="/selection">Start Scheduling {`>`}</LinkR></button>
            
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

import React from 'react'



const NavigationApp = (props)=>{

    return (
    <div className="mt-3">  
        <nav id="nav-override" className="navbar navbar-expand-lg">
            <span className="custom-logo navbar-brand"><LinkR to='/'>M Unit Selection</LinkR></span>

            <ul className="navbar-nav ms-auto">
                { navLinksSchedule.map((link,index)=>(
                    <li key={index} className="nav-item">
                        <a className="nav-link"><LinkR style={link.title===props.page ? {color:"#006DAE"}:{}} to={link.path}>{link.title}</LinkR></a>
                    </li>
                ))}
            </ul>
                
        </nav>
    </div>)
}


export {Navigation, NavigationApp};