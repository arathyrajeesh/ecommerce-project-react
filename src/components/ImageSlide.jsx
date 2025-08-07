import React, { useState } from 'react';
import { imageData } from '../data/ImageData';
import '../styles/ImageSlider.css'



const imagesPerPage = 4;

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < imageData.length - imagesPerPage) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); 
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(imageData.length - imagesPerPage);
        }
    };

    return (
        <div className="slider-section">
            <h2 className="slider-header">FOLLOW US #MADAGASCAR</h2>
            <div className="slider-container">
                <button className="slider-nav prev" onClick={handlePrev}>&lt;</button>
                <div className="slider-images-wrapper" style={{ transform: `translateX(-${currentIndex * (100 / imagesPerPage)}%)` }}>
                    {imageData.map((image, index) => (
                        <div 
                            key={index} 
                            className="slider-image-card"
                            style={{ flexBasis: `${100 / imagesPerPage}%` }}
                        >
                            <img src={image.url} alt={`Slide ${index}`} className="slider-image" />
                            <div className="slider-image-overlay">
                                <p>{image.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="slider-nav next" onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
};

export default ImageSlider;
