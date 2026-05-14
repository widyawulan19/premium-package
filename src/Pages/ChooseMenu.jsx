import React from 'react'
import dataList from '../Data/DataList.json'
import '../Styles/ChooseLight.css'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import lineImg from '../Assets/remove-png.png'

function ChooseMenu() {
    //state
    const navigate = useNavigate();

    //function
    const navigateToWelcomePage = () =>{
        navigate('/');
    }

    const navigateCategory = (category) =>{
        navigate(`/menu-list/${category}`)
    }


  return (
    <div className='cl-container'>
        <div className="cl-header-box">
            <h4>BORCELLE</h4>
            <span>Coffee Shop</span>
        </div>

         <div className="cl-header">
            <h2>Find Your Perfect Taste</h2>
            <p>Explore Our Menu and choose what you’re craving today.</p>
        </div>

        <div className="cl-line">
            <img src={lineImg} alt="Line PNG" />
        </div>

        <div className="cl-card">
            {dataList.map((menu, index) =>(
                <div className="cl-box" onClick={() => navigateCategory(menu.category)}>
                    <span>{index + 1} .</span>
                    <h3>{menu.category}</h3>
                </div>
            ))}
        </div>

        <div className="cl-btn">
            <button onClick={navigateToWelcomePage}>
                Back
            </button>
        </div>

        <div className="cl-footer">
            <p>CREATE BY LUMINOUS.ID</p>
        </div>
    </div>
  )
}

export default ChooseMenu