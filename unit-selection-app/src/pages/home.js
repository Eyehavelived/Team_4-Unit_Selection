import React from 'react';
import Navigation from '../components/common/navigation';
import hero_image from '../assets/images/home_png.png';


export default function Home(){
    return (
        <article>
            <section className="container-hero">
                <div className="section-main">
                    <div className="nav">
                        <Navigation/>
                    </div>
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Make <span>Unit Selection</span> Easy</h1>
                            <h4>Schedule your time at Monash University and make selecting units stress-free.</h4>
                            <button className="btn impact-btn home-fst-btn" type="button">Making New Schedule</button>
                            <br></br>
                            <button className="btn impact-btn home-snd-btn" type="submit">Upload Previous Schedule</button>
                        </div>
                        <img src={hero_image}/>
                    </div>
                </div>
            </section>
            <section className="container-about">
                <div className="section-main">
                    <h1 className="about-heading section-heading">ABOUT US</h1>
                    <div className="about-content">
                        <img src={hero_image}/>
                        <div className="about-text">
                            <h4>The Project</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac venenatis tellus. Nunc blandit risus vel suscipit sodales. Nullam vitae lorem nisi. In placerat quis nisi sagittis efficitur. Quisque hendrerit ante sapien, nec hendrerit augue viverra luctus. Sed vestibulum nibh sit amet sapien laoreet feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <br/>
                            <hr/>
                            <h4>The Group</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac venenatis tellus. Nunc blandit risus vel suscipit sodales. Nullam vitae lorem nisi. In placerat quis nisi sagittis efficitur. Quisque hendrerit ante sapien, nec hendrerit augue viverra luctus. Sed vestibulum nibh sit amet sapien laoreet feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>                  
                </div>
            </section>
            <section className="container-howto">
                <div className="section-main">
                    <h1 className="section-heading">HOW TO USE</h1>
                    //possibly video embbed              
                </div>
            </section>
            <footer>
                <div>
                    <h3>Contact Us</h3>
                </div>
            </footer>
        </article>
    )
}