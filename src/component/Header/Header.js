import React from 'react';
import {FaHandPointRight,FaBible} from "react-icons/fa";
import img from '../../image/ductor.png'
import Footer from '../Footer/Footer';
import './Header.css'
const Header = () => {
    return (
        <div>

        <div className="header-top">
        <div className="header-left">
           <div className="header-left-text">
           <h1>Saimon Dio</h1>
           <span>Senior software engineer</span>
           <p>is simply dummy text of the printing and
           typesetting industry. Lorem Ipsum has been the 
           industry's
            standard dummy text ever since the
           1500s, when an unknown printer took a galle</p>
           </div>
           <div className="header-btn">
                <button className="profile-btn">
                <FaHandPointRight className="profile-icon"/>view profile</button>
                <button className="resume-btn"><FaBible className="resume-icon"/>view resume</button>
           </div>
        </div>

        <div className="header-top-img">
                <img src={img}/>
        </div>
    </div>

        <Footer/>
        </div>
        
    );
};

export default Header;