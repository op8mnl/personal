import logoLight from '../assets/logo-light.png';
import { useEffect } from 'react';


function Header() {

    useEffect(() => {

        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        let navbarlinks = select('#navbar .scrollto', true)
        let selectHeader = select('#header')

        const navbarlinksActive = () => {
            let position = window.scrollY + 200
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return
                let section = select(navbarlink.hash)
                if (!section) return
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active')
                } else {
                    navbarlink.classList.remove('active')
                }
            })
        }

        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }

        window.addEventListener('scroll', navbarlinksActive)
        window.addEventListener('scroll', headerScrolled)
        return () => {
            window.removeEventListener('scroll', navbarlinksActive);
            window.removeEventListener('scroll', headerScrolled);
        };
    }, []);


    return (
        <header id="header" className="fixed-top" >
            <div className="container d-flex align-items-center justify-content-between">

                {/* <h1 className="logo"><a style={{ textDecoration: "none" }} href="index.html">DevFolio</a></h1> */}
                <a href="index.html" className="logo"><img src={logoLight} alt="" className="img-fluid" /></a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#projects">Projects</a></li>
                        <li><a className="nav-link scrollto " href="#resume">Resume</a></li>
                        <li><a className="nav-link scrollto " href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header >
    );
}

export default Header;