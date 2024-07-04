import { ReactComponent as AboutSVG } from '../assets/developer-svg.svg';
import React, { useEffect, useRef, useState } from 'react';
import githubIcon from '../assets/github.png';
import useMobileRendering from '../utils/useMobileRendering.js';
function About() {

    const image = useRef(null);

    const [isVisible, setVisible] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [userName, setUserName] = useState(null);
    const [login, setLogin] = useState(null);
    const [repoCount, setRepoCount] = useState(null);
    const [followerCount, setFollowerCount] = useState(null);
    const [followingCount, setFollowingCount] = useState(null);

    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Element is visible
                    setVisible(true)
                } else {
                    // Element is not visible
                    setVisible(false)
                }
            });
        });

        observer.observe(image.current);

        (async () => {
            const raw = await fetch('https://api.github.com/users/op8mnl', {})
            const json = await raw.json()
            setAvatarUrl(json.avatar_url)
            setUserName(json.name)
            setLogin(json.login)
            setRepoCount(json.public_repos)
            setFollowerCount(json.followers)
            setFollowingCount(json.following)
            console.log(json)
        })();
    }, [])

    return (
        <section id="about" className="about-mf sect-pt4 route" style={{ scrollMarginTop: "7vh" ,marginLeft:`${useMobileRendering() ? "0vw":"10vw"}`,marginRight:`${useMobileRendering() ? "0vw":"10vw"}` }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row" >
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img" ref={image}>
                                                {isVisible ? <AboutSVG /> : <AboutSVG className='hidden' />}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7" >
                                            <div className="resume">
                                                <h3 class="resume-title">Contact</h3>
                                                <div class="resume-item pb-0">
                                                    <ul>
                                                        <p>19 Lancashire Rd, Markham, ON </p>
                                                        <p>(647) 201-8806</p>
                                                        <p>Zheng.Felix@outlook.com</p>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{ "marginRight": "auto" }}>
                                        <div className="box-shadow-hover round github" >
                                            <img className="transparency" src={githubIcon} />
                                            <div className='boxcol'>
                                                <a target="_blank" href='https://github.com/op8mnl'>
                                                    <img className="icon" src={avatarUrl} />
                                                </a>
                                            </div>


                                            <div className='boxcol' style={{ "marginTop": "1vh", "marginLeft": "0.5vw", "maxWidth": "100%" }}>
                                                <b style={{ "marginLeft": "5%" }}>{login}</b>
                                                <div style={{ "marginLeft": "5%" }}>{userName}</div>
                                                <a target="_blank" href="https://github.com/op8mnl?tab=repositories"><input type='button' className="github-box" value={`Repositories:${repoCount}`}></input></a>
                                                <div style={{ "marginLeft": "5%" }}>{`Following: ${followingCount}`}</div>
                                                <div style={{ "marginLeft": "5%" }}>{`Followers: ${followerCount}`}</div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="row" style={{ "marginRight": "auto" }}>
                                        <div className="box-shadow-hover round"></div>
                                    </div> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    About me
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                I'm Felix Zheng, a dedicated software engineering student in my final year at Western University.
                                            </p>
                                            <p className="lead">
                                                I am passionate about expanding my knowledge through constant exposure to new technologies and practical applications whether that be from working as a software developer or from developing personal projects.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
export default About;