import React from 'react';


export default function Home(){
    return (
        <section className="container home">
            <div className="row">
                <h1>Make <span>Unit Selection</span> Easy</h1>
                <h4>Scheduler your time at Monash University and make selecting units stress-free</h4>
                <button className="btn home-fst-btn" type="button">Making New Schedule</button>
                <br></br>
                <button className="btn home-snd-btn" type="submit">Upload Previous Schedule</button>
            </div>
        </section>
    )
}