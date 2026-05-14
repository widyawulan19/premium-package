import React from 'react'
import '../Styles/ChooseLight.css'
import dataMenu from '../Data/DataMenu.json'
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import img from '../Assets/icon.png'

function ChooseLight() {
    // state 
    const navigate = useNavigate();

    //function
    const navigateToWelcomePage = () =>{
        navigate('/')
    }

    const navigateToMenu = (category) =>{
        navigate(`/menu-light/${category}`)
    }

  return (
    <div className='cl-container'>
         <div className="cl-header">
            <h2>Find Your Perfect Taste</h2>
            <p>Explore Our Menu and choose what you’re craving today.</p>
        </div>

        <div className="cl-card">
            {dataMenu.map((menu, index) =>(
                <div className="cl-box" onClick={() => navigateToMenu(menu.category)}>
                    <span>{index + 1} .</span>
                    <h3>{menu.category}</h3>
                </div>
            ))}
        </div>

        <div className="cl-btn">
            <button onClick={navigateToWelcomePage}>
                <IoChevronBackOutline/> Back
            </button>
        </div>

        <div className="cl-footer">
            <img src={img} alt="icon png" />
        </div>
    </div>
  )
}

export default ChooseLight