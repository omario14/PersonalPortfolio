import React, { useEffect, useState } from "react";
import Typical from 'react-typical';
import './nav.css';
import './nav.scss';
 
import song from '../../../public/assets/detective.mp3'

export default function Nav() {
    const [audio, setAudio] = useState(new Audio(song));
    const [playing, setIsPlaying] = useState(true);
    const playPause = () => {
        if (playing) {
            // Pause the song if it is playing
            audio.pause();
        } else {
            audio.play();
        }
        // Change the state of song
        setIsPlaying(!playing);

    }
    useEffect(() => {
        if (playing) {
            audio.play();
        }
    });
    return (
        <div>
            <header id="HOME" style={{ backgroundPosition: '50% -125px' }}>
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
                                    <li><div className="header__footer">
                                <div className="speaker" onClick={playPause}>
                                    <div className={playing?"speaker__toggle":"speaker__toggle speaker__toggle--anim"}>&nbsp;</div>
                                    <div className="speaker__muted">
                                        <img src="../../src/assets/muted.svg" alt="muted icon" />
                                    </div>
                                    <div className="speaker__unmuted">
                                        <svg width="14" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.599976" y="1.06665" width="1.4" height="10" fill="gray" className="rect1-anim"></rect>
                                            <rect x="9" y="1.06665" width="1.4" height="10" fill="gray" className="rect2-anim"></rect>
                                            <rect x="4.79999" y="1.06665" width="1.4" height="10" fill="gray" className="rect3-anim"></rect>
                                        </svg>
                                    </div>
                                </div>
                            </div></li>
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
                                                5000,
                                                "Full Stack Developer 😎",
                                                5000,
                                                "Spring Boot Developer 🥇",
                                                5000,
                                                "Angular Developer 🧑‍💻",
                                                5000,
                                                "JavaScript Dev 💯",
                                                5000,
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
                                            <button className='btn highlighted-btn' style={{ color: "white" }}>Get Resume</button>
                                        </a>
                                    </div>
                                    <div className='profile-options' style={{margin:"0 0 0 20%"}}>
                                    <div class="yek-social">
	<ul class="yek-social__list">
		<li class="yek-social__item">
			<a class="yek-social__link" href="#">
				<span class="yek-social__button yek-social__button--gmail">
					<i class="yek-social__icon yek-social__icon--gmail fa fa-envelope"></i>
				</span>
			</a>
		</li>
		<li class="yek-social__item">
			<a class="yek-social__link" href="#">
				<span class="yek-social__button yek-social__button--github">
					<i class="yek-social__icon  yek-social__icon--codepen fa fa-github-alt"></i>
				</span>
			</a>
		</li>
		<li class="yek-social__item">
			<a class="yek-social__link" href="#">
				<span class="yek-social__button yek-social__button--codepen">
					<i class="yek-social__icon yek-social__icon--codepen fa fa-behance"></i>
				</span>
			</a>
		</li>
	</ul>
</div>
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