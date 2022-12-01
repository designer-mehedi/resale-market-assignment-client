import React from 'react';
import hero from "../../../assets/hero.png"

const Banner = () => {
    return (
        <div className="lg:py-72 py-32" style={{
            background:  `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            
        </div>
    );
};

export default Banner;