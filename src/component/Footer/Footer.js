import React, { useState } from 'react';
import {FaHandPointRight,FaBible} from "react-icons/fa";
import './Footer.css'
const Footer = () => {
const [item,setItem]=useState([
    {
        id:1,
        icon:<FaHandPointRight/>,
        title:"vanila javaScript",
        paragrap:"is simply dummy text of the printing andb typesetting industry. Lorem Ipsum has been the  industry's"
    },
    {
        id:2,
        icon:<FaHandPointRight/>,
        i:<FaBible/>,
        title:"vanila javaScript",
        paragrap:"is simply dummy text of the printing andb typesetting industry. Lorem Ipsum has been the  industry's"
    },
    {
        id:3,
        icon:<FaHandPointRight/>,
        title:"vanila javaScript",
        paragrap:"is simply dummy text of the printing andb typesetting industry. Lorem Ipsum has been the  industry's"
    },
    {
        id:4,
        icon:<FaHandPointRight/>,
        title:"vanila javaScript",
        paragrap:"is simply dummy text of the printing andb typesetting industry. Lorem Ipsum has been the  industry's"
    },
])

    return (
        <div className="footer-area">
            <div className="footer-text">
                <h1>Whai i do</h1>
                <p>is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the 
                industry's
                 standard dummy text ever since the
                1500s, when an unknown printer took a galle</p>
            </div>

                <div className="footer-foot">
                        {
                        item.map(el=>{
                            return (
                                <div className="item">
                                    <span>{el.icon}</span>
                                    <small>{el.i}</small>
                                    <h2>{el.title}</h2>
                                    <p>{el.paragrap}</p>
                                </div>
                            )
                        })  
                        }
                </div>


        </div>
    );
};

export default Footer;