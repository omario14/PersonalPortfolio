import React from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css';
toast.configure()


export default function Home() {



  const sendEmail = (e) => { 
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_xsouglf', e.target, 'user_PGXC8IvmNYbSPd1Lk1gAy')
      .then((result) => {
        console.log(result.text);
        
        toast('Your message has been successfully sent.i will contact you soon.', { autoClose: 8000 });
 
      });
      e.target.reset();
  }
  return (
    <div> 

      <section className="services" id="SERVICE">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <div className="single_service wow fadeInUp" data-wow-delay="1s">
                <i className="icon-pencil"></i>
                <h2>Design</h2>
                <p>
                  Designing for pleasure.
                  <br />
                  Passionate about web UX / UI design.
                  <br />
                  Experience creating websites designs for made-up businesses.
                  <br />
                  Skilled in Adobe Creative Suite, including Photoshop,
                  Illustrator, and more.
                </p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="single_service wow fadeInUp" data-wow-delay="2s">
                <i className="icon-gears"></i>
                <h2>Development</h2>
                <p>
                  {" "}
                  I will develop any kind of website from scratch .<br />
                  My core skills are Responsive website design and development,
                  Complex Web apps, Mobile app development and Software
                  development.
                </p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="single_service wow fadeInUp" data-wow-delay="3s">
                <i className="icon-video"></i>
                <h2>editing</h2>
                <p>
                  {" "}
                  I have a passion for Video Editing (Gaming videos, YT Vlogs,
                  Family Story edit and many other video edit clips).
                </p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="single_service wow fadeInUp" data-wow-delay="4s">
                <i className="icon-magnifying-glass"></i>
                <h2>research, analysis and design</h2>
                <p>
                  Modeling a problem before developing it.
                  <br />
                  Word processing and presentation modeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_us_area" id="ABOUT">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="about_title">
                <h2>About Me</h2>
                <img src="../../assets/images/shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4  wow fadeInLeft animated">
              <div className="single_progress_bar">
                <h2>SpringBoot - 90%</h2>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              
              <div className="single_progress_bar">
                <h2>ReactJS - 85%</h2>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  >
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div className="single_progress_bar">
                <h2>Angular - 60%</h2>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  >
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div className="single_progress_bar">
                <h2>CSS3 - 75%</h2>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  >
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">
                <strong className="font-weight-bold">
                  {" "}
                  &#123; Hello World! &#125;
                </strong>{" "}
                <br /> My name is Omar and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2015 when I decided to try editing custom Tumblr themes ??? turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!{" "}
              </p>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">
                I made a lot of native projects with PHP, Java, HTML and CSS and
                projects using frameworks and libraries like{" "}
                <strong>Symfony</strong> to make an online store for selling and
                renting bicycles also we devloped a web application to support
                Tunisian Dinar using <strong>Spring boot</strong> as backend
                framework and <strong>asp.net</strong> for the frontend ,my last
                project was bills managment application using{" "}
                <strong>spring boot and angular</strong> also i used angular to
                make phone number validator based on requirements using API and
                i worked on DevOps project{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="testimonial text-center wow fadeInUp animated"
        id="TESTIMONIAL"
      >
        <div className="container">
          <div className="icon">
            <i className="icon-quote"></i>
          </div>
          <div className="owl-carousel">
            <div className="single_testimonial text-center wow fadeInUp animated">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores
                <br /> eos qui ratione voluptatem sequi nesciunt.
              </p>
              <h4>-JOHN DOE</h4>
            </div>
            <div className="single_testimonial text-center">
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius
                <br /> modi tempora incidunt ut labore et dolore magnam aliquam
                quaerat voluptatem.
              </p>
              <h4>-JOHN SMITH</h4>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
     
      <div className="fun_facts">
        <section
          className="header parallax home-parallax page"
          id="fun_facts"
          style={{ backgroundPosition: "50% -150px" }}
        >
          <div className="section_overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-6 wow fadeInLeft animated">
                  {/* <div className="row">
	                            <div className="col-md-4">
	                                <div className="single_count">
	                                    <i className="icon-toolbox"></i>
	                                    <h3>300</h3>
	                                    <p>Project Done</p>
	                                </div>
	                            </div>
	                            <div className="col-md-4">
	                                <div className="single_count">
	                                    <i className="icon-clock"></i>
	                                    <h3>1700+</h3>
	                                    <p>Hours Worked</p>
	                                </div>                            
	                            </div>
	                            <div className="col-md-4">
	                                <div className="single_count">
	                                    <i className="icon-trophy"></i>
	                                    <h3>37</h3>
	                                    <p>Awards Won</p>
	                                </div>                            
	                            </div>
	                        </div>
            */}
                </div>
                <div className="col-md-5 col-md-offset-1 wow fadeInRight animated">
                  <div className="imac">
                    <img src="../../assets/images/imac.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="work_area" id="WORK">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="work_title  wow fadeInUp animated">
                <h1>Latest Works</h1>
                <img src="../../assets/images/shape.png" alt="" />
                <p style={{ fontSize: "30px" }}>
                  A small gallery of recent projects i've built with love  <span role="img" aria-label="heart">??????</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="../../assets/images/w1.png" alt="" />
                <div className="image_overlay">
                  <a href="/">View Full Project</a>
                  <h2>CONSOMMI TOUNSI</h2>
                  <h4>Website to support tunisian Dinar</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="../../assets/images/w6.png" alt="" />
                <div className="image_overlay">
                  <a href="https://www.wecarebyrotaract.com">View Full Project</a>
                  <h2>Wecarebyrotaract</h2>
                  <h4>Consult a mental health profetional</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="../../assets/images/w3.png" alt="" />
                <div className="image_overlay">
                  <a href="/">View Full Project</a>
                  <h2>silot project</h2>
                  <h4>Control Everything From One Place</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row pad_top">
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="../../assets/images/w4.png" alt="" />
                <div className="image_overlay">
                  <a href="/">View Full Project</a>
                  <h2>phone checker</h2>
                  <h4>check your number</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="../../assets/images/w5.png" alt="" />
                <div className="image_overlay">
                  <a href="/">View Full Project</a>
                  <h2>sociotun</h2>
                  <h4>android application</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image ">
                <img src="../../assets/images/w2.png" alt="" />
                <div className="image_overlay">
                  <a href="/">View Full Project</a>
                  <h2>veloTN</h2>
                  <h4>online store to sell and rent bycicles</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action">
        <div className="container">
          <div className="row">
            <div className="col-md-8 wow fadeInLeft animated">
              <div className="left">
                <h2>LOOKING FOR EXCLUSIVE DIGITAL SERVICES?</h2>

                <p>
                  Omar is here to help you and offers you his services whether in the field of development or otherwise.<br />
                  so please check what <a href="#SERVICE"  >Services</a> I offer and don't hesitate to contact me.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 wow fadeInRight animated">
              <div className="baton">
                <a href="#CONTACT">
                  <button type="button" className="btn btn-primary cs-btn">
                    Let's Talk
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="CONTACT">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="contact_title  wow fadeInUp animated">
                <h1>get in touch</h1>
                <img src="../../assets/images/shape.png" alt="" />
                <p style={{ fontSize: "20px" }}>
                  I???m interested in freelance opportunities ??? especially ambitious or large projects. However, if you have other request or question, don???t hesitate to use the form.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3  wow fadeInLeft animated">
              <div className="single_contact_info">
                <h2>Call Me</h2>
                <p>+216 51 589 453</p>
              </div>
              <div className="single_contact_info">
                <h2>Email Me</h2>
                <p>omar.benamor@esprit.tn</p>
              </div>
              <div className="single_contact_info">
                <h2>Address</h2>
                <p>Tunis, Tunisia</p>
              </div>
            </div>
            <div className="col-md-9  wow fadeInRight animated">
              <form className="contact-form" onSubmit={sendEmail} >
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"

                    />

                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"

                    />

                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      name="subject"

                    />

                  </div>
                  <div className="col-md-6">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="25"
                      cols="10"
                      placeholder="  Message Texts..."
                      name="message"

                    ></textarea>

                    <button

                      className="btn btn-default submit-btn form_submit"
                    >
                      SEND MESSAGE
                    </button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="work-with   wow fadeInUp animated">
                <h3>looking forward to hearing from you!</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
