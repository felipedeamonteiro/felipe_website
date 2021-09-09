import { useState, useEffect } from "react";

const mobileScreenMax = 576;
const sm = 768;
const tabletScreenMax = 992;
const lg = 1100;
const xl = 1680;


export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
};

export const useDeviceScreenSize = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const size = useWindowSize();
    const windowWidth = size.width;

    useEffect(() => {
        if (windowWidth < mobileScreenMax) {
            setIsMobile(true);
            setIsTablet(false);
        } else if (windowWidth < tabletScreenMax && windowWidth > mobileScreenMax) {
            setIsMobile(false);
            setIsTablet(true);
        } else if (windowWidth > tabletScreenMax) {
            setIsMobile(false);
            setIsTablet(false);
        }
    }, [windowWidth]);

    return {
        isMobile: isMobile,
        isTablet: isTablet,
    };
};