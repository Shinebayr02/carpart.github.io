import React, { useState } from "react"
import './Navbar.css'

//Imported images
import logo from '../../assets/logo.avif'

//Imported icons
import { IoIosCloseCircle } from "react-icons/io"
import { TbGridDots } from "react-icons/tb"

const Navbar = ()=>{

    // Statement to hold the navbar state
    const [navbar, setNavbar] = useState('navbar')

    // function to show navbar on smaller screens

    const showNavbar = ()=>{
        setNavbar('navbar showNavbar')
    }

    // function to remove navbar on smaller screens

    const removeNavbar = ()=>{
        setNavbar('navbar')
    }

    // function to add a background to the navbar when we scroll a certain height on the window

    const [header, setHeader] = useState('header')
    const addBg = ()=>{
        if(window.scrollY >= 20){
            setHeader('header addBg')
        }
    }
    window.addEventListener('scroll', addBg)

    return(
        <div className={header}>
            <div className="logoDiv">
                <img src={logo} alt="Logo Image" className='logo' />
            </div>

            <div className={navbar}>
                <ul className="menu">
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Used cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">New cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Auctions</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Sell</a>
                    </li>
                </ul>

                <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
                
            </div>

            <div className="signUp flex">
                <div className="text">Sign Up</div>
                
                <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>
            </div>
        </div>
    )
}
export default Navbar