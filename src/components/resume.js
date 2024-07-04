import React from 'react';
import useMobileRendering from '../utils/useMobileRendering';
function Resume() {
    return (
        <section id="resume" class="resume box-shadow-full" style={{ marginTop: "15vh", marginLeft:`${useMobileRendering() ? "0vw":"10vw"}`,marginRight:`${useMobileRendering() ? "0vw":"10vw"}` }}>
            <div class="container" data-aos="fade-up">


                <div className="col-sm-12 mt-5">
                    <div className="title-box text-center">
                        <h3 className="title-a">
                            Experiences
                        </h3>

                        <div className="line-mf"></div>
                    </div>
                </div>


                <div class="row" style={{ paddingLeft: "3vw", paddingRight: "3vw" }}>
                    <div class="col-lg-12" >
                        <div class="row">
                            <div class="col-lg-12">
                                <h3 class="resume-title">Education</h3>
                                <div class="resume-item">
                                    <h4>Bachelors of Engineering Science with Co-Op (BeSC) Software Engineering</h4>
                                    <h5>2020 - 2025</h5>
                                    <p style={{ marginBottom: "0px" }}><em>The University Of Western Ontario, London, ON</em></p>
                                    <p>Dean's Honor List</p>
                                </div>
                            </div>
                        </div>

                        <h3 class="resume-title">Professional Experience</h3>
                        <div class="resume-item">
                            <h4>Software Development Intern, Full Stack Developer</h4>
                            <h5>May 2023 - August 2024</h5>
                            <p><em>Trackunit, London, ON </em></p>
                            <ul>
                                <li> Corrected billing and payment data integrity issues within installer records by addressing 5 mission-critical issues, resulting in the resolution of 37 errors exceeding $4000 in value and potential future losses.</li>
                                <li> Spearheaded the development of a team internal GraphQL layer serving 100+ endpoints using Java Spring Boot, resulting in a 5x time reduction for developers when implementing API calls.</li>
                                <li> Utilized Typescript to update 10,000+ resource calls from GCP to AWS S3 allowing efficient DB migration. </li>
                                <li> Maintained Asana scripts which automatically parsed inbound emails to populate records hourly.</li>
                                <li> Created MySQL and MSSQL database cleaning scripts obfuscating over 5000+ tuples across 8+ schemas</li>
                                <li> Developed a web application for an internal marketplace, utilizing an internal SDK to remotely monitor vehicle fuel levels, enhancing fleet monitoring and management for rental companies and OEMs.</li>
                            </ul>
                        </div>
                        <div class="resume-item">
                            <h4>Software Developer, Full Stack Developer</h4>
                            <h5>September 2022 - December 2022</h5>
                            <p><em>All Rush Print and Apparel, Calgary, AB</em></p>
                            <ul>
                                <li> Interviewed employees and executives to create a comprehensive list of inefficiencies and features, ultimately
                                    creating a full-stack software solution that eliminated 25% of internal document creation time</li>
                                <li>Developed a Django based web application using a variety of relevant frameworks in cohesion, leading to a
                                    dynamic application that is specifically tailored to the business’ growing needs</li>
                            </ul>
                        </div>
                        <div class="resume-item">
                            <h4>Software Developer Intern, Frontend Developer</h4>
                            <h5>May 2022 - August 2022</h5>
                            <p><em>Jobster.IO, Toronto, ON</em></p>
                            <ul>
                                <li>Fixed 50% of open bugs at the time of employment resulting in improved user experience
                                </li>
                                <li>Developed a fully interactive page using React in accordance to the design team’s specifications
                                </li>
                                <li>Led a team of 4 engineers to create a solution design document outlining the proposed interview preparation
                                    software, resulting in a successful pitch to the project supervisor
                                </li>
                                <li>Drafted a prototype web app design with the design team, and implemented the Python-Flask backend,
                                    creating the required RESTful APIs as required by the front end functionalities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Resume;
