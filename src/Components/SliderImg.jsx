import React, { useEffect, useState } from 'react'
import img1 from '../Assets/voucer1.png'
import img2 from '../Assets/voucer2.png'
import img3 from '../Assets/voucer3.png'
import '../Styles/SliderImg.css'

function SliderImg() {
    // state 
    const images = [img1, img2, img3]
    const [currentIndex, setCurrentIndex] = useState(0);

    //  Auto slide
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

export default SliderImg