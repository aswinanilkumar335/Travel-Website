import React from 'react'
import './footer.css'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

function Footer() {
  return (
    <section className='footer'>
      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className='inputDiv flex'>
            <input type="text" placeholder='Enter Email Address'></input>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>


        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>
            <div className='footerParagraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor nisi neque, non tincidunt ex bibendum non. Fusce dapibus molestie odio, sit amet rhoncus odio ullamcorper ut. Praesent consectetur neque vitae justo vehicula auctor eget malesuada augue. Aenean quis scelerisque lectus.
            </div>
            <div className='footerSocials flex'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLink grid'>
            {/* Group one */}
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

            {/* Group two */}
            <div className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Hostelworld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                London
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                California
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Europe
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Oceania
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>TRAVEL WEBSITE</small>
            <small>COPYRIGHT RESERVED - ASWIN 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer