import React, { useEffect, useState } from 'react'

import img1 from '../Assets/slider1.jpg'
import img2 from '../Assets/slider2.jpg'
import img3 from '../Assets/slider3.jpg'

function ImageSlider() {

    const images = [img1, img2, img3]

    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto slide
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1
                    ? 0
                    : prevIndex + 1
            )

        }, 3000)

        return () => clearInterval(interval)

    }, [])

    return (

        <div className="slider-container">

            <img
                src={images[currentIndex]}
                alt="coffee slider"
                className='slider-image'
            />

            {/* DOT INDICATOR */}
            <div className="slider-dots">

                {images.map((_, index) => (

                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active-dot' : ''}`}
                    />

                ))}

            </div>

        </div>

    )
}

export default ImageSlider