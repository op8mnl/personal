import { useState, useEffect } from 'react';
import counterIMG from '../assets/counter.jpg';
import PureCounter from "@srexi/purecounterjs";
import briefcaseIcon from '../assets/briefcaseIcon.png';
import clockIcon from '../assets/clockIcon.png';
import checkmarkIcon from '../assets/checkmarkIcon.png';
import consoleIcon from '../assets/consoleIcon.png';

function Counter() {
    const [worksCompleted, setWorksCompleted] = useState(0);
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [totalClients, setTotalClients] = useState(0);
    const [awardsWon, setAwardsWon] = useState(0);

    useEffect(() => {
        setWorksCompleted(3);
        setYearsOfExperience(20);
        setTotalClients(5);
        setAwardsWon(2);
        new PureCounter();
    }, []);

    return (
        <div className="section-counter paralax-mf bg-image mt-5" style={{ backgroundImage: `url(${counterIMG}` }}>
            <div className="overlay-mf"></div>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={briefcaseIcon} style={{ width: "70%", height: "70%", opacity: "0.6" }} />
                                </span>
                            </div>
                            <div className="counter-num">
                                <p className="counter purecounter " data-purecounter-end={worksCompleted}>{worksCompleted}</p>
                                <span className="counter-text">YEARS OF EXPERIENCE</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={clockIcon} style={{ width: "70%", height: "70%", opacity: "0.6" }} />
                                </span>
                            </div>
                            <div className="counter-num">
                                <p className="counter purecounter" data-purecounter-end={yearsOfExperience}>{yearsOfExperience}</p>
                                <span className="counter-text">MONTHS INTERNSHIP EXPERIENCE</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={checkmarkIcon} style={{ width: "70%", height: "70%", opacity: "0.6" }} />
                                </span>
                            </div>
                            <div className="counter-num">
                                <p className="counter purecounter" data-purecounter-end={totalClients}>{totalClients}</p>
                                <span className="counter-text">PROJECTS COMPLETED</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={consoleIcon} style={{ width: "70%", height: "70%", opacity: "0.6" }} />
                                </span>
                            </div>
                            <div className="counter-num">
                                <p className="counter purecounter" data-purecounter-end={awardsWon}>{awardsWon}</p>
                                <span className="counter-text">PROJECTS IN DEVELOPMENT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Counter;