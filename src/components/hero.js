import background from '../assets/hero-bg-me.png';
import Typed from '../utils/typed';
function Hero() {
    return (
        <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        {/* <p className="display-6 color-d">Hello, world!</p> */}
                        <h1 className="hero-title mb-4">I am Felix Zheng</h1>
                        <p className="hero-subtitle">
                            <Typed
                                strings={[
                                    'Student',
                                    'Developer',
                                    'Engineer']}
                                loop >
                                <input type="text" />
                            </Typed>
                        </p>
                        {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;