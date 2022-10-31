import React from 'react'
import './navbar.css'
import { useState } from 'react'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



function Navbar() {

    // const [active,setActive]=useState('navBar')

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
                </a>
            </div>
            <div className='navBar'>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Packages</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Shop</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>About</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Pages</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>News</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Contact</a>
                    </li>
                    
                    <button className='btn'>
                        <a href='#'>BOOK NOW</a>
                    </button>
                </ul>
                <div className='classNavbar'>
                    <AiFillCloseCircle className="icon"/>
                </div>
                <div className='toggleNavbar'>
                    <TbGridDots className='icon'/>
                </div>
            </div>
        </header>
    </section>
  )
}

export default Navbar