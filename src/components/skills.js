import React, { useEffect, useRef, useState } from 'react';
import HorizontalScroll from "../utils/horizontal-scroll";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import website from "../assets/websitebg.png";
import Modal from "../utils/modal/modal";
import { Badge } from 'react-bootstrap';
import useMobileRendering from '../utils/useMobileRendering';
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
import ct1 from "../assets/ct1.png";
import rcp1 from "../assets/rcp1.png";
import rcp2 from "../assets/rcp2.png";
import rcp3 from "../assets/rcp3.png";
import sd1 from "../assets/sd1.png";
import sd2 from "../assets/sd2.png";
import sd3 from "../assets/sd3.png";
import sd4 from "../assets/sd4.png";
import cld1 from "../assets/cld1.png";
import cld2 from "../assets/cld2.png";
function Skills() {
    const isMobile = useMobileRendering();
    const [modals, setModals] = useState([
        { id: 1, title: 'Personal Website',dark:true, cardImage: website, wheel: [pw1, pw2, pw3],badgeWheel:["Complete","Public","React","Bootstrap"],badgeLink:"https://github.com/op8mnl/personal", content: "Built as a clean and simple static react app, this personal website is a portfolio to showcase some of the skills, projects, and experiences I have gained over my professional career.", show: false },
        { id: 2, title: 'Playlist Builder',dark:false, cardImage: pb1, wheel: [pb1, pb2, pb3, pb4, pb5],badgeWheel:["Complete","Public","MongoDB","React","NodeJS","ExpressJS","RESTful","Client-Server", "Firebase Auth"],badgeLink:"https://github.com/op8mnl/Music-Manager", content: "Playlist Builder is a web-based music application developed on a MERN (MongoDB, Express.js, React, Node.js) stack. Catering to both unauthenticated and authenticated users, the platform integrates public playlist exploration with administrative features for authenticated users, including playlist creation, editing, and deletion.", show: false },
        { id: 3, title: 'Richmond Capital Dashboard',dark:true, cardImage: rcp1, wheel: [rcp1,rcp2,rcp3],badgeWheel:["In Development","Private","MongoDB","React","Docker","FastAPI","RESTful","OAuth 2.0","Python","Client-Server"],badgeLink:null, content: 'The Richmond Capital Dashboard is currently being developed for Richmond Capital, a student managed fund with around 1M AUM. By utilizing various APIs, we generated insights and provided analytics into the core performance of the portfolios within Richmond Capital. The main focus of this dashboard was to provide stronger visualization of certain data points, an example of this would be creating easily digestible graphical and tabular representations of sector trends calculated through python scripts running ADX Trend Strength Indicators through a 14 and 30 day period. RCP Dashboard was built with a custom stack of MongoDB, React, and FastAPI, it leverages OAuth 2.0 to handle user authentication and data hashing.', show: false },
        { id: 4, title: 'Stock Dock',dark:true, cardImage: sd1, wheel: [sd1,sd2,sd3,sd4],badgeWheel:["Complete","Public","PostgreSQL","Django","Python","PDF Read/Write"],badgeLink:"https://github.com/noahj9/StockDock", content: "Stock Dock, is a tailored solution designed for All Rush Print and Apparel to streamline and automate their printing job processes. Powered by Django, this project optimizes workflows, reducing manual efforts and enhancing overall productivity through the use of PDF reading and writing support within the software.", show: false },
        { id: 5, title: 'Course Outline Generator',dark:true, cardImage: co3, wheel: [co1, co2, co3, co4, co5],badgeWheel:["Complete","Private","MongoDB","React","NodeJS","ExpressJS","RESTful","Client-Server","PDF Read/Write"],badgeLink:null, content: "Course Outline Generator is a tool developed to simplify the process of creating and managing course outlines for Western University. Designed with the needs of professors, directors, and administrative positions in mind, this tool facilitates the seamless addition of graduate attributes to course outlines. Professors can easily integrate essential details, while directors and administrators gain the ability to efficiently review, approve, deny, and provide comments on these outlines. The Course Outline Generator not only streamlines the workflow of outlining courses but also ensures a collaborative and effective approach to the approval process.", show: false },
        { id: 6, title: 'Car Listing Database',dark:true, cardImage: cld1, wheel: [cld1,cld2],badgeWheel:["Complete","Public","MySQL","Javascript","DB Architecture"],badgeLink:"https://github.com/op8mnl/Car-listing-database", content: "Car Listing Database is a practical platform designed to mimic the systems for vehicle owners to list their new or used cars, facilitating a straightforward buying and selling experience. Utilizing MySQL and heavily focused in relational database architecture principles, this project ensures efficiency and data integrity. Users can list their vehicles, providing detailed information for potential buyers. The 'Car Listing Database' offers an organized space, emphasizing simplicity and reliability for both sellers and buyers in the process of listing and purchasing cars.", show: false },
        { id: 7, title: 'Scott Story',dark:true, cardImage: ss1, wheel: [ss1],badgeWheel:["Complete","Private","Unity","C#","2D-Platformer"],badgeLink:null, content: "Scott Story is a 2D hack-and-slash platformer developed in Unity. Immersed in a curated fantasy experience you navigate through environments and engage in fast-paced combat against foes. Scott Story was my first real attempt at developing a game and learning more about scripting.", show: false },
        { id: 8, title: 'Code Type',dark:false, cardImage: ct1, wheel: [ct1],badgeWheel:["In Development","Public","MongoDB","React","NodeJS","ExpressJS","Client-Server"],badgeLink:"https://github.com/thnxs/codetype", content: "Code Type, a speed typing platform currently in development, is for programmers seeking a fun and engaging way to learn and reinforce commonly used algorithms. With a user-friendly interface and a diverse range of common algorithmic challenges, 'Code Type' aims to make algorithmic learning enjoyable and interactive. This project is set to provide an effective method for programmers to enhance their coding skills while revisiting essential algorithms. Stay tuned as 'Code Type' evolves, changing the leaning dynamic and creating a more enjoyable journey for programmers of all skill levels.", show: false },
        
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
                <div className={isMobile ? "service-box mobile" : "service-box"} style={{ backgroundImage: `url(${modal.cardImage})`, backgroundSize: "100%", marginBottom: "-6vh"}} >
                    <div className="service-ico">
                        <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                    </div>
                    <div className="service-content">
                        <h2 className="s-title">{modal.title}</h2>
                    </div>

                </div>
            </div>
            <Modal title={modal.title} badgeLink = {modal.badgeLink} onClose={() => handleClose(modal.id)} show={modal.show}>
                <div className="row">
                    <div className="col-lg-7">
                        <CCarousel interval={false} wrap dark={modal.dark} controls={modal.wheel.length > 1 ? true : false} >
                            {modal.wheel.map((image) =>
                            (
                                <CCarouselItem>
                                    <CImage className="d-block w-100" src={image} style={{height:"auto"}} />
                                </CCarouselItem>

                            ))}
                        </CCarousel>

                    </div>
                   
                        <div className="col-lg-5 d-flex flex-column justify-content-between mb-3">
                            <div className="row">
                                <div>
                                    {modal.content}
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="d-flex justify-content-center flex-wrap" style={{width:"80%"}}>
                                        <Badge style={{marginLeft:"0.1vw",marginRight:"0.1vw",marginTop:"0.1vh",marginBottom:"0.1vh"}} bg={modal.badgeWheel[0] === "Complete" ? "success" : "danger"}>{modal.badgeWheel[0]}</Badge>
                                        <Badge style={{marginLeft:"0.1vw",marginRight:"0.1vw",marginTop:"0.1vh",marginBottom:"0.1vh"}} bg="primary">{modal.badgeWheel[1]}</Badge>
                                        {modal.badgeWheel.slice(2,modal.badgeWheel.length).map((badge)=>(
                                            <Badge style={{marginLeft:"0.1vw",marginRight:"0.1vw",marginTop:"0.1vh",marginBottom:"0.1vh"}} bg="secondary">{badge}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
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