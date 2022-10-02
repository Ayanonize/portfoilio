import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handelSubmit = (e) => {
    e.preventDefault();
    var templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };
    emailjs.init('bDONJ_V2iMWsX7F6e');

    emailjs.send('service_v0ssk3f', 'template_zjl8knb', templateParams)
      .then(function (response) {
        toast('Success! We Will Reply You Soon', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setMessage('')
        setEmail('')
        setName('');
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <title> Ayanonize</title>

      </Head>
      <main>

        <div className="slider-area" id="main">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-10 col-md-10 col-sm-10">

                  <div className="hero__caption">
                    <h1 className="text-center">Ayan.</h1>
                    <p>Full Stack Web</p>
                    <h3 className="cd-headline letters scale">Developer</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="about-area section-padding40" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-10">
                <div className="about-caption mb-50">

                  <div className="section-tittle mb-35">
                    <h2>About</h2>
                  </div>
                  <p>For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.</p>

                  <p>At the moment, this journey has br/ought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="assets/img/gallery/about1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row pt-40">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="experience">
                  <span>06 years</span>
                  <p>of experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="experience">
                  <span>20+</span>
                  <p>Technologies</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="experience">
                  <span>Full-Stack</span>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="may-about section-padding40">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle2 mb-30">
                  <h2>Experience</h2>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="single-about">
                  <div className="tittle-experience">
                    <h3>As A Developer At Simply Social</h3>
                    <p>Jan 18 2018</p>
                  </div>
                  <div className="experience-link">
                    <a href="http://www.simplysocial.co.in" rel="noreferrer" target={'_blank'}><span>Simply Social<i className="fas fa-external-link-alt"></i></span></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="single-about">
                  <div className="tittle-experience">
                    <h3>Founder Of Lynkuid</h3>
                    <p>Sep 25 2022</p>
                  </div>
                  <div className="experience-link">
                    <a href="https://www.lynkuid.com" rel="noreferrer" target={'_blank'}><span>Lynkuid<i className="fas fa-external-link-alt"></i></span></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="our-services pt-top section-bg1" id="Portfolio">
          <div className="container">
            <div className="rwo">
              <div className="col-xl-12">
                <div className="section-tittle mb-75 text-center">
                  <h2>My Portfolio</h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <a href="https://www.lynkuid.com" rel="noreferrer" target={'_blank'}>

                  <div className=" mb-30 single-services">
                    <img src="/lynkuid.png" alt="" />
                    <div className="services-cap">
                      <h5>Lynkuid.com</h5>
                      <p>Founder Of Lynkuid</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <a href="https://signal-app.vercel.app" rel="noreferrer" target={'_blank'}>

                  <div className=" mb-30 single-services">
                    <img src="/signal.png" alt="" />
                    <div className="services-cap">
                      <h5>signal app</h5>
                      <p>Worked As A Developer</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <a href="https://www.celibgram.com" rel="noreferrer" target={'_blank'}>
                  <div className=" mb-30 single-services">
                    <img src="/posepop.png" alt="" />
                    <div className="services-cap">
                      <h5>PosePop.</h5>
                      <p>Worked As A Developer</p>
                    </div>
                  </div>
                </a>
              </div>


              <div className="col-lg-4 col-md-4 col-sm-6">
                <a href="https://priceless-kilby-e131e8.netlify.app" rel="noreferrer" target={'_blank'}>
                  <div className=" mb-30 single-services">
                    <img src="/todo.png" alt="" />
                    <div className="services-cap">
                      <h5>ToDo App</h5>
                      <p>Personal Project</p>
                    </div>
                  </div>
                </a>
              </div>


              <div className="col-lg-4 col-md-4 col-sm-6">
                <a href="https://cocky-shaw-8a7a8b.netlify.app/" rel="noreferrer" target={'_blank'}>
                  <div className=" mb-30 single-services">
                    <img src="/castinger.png" alt="" />
                    <div className="services-cap">
                      <h5>Castinger</h5>
                      <p>Personal Project</p>
                    </div>
                  </div>
                </a>
              </div>


              <div className="col-lg-4 col-md-4 col-sm-6">
                <a href="https://neglet.vercel.app" rel="noreferrer" target={'_blank'}>
                  <div className=" mb-30 single-services">
                    <img src="/neglet.png" alt="" className="h-[150px] mx-auto" />
                    <div className="services-cap">
                      <h5>Neglet</h5>
                      <p>Personal Project</p>
                    </div>
                  </div>
                </a>
              </div>

            </div>


          </div>
        </div>


        <div className="our-services pt-top section-bg1" id="Certificates">
          <div className="container">
            <div className="rwo">
              <div className="col-xl-12">
                <div className="section-tittle mb-75 text-center">
                  <h2>My Certificates</h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <a href="https://www.udemy.com/certificate/UC-d2573289-9aa4-48c7-892b-6a7a8897c1d3/" rel="noreferrer" target={'_blank'}>

                  <div className=" mb-30 single-services">
                    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-d2573289-9aa4-48c7-892b-6a7a8897c1d3.jpg" alt="" />
                  </div>
                </a>
              </div>

            </div>


          </div>
        </div>


        <section className="contact-section" id="contact">
          <div className="container">

            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" id="contactForm" noValidate="noValidate" onSubmit={handelSubmit}>
                  <div className="row">

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="name" id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="email" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder=" Enter Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-home"></i></span>
                  <div className="media-body">
                    <h3>71, Shanti Nagar, Near Joshi Marg Jhotwara, Jaipur</h3>
                    <p>India – 302012</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                  <div className="media-body">
                    <h3>9928136009</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-email"></i></span>
                  <div className="media-body">
                    <h3>ayanonize@gmail.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
