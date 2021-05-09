import React from 'react';
import Navigation from '../components/common/navigation';
import Container_hero from '../components/container_hero';
import Container_howtouse from '../components/container_howtouse';
import Container_about from '../components/container_about';
import hero_image from '../assets/images/home_png.png';
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
            
            <section className="container-contact my-0 py-0">
                <div className="row py-4 mx-3">
                    <div className="col">
                        <h4 className="mb-4">Contact Us</h4>
                        <p><a>Visit our Github Repoitory {`>`}</a></p>
                        <p>Email xxxxxx@student.monash.edu  {`>`}</p>
                    </div>
                        
                    <div id="btn-override" className="col pt-4 d-flex justify-content-end">
                        <button className="btn circle-btn mx-3"><FaBootstrap size={30}/></button>
                        <button className="btn circle-btn mx-3"><FaGithub size={30}/></button>
                        <button className="btn circle-btn mx-3"></button>
                    </div>
                </div>
            </section>

            <footer className="pt-2">
                <div className="d-flex justify-content-center">
                    <p>Copyright 2021 by [Whatever this project is meant to be called]</p>
                </div>
            </footer>
        </article>
    )
}