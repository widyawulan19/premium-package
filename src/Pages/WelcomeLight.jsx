import React from 'react'
import '../Styles/WelcomeLight.css'
import { IoChevronForwardOutline,IoChatbubbleOutline, IoLocateOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import img from '../Assets/logo.png'
import { IoIosArrowForward } from 'react-icons/io';

function WelcomeLight() {

    // state 
    const navigate = useNavigate();

    // FUNCTION 
    const navigateToMenu = () =>{
        navigate('/choose-menu')
    }

  return (
    <div className='welcome-light-container'>

        <div className="light-title">
            <h1>BORCELLE</h1>
            <h4>COFFEE SHOP</h4>
        </div>

        <div className="light-image">
            <img src={img} alt="" />
        </div>

        <div className="light-oh">
            <h4>OPEN HOUR </h4>
            <p>10.00 AM - 10.00 PM </p>
        </div>

        <div className="light-btn">
            <button onClick={navigateToMenu}>
                Discover Our Menu
                <IoChevronForwardOutline/>
            </button>

            <button className='btn-location'>
                <a href="https://www.google.com/maps/dir/?api=1&destination=FOJA+COFFEE" target="_blank" rel="noopener noreferrer">
                    Get Directions To Foja Coffee
                </a>
            </button>

        </div>

        <div className="light-footer">
            <p>CREATE BY LUMINOUS.ID</p>
        </div>

        
    </div>
  )
}

export default WelcomeLight