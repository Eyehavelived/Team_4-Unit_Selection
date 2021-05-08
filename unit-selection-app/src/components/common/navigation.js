import React, {useState} from 'react';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {GiHamburgerMenu} from "react-icons/gi";

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

export default function Navigation(){

    return (
    <div className="my-3 mx-4">  
        <nav id="nav-override" className="navbar navbar-expand-lg">
        <span className="custom-logo navbar-brand"><LinkR to='/'>MUSe</LinkR></span>

            <ul className="navbar-nav">
                { navLinks.map((link,index)=>(
                    <li key={index} className="nav-item">
                        <a className="nav-link"><LinkS to={link.path} offset={-70} smooth={true} duration={50}>{link.title}</LinkS></a>
                    </li>
                ))}
            </ul>

            <button className="ms-auto btn btn-primary btn-sm navbar-btn"><LinkR to="/selection">Start Scheduling {`>`}</LinkR></button>
        </nav>
    </div>
    )
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
    // },
    // {
    //     title: '>', 
    //     path: '/view'
    // },
    // {
    //     title:'View',
    //     path:'/view'
    }
]

function NavigationSelection(props){

    return (
    <div className="my-3 mx-4"> 
        <nav id="nav-override" className="navbar navbar-expand-lg">
            <span className="custom-logo navbar-brand">
                <GiHamburgerMenu className="me-3 mb-1"  onClick={props.onSide}/>
                <LinkR to='/'>MUSe</LinkR>
            </span>

            <ul className="navbar-nav ms-auto">
                { navLinksSchedule.map((link,index)=>(
                    <li key={index} className="nav-item">
                        <a className="nav-link"><LinkR style={link.title==="Selection" ? {color:"#006DAE"}:{}} to={link.path}>{link.title}</LinkR></a>
                    </li>
                ))}
            </ul>
        
        </nav>
    </div>
    )
}

function NavigationApp(props){

    return (
    <div className="mt-3">  
        <nav id="nav-override" className="navbar navbar-expand-lg">
            <span className="custom-logo navbar-brand"><LinkR to='/'>MUSe</LinkR></span>

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


export {NavigationSelection, NavigationApp};