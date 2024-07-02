import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
    style: { height: `${dynamicHeight}px` }
}))`
  position: relative;
  width: 100vw;
  marginBottom:10rem;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 80vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
    style: { transform: `translateX(${translateX}px)` }
}))`
  position: absolute;
  height: 30%;
  will-change: transform;
`;

const calcDynamicHeight = objectWidth => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh - 100;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
    window.addEventListener("scroll", () => {
        const offsetTop = -ref.current.offsetTop;
        console.log(offsetTop)
        setTranslateX(offsetTop);
        // if (offsetTop < 0 && offsetTop > -1755) {
        //     document.getElementById("hzScroll").classList.remove("hidden");
      
        // }
        // else {
        //     document.getElementById("hzScroll").classList.add("hidden");
        //     document.getElementById("hzScroll").style.animation = 'fadeOut 0.2s ease-in-out forwards'
        // }
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, header }) => {
    const [dynamicHeight, setDynamicHeight] = useState(null);
    const [translateX, setTranslateX] = useState(0);

    const containerRef = useRef(null);
    const objectRef = useRef(null);

    const resizeHandler = () => {
        handleDynamicHeight(objectRef, setDynamicHeight);
    };

    useEffect(() => {
        handleDynamicHeight(objectRef, setDynamicHeight);
        window.addEventListener("resize", resizeHandler);
        applyScrollListener(containerRef, setTranslateX);

    }, []);
    return (
        <TallOuterContainer dynamicHeight={dynamicHeight}>
            < StickyInnerContainer ref={containerRef}>
            {header}
                <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
                    {children}
                </HorizontalTranslateContainer>
            </StickyInnerContainer>
        </TallOuterContainer >
    );
};
