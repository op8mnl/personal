import React, { useEffect, useRef, useState } from 'react';
import HorizontalScroll from "../utils/horizontal-scroll";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import website from "../assets/websitebg.png";
import Modal from "../utils/modal/modal";
import pb1 from "../assets/pb1.png";
import pb2 from "../assets/pb2.png";
import pb3 from "../assets/pb3.png";
import pb4 from "../assets/pb4.png";
import pb5 from "../assets/pb5.png";
import pw1 from "../assets/pw1.png";
import pw2 from "../assets/pw2.png";
import pw3 from "../assets/pw3.png";
import ss1 from "../assets/ss1.png";
import co1 from "../assets/co1.png";
import co2 from "../assets/co2.png";
import co3 from "../assets/co3.png";
import co4 from "../assets/co4.png";
import co5 from "../assets/co5.png";
function Skills() {
    const [modals, setModals] = useState([
        { id: 1, title: 'Personal Website', cardImage: website, wheel: [website, pw1, pw2, pw3], content: "Built as a clean and simple static react app, this personal website is a portfolio to showcase some of the skills, projects, and experiences I have gained over my professional career.", show: false },
        { id: 2, title: 'Playlist Builder', cardImage: pb1, wheel: [pb1, pb2, pb3, pb4, pb5], content: "Playlist Builder is a web-based music application crafted on a MERN (MongoDB, Express.js, React, Node.js) stack. Catering to both unauthenticated and authenticated users, the platform seamlessly integrates public playlist exploration with advanced features for authenticated users, including playlist creation, editing, and deletion. The app's versatility enables users to decide whether to share their playlists publicly or maintain a private collection.", show: false },
        { id: 3, title: 'Richmond Capital Dashboard', cardImage: website, wheel: [], content: 'The Richmond Capital Dashboard was developed for Richmond Capital a student managed fund with around 1M AUM. By utilizing various APIs, we generated insights and provided analytics into the core performance of the portfolios within Richmond Capital. The main focus of this dashboard was to provide stronger visualization of certain data points, an example of this would be creating easily digestible graphical and tabular representations of sector trends calculated through python scripts running ADX Trend Strength Indicators through a 30, 60, and 90 day period.', show: false },
        { id: 4, title: 'Course Outline Generator', cardImage: co3, wheel: [co1, co2, co3, co4, co5], content: "Course Outline Generator is a tool developed to simplify the process of creating and managing course outlines for Western University. Designed with the needs of professors, directors, and administrative positions in mind, this tool facilitates the seamless addition of graduate attributes to course outlines. Professors can easily integrate essential details, while directors and administrators gain the ability to efficiently review, approve, deny, and provide comments on these outlines. The Course Outline Generator not only streamlines the workflow of outlining courses but also ensures a collaborative and effective approach to the approval process.", show: false },
        { id: 5, title: 'Car Listing Database', cardImage: website, wheel: [], content: "Car Listing Database is a practical platform designed  to mimic the systems for vehicle owners to list their new or used cars, facilitating a straightforward buying and selling experience. Utilizing MySQL and grounded in relational database architecture principles, this project ensures efficiency and data integrity. Users can effortlessly list their vehicles, providing detailed information for potential buyers. The 'Car Listing Database' offers a secure and organized space, emphasizing simplicity and reliability for both sellers and buyers in the process of listing and purchasing cars.", show: false },
        { id: 6, title: 'Stock Dock', cardImage: website, wheel: [], content: "Stock Dock, is a tailored solution exclusively designed for All Rush Print and Apparel to streamline and automate their intricate printing job processes. Powered by Django, this project optimizes workflows, reducing manual efforts and enhancing overall productivity. 'Stock Dock' leverages the efficiency of Django to simplify the creation of printing jobs, ensuring that All Rush Print and Apparel can seamlessly manage their stock, efficiently process printing jobs, and meet client demands with utmost accuracy", show: false },
        { id: 7, title: 'Code Type', cardImage: website, wheel: [], content: "Code Type, an innovative speed typing platform currently in development, is crafted for programmers seeking a fun and engaging way to learn and reinforce commonly used algorithms. With a user-friendly interface and a diverse range of algorithmic challenges, 'Code Type' aims to make algorithmic learning enjoyable and interactive. This project is set to provide an effective method for programmers to enhance their coding skills while revisiting essential algorithms. Stay tuned as 'Code Type' evolves, promising to transform the learning experience into a dynamic and enjoyable journey for programmers of all skill levels.", show: false },
        { id: 8, title: 'Scott Story', cardImage: ss1, wheel: [ss1], content: "Scott Story is a 2D hack-and-slash platformer developed in Unity. Immerse yourself in a curated experience as you navigate through environments and engage in fast-paced combat against foes. 'Scott Story' combines gameplay with storytelling, offering players a journey through meticulously designed levels and challenging encounters. With Unity at its core, this project seamlessly blends stunning visuals, responsive controls, and an engaging narrative to deliver an unforgettable gaming experience.", show: false },
        // Add more modals as needed
    ]);

    const handleShow = (id) => {

        setModals((prevModals) =>
            prevModals.map((modal) =>
                modal.id === id ? { ...modal, show: true } : modal
            )
        );
    };

    const handleClose = (id) => {
        setModals((prevModals) =>
            prevModals.map((modal) =>
                modal.id === id ? { ...modal, show: false } : modal
            )
        );
    };
    const buildCards = modals.map((modal) => (

        <div className="col-md-4" key={modal.id} style={{ padding: "0px", marginRight: "2vw", marginBottom: "-8vh", width: "30%" }}  >
            <div className="elevatedButton" style={{ zIndex: "10", width: "100%", height: "100%", position: "inherit" }} onClick={() => handleShow(modal.id)}>
                <div className="service-box" style={{ backgroundImage: `url(${modal.cardImage})`, backgroundSize: "100%", marginBottom: "-6vh"}} >
                    <div className="service-ico">
                        <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                    </div>
                    <div className="service-content">
                        <h2 className="s-title">{modal.title}</h2>
                    </div>

                </div>
            </div>
            <Modal title={modal.title} badgeLink = {modal.link} onClose={() => handleClose(modal.id)} show={modal.show}>
                <div className="row">
                    <div className="col-lg-8">
                        <CCarousel controls >
                            {modal.wheel.map((image) =>
                            (
                                <CCarouselItem>
                                    <CImage className="d-block w-100" src={image} style={{ width: "90%", height: "90%" }} />
                                </CCarouselItem>

                            ))}
                        </CCarousel>

                    </div>
                    <div className="col-lg-4">
                        {modal.content}
                    </div>
                </div>
            </Modal>
        </div>


    )
    )
    const header = (
        <div id="hzScroll" className="row" style={{ position: 'relative', marginTop:"15%"}}>
          
                <div className="title-box text-center">
                    <h3 className="title-a">
                        Projects
                    </h3>

                    <div className="line-mf"></div>
                </div>
            
        </div>
    );
    return (
        <>

            <section id="projects" className="services-mf route" style={{ scrollMarginTop: "-0.2vh" }}>
                <div className="skillsContainer" style={{marginRight:"0px",marginLeft:"0px" ,width:"100vw"}}>
                    <HorizontalScroll header={header}>
                        <div className='cardsContainer'>
                            {buildCards}
                        </div>
                    </HorizontalScroll>
                </div>
            </section>
        </>
    )
}
export default Skills;