import React from 'react';

function Resume() {
    return (
        <section id="resume" class="resume" style={{ scrollMargin: "17.5vh" }}>
            <div class="container" data-aos="fade-up">


                <div className="col-sm-12 mt-5">
                    <div className="title-box text-center">
                        <h3 className="title-a">
                            Resume
                        </h3>

                        <div className="line-mf"></div>
                    </div>
                </div>


                <div class="row" style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
                    <div class="col-lg-12" >
                        <div class="row">
                            <div class="col-lg-4    ">
                                <h3 class="resume-title">Contact</h3>
                                <div class="resume-item pb-0">
                                    <h4>Felix Zheng</h4>
                                    <ul>
                                        <p>19 Lancashire Rd, Markham, ON </p>
                                        <p>(647) 201-8806</p>
                                        <p>Zheng.Felix@outlook.com</p>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <h3 class="resume-title">Education</h3>
                                <div class="resume-item">
                                    <h4>Bachelors of Engineering Science with Co-Op (BeSC) <br></br> Software Engineering</h4>
                                    <h5>2020 - 2025</h5>
                                    <p style={{ marginBottom: "0px" }}><em>The University Of Western Ontario, London, ON</em></p>
                                    <p>Dean's Honor List</p>
                                </div>
                            </div>
                        </div>

                        <h3 class="resume-title">Professional Experience</h3>
                        <div class="resume-item">
                            <h4>Software Development Intern, Full Stack Developer</h4>
                            <h5>May 2023 - April 2024</h5>
                            <p><em>Trackunit, London, ON </em></p>
                            <ul>
                                <li>Spearheaded the development of an Internal GraphQL layer serving 100+ endpoints using Java Spring Boot
                                    and Deploying on the CI/CD pipeline through CircleCI</li>
                                <li> Utilized Typescript to update 10,000+ resource calls from GCP to AWS S3 allowing efficient DB migration </li>
                                <li> Created 5+ MySQL and MSSQL database cleaning scripts obfuscating over 5000+ tuples across 8+ schemas
                                </li>
                                <li>Developed a marketplace app using Typescript, React, TailwindCSS, and the Trackunit Iris SDK for the Iris
                                    app marketplace serving over 100 OEMs and Rental Companies</li>
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
