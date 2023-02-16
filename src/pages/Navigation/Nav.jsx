import React from "react";
import Typical from 'react-typical';
import './nav.css' ;

export default function Nav() {
    return (
        <div>
            <header id="HOME" style={{backgroundPosition: '50% -125px'}}>
                <div className="section_overlay">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">

 
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="/"><img src="../../../assets/images/logo.png" alt="" /></a>
                            </div>


                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#HOME">Home</a></li>
                                    <li><a href="#SERVICE">Services</a></li>
                                    <li><a href="#ABOUT">About</a></li>
                                   {/* <li><a href="#TESTIMONIAL">Testimonial</a></li>*/}
                                    <li><a href="#WORK">Work</a></li>
                                    <li><a href="#CONTACT">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="home_text wow fadeInUp animated">
                                    <h2 >it’s benamor omar</h2>
                            
                            <div>
                            <Typical
                        loop={Infinity}
                        steps={[
                            "Enthusiastic Developer  👨‍💻",
                            1000,
                            "Full Stack Developer 😎",
                            1000,
                            "Spring Boot Developer 🥇",
                            1000,
                            "Angular Developer 🧑‍💻",
                            1000,
                            "JavaScript Dev 💯",
                            1000,
                        ]}
                        />
                            </div>
                        
                        
                                    <img src="../../../assets/images/shape.png" alt="" />
                                    <div className='profile-options'>
                                        <a href="#CONTACT">
                                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>
                                        </a>
                        
                        <a href='CV_OMAR_BENAMOR.pdf' download='CV_OMAR_BENAMOR.pdf'>
                            <button className='btn highlighted-btn' style={{color:"white"}}>Get Resume</button>
                        </a>
                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="scroll_down">
                                    <a href="#SERVICE"><img src="../../../assets/images/scroll.png" alt="" /></a>
                                    <h4>Scroll Down</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>

        
    );



    
}