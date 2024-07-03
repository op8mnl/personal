import background from '../assets/hero-bg-me.png';
import Typed from '../utils/typed';
function Hero() {
    return (
        <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="hero-title mb-4">I am Felix Zheng</h1>
                        <p className="hero-subtitle">
                            <Typed
                                strings={[
                                    'Student',
                                    'Developer',
                                    'Engineer',
                                    'Sports Enthusiast']}
                                loop >
                                <input type="text" />
                            </Typed>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;