import React from 'react'
import '../Styles/MenuLight.css'
import { useNavigate, useParams } from 'react-router-dom'
import img from '../Assets/appetizer.jpeg'
import img2 from '../Assets/maincourse.jpeg'
import img3 from '../Assets/cake.jpeg'
import img4 from '../Assets/chicken-pie.jpeg'
import img5 from '../Assets/salad.jpeg'
import img6 from '../Assets/drinks.jpeg'
import { IoChevronBackOutline,IoChevronForwardOutline,IoChatbubbleOutline } from "react-icons/io5";

function MenuLight({data}) {
    // state 
    const {category} = useParams();
    const decodedCategory = decodeURIComponent(category);
    const navigate = useNavigate();

    const currentCategory = data.find(
        (cat) => cat.category.toLowerCase() === decodedCategory.toLowerCase()
    );

    if(!currentCategory) return <p>Menu tidak ditemukan</p>

    //debug
    console.log('URL param:', decodedCategory);
    console.log('Available categories:', data.map(c => c.category));
    console.log('data berhasil masuk', data)

    //function
    const getPic = {
        "APPETIZER & ENTRIES":img,
        "MAIN COURSE":img2,
        "DESSERT":img3,
        "SPECIAL MENU":img4,
        "SIDE DISH":img5,
        "DRINKS":img6
    }

    // fungsi navigate 
    const navigateToChoose =() =>{
        navigate('/choose-light')
    }




  return (
    <div className='ml-container'>
        <div className="ml-content">

            <div className="ml-header">
                <span>MENU PAGE</span>
                {/* <div className="ml-title">
                    <IoChevronBackOutline className='ml-icon'/>
                    <h2>{currentCategory.category}</h2>
                    <p></p>
                </div> */}
                <h2>{currentCategory.category}</h2>
            </div>
            
            <div className="ml-pic">
                <img src={getPic[currentCategory.category]} alt="category pic" />
            </div>

            <div className="ml-box">
                {currentCategory.items.map((item,index) =>(
                    <div className="ml-card" key={index}>
                        <div className="ml-name">
                            <h3>{index + 1}.  {item.name}</h3>
                            <p className='desc'>{item.description}</p>
                        </div>
                        
                        <div className="ml-price">
                            <p className='price'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ml-btn">
                <button className="btn-back" onClick={navigateToChoose}>
                    <IoChevronBackOutline className='ml-icon'/> Back
                </button>
                <button className="btn-order">
                    <IoChatbubbleOutline className='ml-icon'/> Order Now
                </button>
            </div>
        </div>
       
        
    </div>
  )
}

export default MenuLight