import React, { useState } from 'react'
import '../Styles/MenuList.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import imgCry from '../Assets/emoji.png'
import img1 from '../Assets/signature.jpeg'
import img2 from '../Assets/cafe-speciality.jpeg'
import img3 from '../Assets/iced-coffee.jpeg'
import img4 from '../Assets/manual-brew.jpeg'
import SliderImg from '../Components/SliderImg';

function MenuList({ data }) {

    const navigate = useNavigate();
    const { category } = useParams();

    const [searchTerm, setSearchTerm] = useState('');

    const decodedCategory = decodeURIComponent(category);

    const currentCategory = data.find(
        (cat) =>
            cat.category.toLowerCase() === decodedCategory.toLowerCase()
    );

    if (!currentCategory) {
        return <p>Menu tidak ditemukan...</p>;
    }

    const handleNavigateToWelcome = () => {
        navigate('/choose-menu');
    };

    // Filter menu by name
    const filteredItems = currentCategory.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const picImg = {
        'SIGNATURE' : img1,
        'CAFE SPECIALITY' : img2,
        'ICED COFFEE' : img3,
        'MANUAL BREW' : img4
    }

    return (
        <div className='menu-list-container'>

            <div className="menu-list-header">

                <div
                    className="nav-icon"
                    onClick={handleNavigateToWelcome}
                >
                    <IoIosArrowBack />
                </div>

                <div className="header-img">
                    <h4>BORCELLE</h4>
                    <span>Coffee Shop</span>
                </div>

                <div className="nav-icon">
                    <IoMenu />
                </div>

            </div>

            <div className="ml-pic">
                <img src={picImg[currentCategory.category]} alt={currentCategory.name} />
            </div>

            


            {/* SEARCH INPUT */}
            <div className="search-container">

                <IoSearch className='search-icon' />

                <input
                    type="text"
                    placeholder='Search menu...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>

            <div className="ml-menu-list">

                <div className="menu-box-list">

                    <div className="list-box bg-cream">

                        <div className="list-header">

                            <h2>{currentCategory.category}</h2>

                            <div className="size-box-label">
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                            </div>

                        </div>

                        {filteredItems.length > 0 ? (

                            filteredItems.map((item, idx) => (

                                <div className="list-list" key={idx}>

                                    <h4>
                                        {item.name}

                                        {item.badge === "popular" && (
                                            <FaRegStar className='star-icon' />
                                        )}
                                    </h4>

                                    <div className="size-box">
                                        <p>{item.sizes?.S || '-'}</p>
                                        <p>{item.sizes?.M || '-'}</p>
                                        <p>{item.sizes?.L || '-'}</p>
                                    </div>

                                </div>

                            ))

                        ) : (

                            <div className='empty-menu'>
                                <img src={imgCry} alt="no data" />
                                <p>Menu tidak ditemukan ...</p>
                            </div>

                        )}

                    </div>

                </div>

            </div>

            {/* SLIDERS IMAGE  */}
            <SliderImg/>

            <div className="cl-footer">
                <p>CREATE BY LUMINOUS.ID</p>
            </div>

        </div>
    )
}

export default MenuList