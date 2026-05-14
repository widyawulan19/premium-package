import React, { useState } from 'react'
import '../Styles/Menu.css'
import { GiCoffeeBeans } from 'react-icons/gi'
import { RiSearchLine } from "react-icons/ri";
import menuData from '../Data/DataCafe.json'
import { IoIosSnow } from "react-icons/io";
import { PiThermometerHotFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

function Menu() {
    const [selectedMenu, setSelectedMenu] = useState("Kopi");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const currentMenu = menuData.find(
        (item) => item.category === selectedMenu
    );

    const filteredMenu = currentMenu?.items.filter((item)=>        
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );


    const navigateToChoose = () =>{
        navigate('/choose')
    }

    const anotherName = [
        {category: "Kopi", name: "(Coffee)"},
        {category: "Bukan Kopi", name: "(Non-Coffee)"},
        {category: "Makanan", name: "(Food)"},
        {category: "Khas", name: "(Signature)"},
        {category: "Diseduh", name: "(Manual Brew)"},
        {category: "Plant Based", name: "(Menu Diet)"},
        {category: "Additional", name: "(Additional Items)"}
    ]

  return (
    <div className='menu-container'>

        {/* 🔙 HEADER */}
        <div className="menu-header">
            <button onClick={navigateToChoose}><IoChevronBackOutline/></button>
            <div className="mid-header">
                <h2>FOJA COFFEE</h2>
                <h3>COFFEE SHOP</h3>
            </div>

            <div className="logo-icon">
                <GiCoffeeBeans className='icon'/>
            </div>
        </div>

        <div className="menu-logo">
            <h2>OUR MENU</h2>
            
            <div className="menu-input">
                <RiSearchLine className='search-icon'/>
                <input 
                    type="text" 
                    placeholder='Search menu item' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="category-button">
                {menuData.map((cat) =>(
                    <button 
                        className={`category-btn ${selectedMenu === cat.category? "active":""}`} 
                        onClick={()=> setSelectedMenu(cat.category)}>
                            {cat.category}
                    </button>
                ))}
            </div>
        </div>

        <div className="menu-category">
            <div className="menu-items">
                
                <div className="title">
                    <h3>{currentMenu?.category} <span className='title-h3'>{anotherName.find(item => item.category === currentMenu?.category)?.name || ''}</span></h3>

                    {filteredMenu && (
                        <div className="cat-span">
                            {filteredMenu.some(item => item.price) ? (
                            <span>Price</span>
                            ) : (
                            <>
                                <span><IoIosSnow style={{color:'#007acc'}}/> Ice</span>
                                <span><PiThermometerHotFill style={{color:'#af2005'}}/> Hot</span>
                            </>
                            )}
                        </div>
                    )}
                </div>

                {filteredMenu?.map((item) => (
                <div className="menu-item" key={item.name}>
                    
                    <div className="item-name">
                    <h4>{item.name}</h4>

                    <div className="menu-price">
                        {item.price ? (
                        <p className='single-price'>{item.price}</p>
                        ) : (
                        <div className='double-price'>
                            <p>{item.ice || '-'}</p>
                            <p>{item.hot || '-'}</p>
                        </div>
                        )}
                    </div>
                    </div>

                </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Menu