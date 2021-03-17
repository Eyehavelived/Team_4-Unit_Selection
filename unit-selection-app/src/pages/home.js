import React from 'react';
import Navigation from '../components/common/navigation';
import hero_image from '../assets/images/home_png.png';
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Home(){
    return (
<<<<<<< HEAD
        <section className="container home">

            <div className="section-hero">
                <Navigation/>
                <h1>Make <span>Unit Selection</span> Easy</h1>
                <h4>Scheduler your time at Monash University and make selecting units stress-free</h4>
                <button className="btn home-fst-btn" type="button">Making New Schedule</button>
                <br></br>
                <button className="btn home-snd-btn" type="submit">Upload Previous Schedule</button>
            </div>
            <div className="section-about">
                <h1>About</h1>
            </div>
        </section>
=======
        <article>
            <section className="container-hero">
           
                <div className="container my-4">
                    <Navigation/>
                </div>

                <div className="container my-4">
                     <div className="row">
                        <div className="col-7 my-5 mx-3">
                            <h1>Make <span>Unit Selection</span> Easy</h1>
                            <h4>Schedule your time at Monash University and make selecting units stress-free.</h4>
                            <button className="btn btn-primary btn-lg my-3" type="button">Making New Schedule</button>
                            <br></br>
                            <button className="btn btn-outline-secondary btn-lg my-3" type="submit">Upload Previous Schedule</button>
                        </div>
                        <div className="col-3 my-5">
                            <img src={hero_image}/>
                        </div>
                     </div>
                </div>
            </section>
            
            <section className="container-about">
                <div className="container my-4">
                    <div className="row py-5 mx-3">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="row pb-5">
                        <div className="col-3">
                            <img src={hero_image}/>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-7 py-3 px-5 about-custom">
                            <h4 className="pt-3">The Project</h4>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac venenatis tellus. Nunc blandit risus vel suscipit sodales. Nullam vitae lorem nisi. In placerat quis nisi sagittis efficitur. Quisque hendrerit ante sapien, nec hendrerit augue viverra luctus. Sed vestibulum nibh sit amet sapien laoreet feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <br/>
                            <hr/>
                            <h4>The Group</h4>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac venenatis tellus. Nunc blandit risus vel suscipit sodales. Nullam vitae lorem nisi. In placerat quis nisi sagittis efficitur. Quisque hendrerit ante sapien, nec hendrerit augue viverra luctus. Sed vestibulum nibh sit amet sapien laoreet feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>               
                </div>
            </section>
            <section className="container-howto">
                <div className="container my-4">
                    <div className="row py-5 mx-3">
                        <h1>HOW TO USE</h1>
                    </div>
                    <div id="carousel-id" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-id" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-id" data-slide-to="1"></li>
                                <li data-target="#carousel-id" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div class="carousel-item active">
                                </div>
                                <div class="carousel-item ">
                                </div>
                                <div class="carousel-item ">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carousel-id" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel-id" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    //possibly video embbed              
                </div>
                
            </section>
            <section className="container-contact">
                <div className="row py-4 mx-3">
                    <div className="col">
                        <h4 className="mb-4">Contact Us</h4>
                        <p><a>Visit our Github Repoitory {`>`}</a></p>
                        <p>Email xxxxxx@student.monash.edu  {`>`}</p>
                    </div>
                        
                    <div id="btn-override" className="col pt-4 d-flex justify-content-end">
                            
                        <button className="btn mx-3"><FaBootstrap size={30}/></button>
                        <button className="btn mx-3"><FaGithub size={30}/></button>
                        <button className="btn mx-3"></button>
                    </div>
                </div>
            </section>

            <footer className="pt-2">
                <div className="d-flex justify-content-center">
                    <p>Copyright 2021 by [Whatever this project is meant to be called]</p>
                </div>
            </footer>
        </article>
>>>>>>> 01264f7ce075a0e50404fff7d8b0c74c645f7366
    )
}