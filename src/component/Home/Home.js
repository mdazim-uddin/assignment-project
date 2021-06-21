import React from 'react';
import img from '../../image/Ellipse 1.png'
import Header from '../Header/Header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF,FaGgCircle ,FaTwitter,FaLinkedinIn,
        FaUserGraduate,FaUserSecret,FaRegFileAlt,FaRegPaperPlane} from "react-icons/fa";
import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <div className="side-bar">
                <div className="sidebar-tex">
                    <h4>Saimon Doe</h4>
                    <img src={img} alt=""/>
                    <p> is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                     1500s, when an unknown printer took a galley</p>
                </div>
                <div className="sidebar-icon">
               <FaFacebookF className="icon"/>
               <FaGgCircle className="icon"/>
               <FaTwitter className="icon"/>
               <FaLinkedinIn className="icon"/>
                </div> 
                
                    <div className="sidebar-bottom">
                        <div className="about">
                            <FaUserGraduate className="sidbar-icon"/>
                            <h5>About Me</h5>
                        </div>
                        <div className="about">
                            <FaUserSecret className="sidbar-icon"/>
                            <h5>Portfolio</h5>
                        </div>
                        <div className="about">
                            <FaRegFileAlt className="sidbar-icon"/>
                            <h5>Resume</h5>
                        </div>
                        <button className="btn"><FaRegPaperPlane className="btn-icon"/>Hire me</button>
                    </div>
                </div>
             <Header></Header>
            
        </div>
        
    );
};

export default Home;