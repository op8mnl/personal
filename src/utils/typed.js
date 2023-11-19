import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypeWrapper(props) {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: props.strings, // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 2000,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        }, []);

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (

        <span className="typed" ref={el}></span>

    );
}