import React from 'react';
import Navigation from '../components/common/navigation';
import Container_hero from '../components/container_hero';
import Container_howtouse from '../components/container_howtouse';
import Container_about from '../components/container_about';
import Container_contact from '../components/container_contact';
import { FaBootstrap, FaGithub } from "react-icons/fa";

export default function Home(){
    return (
        <article>

            <div className="bg-offwhite fixed-top">
                <Navigation/>
            </div>

            <Container_hero/>
            
            <Container_howtouse/>
            
            <Container_about/>

            <Container_contact/>

            <footer className="pt-2">
                <div className="d-flex justify-content-center">
                    <p>Copyright 2021 by [Whatever this project is meant to be called]</p>
                </div>
            </footer>
        </article>
    )
}