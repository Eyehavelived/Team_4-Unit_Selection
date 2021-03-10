import React from 'react';
import Navigation from '../components/common/navigation';


export default function Home(){
    return (
        <article>
            <section className="container-hero">
                <div className="section-hero">
                    <div className="nav">
                        <Navigation/>
                    </div>
                    <div className="hero-content">
                        <h1>Make <span>Unit Selection</span> Easy</h1>
                        <h4>Schedule your time at Monash University and make selecting units stress-free.</h4>
                        <button className="btn impact-btn home-fst-btn" type="button">Making New Schedule</button>
                        <br></br>
                        <button className="btn impact-btn home-snd-btn" type="submit">Upload Previous Schedule</button>
                    </div>
                    
                </div>
            </section>
            <section className="container-about">
                <div className="section-about">
                    <h1>About</h1>
                </div>
            </section>
        </article>
    )
}