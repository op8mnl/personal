
import React from 'react';
import bgImg from '../assets/bgcontact.jpg';
import git from '../assets/githubIcon.png';
import linkedin from '../assets/linkedinIcon.png';
import resume from '../assets/resumeIcon.png';
import email from '../assets/emailIcon.png';
const Contact = () => {
    return (
        <section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: `url(${bgImg})`, scrollMargin: "-1.5vh" }}>
            <div class="overlay-mf"></div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="contact-mf">
                            <div id="contact" class="box-shadow-full">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="title-box-2">
                                            <h5 class="title-left2">
                                                Send me a message!
                                            </h5>
                                        </div>
                                        <div>
                                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                                <div class="row">
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 text-center my-3">
                                                        <div class="sent-message">{"Your message has been sent. Thank you!"}</div>
                                                    </div>
                                                    <div class="col-md-12 text-center">
                                                        <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="title-box-2 pt-4 pt-md-0">
                                            <h5 class="title-left1">
                                                Get in Touch
                                            </h5>
                                        </div>
                                        <div class="more-info">
                                            <p class="lead">
                                                Let's get in touch! Please reach out to me through LinkedIn or via email.
                                            </p>

                                        </div>
                                        <div class="socials">
                                            <ul>
                                                <li><a href="https://www.linkedin.com/in/felixzhengg/"><span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <img src={linkedin} style={{ width: "50%", height: "50%", opacity: "1" }} />
                                                </span></a></li>
                                                <li><a href="https://github.com/op8mnl"><span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <img src={git} style={{ width: "60%", height: "60%", opacity: "1" }} />
                                                </span></a></li>
                                                <li><a href="mailto: zheng.felix@outlook.com"><span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <img src={email} style={{ width: "60%", height: "60%", opacity: "1" }} />
                                                </span></a></li>
                                                <li><a href="https://drive.google.com/file/d/18nPoe38oPMEVvk82rAZD3Qh22pHO3Oa4/view?usp=sharing"><span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <img src={resume} style={{ width: "60%", height: "60%", opacity: "1" }} />
                                                </span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
