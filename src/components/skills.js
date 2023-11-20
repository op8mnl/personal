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
function Skills() {
    const [modals, setModals] = useState([
        { id: 1, title: 'Personal Website', cardImage: website, wheel: [website, pw1, pw2, pw3], content: "This personal website serves as a comprehensive portfolio, providing a glimpse into the diverse array of projects, skills, and experiences that define my professional identity. Immerse yourself in a visual narrative that highlights my proficiency in various programming languages, frameworks, and technologies. From innovative web applications to robust software solutions, each project reflects my commitment to creativity, problem-solving, and delivering impactful results. As you navigate through my portfolio, you'll discover not only the tangible outcomes of my work but also the strategic thinking, collaboration, and adaptability that underscore my approach. ", show: false },
        { id: 2, title: 'Playlist Builder', cardImage: website, wheel: [pb1, pb2, pb3, pb4, pb5], content: "", show: false },
        { id: 3, title: 'Car Listing Database', cardImage: website, wheel: [], content: 'Yee yee', show: false },
        { id: 4, title: 'Scott Story', cardImage: website, wheel: [], content: 'Yee yee', show: false },
        { id: 5, title: 'Stock Dock', cardImage: website, wheel: [], content: 'Yee yee', show: false },
        { id: 6, title: 'Code Type', cardImage: website, wheel: [], content: 'Yee yee', show: false },
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

        <div className="col-md-4" key={modal.id} style={{ padding: "0px", marginRight: "2rem", marginBottom: "-8rem", width: "45%" }}  >
            <div className="elevatedButton" style={{ zIndex: "10", width: "100%", height: "100%", position: "inherit" }} onClick={() => handleShow(modal.id)}>
                <div className="service-box" style={{ backgroundImage: `url(${modal.cardImage})`, backgroundSize: "110%" }} >
                    <div className="service-ico">
                        <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                    </div>
                    <div className="service-content">
                        <h2 className="s-title">{modal.title}</h2>
                    </div>

                </div>
            </div>
            <Modal title={modal.title} onClose={() => handleClose(modal.id)} show={modal.show}>
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
        <div id="hzScroll" className="row scrollheader hidden" style={{ position: "fixed", top: "0vh", left: "5vw" }}>
            <div className="col-sm-12">
                <div className="title-box text-center">
                    <h3 className="title-a">
                        Projects
                    </h3>

                    <div className="line-mf"></div>
                </div>
            </div>
        </div>
    );
    return (
        <>

            <section id="projects" className="services-mf route" style={{ scrollMarginTop: "-0.2vh" }}>
                <div className="container">
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