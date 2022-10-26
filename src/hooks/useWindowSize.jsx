import { useState, useEffect } from "react";

export const useWindowHeight = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const sizes = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

useEffect(() => {
    window.addEventListener('resize', sizes);
    return () => window.removeEventListener('resize', sizes)
},[]);

return dimensions;

};