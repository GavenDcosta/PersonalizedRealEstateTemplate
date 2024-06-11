import React, { useContext, useEffect, Suspense } from 'react'
import "./aboutPage.scss"
import List from "../../components/list/List"
import apiRequest from '../../lib/apiRequest'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext.jsx"
import { Await } from 'react-router-dom'
import ContactTheAgent from '../../components/contactTheAgent/ContactTheAgent.jsx'
import ExperienceCard from '../../components/experienceCard/ExperienceCard.jsx'
import { cardsData } from '../../lib/cardsData.jsx'

const ProfilePage = () => {


  return (
        <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="section1">
                  <img src="/about.jpeg" alt="" />
                  <div className="info">
                    <h1>Professional Real Estate Agent</h1>
                    <p>Hello, I'm Gaven D'Costa, your dedicated real estate professional based in vibrant Mumbai. With a wealth of experience in the local market, I'm passionate about helping clients navigate the complexities of buying, selling, and investing in this dynamic city. Whether you're searching for your dream home or looking to capitalize on investment opportunities, I'm here to provide personalized guidance and ensure a seamless transaction. Let's collaborate to turn your real estate aspirations into reality. Contact me today!</p>
                  </div>
                </div>
                <div className="section2">
                    {cardsData.map((card) => (
                       <ExperienceCard key={card.id} image={card.icon} number={card.num} title={card.text} />
                    ))}
                </div>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
              <ContactTheAgent />
            </div>
        </div>
    </div>
    )
}

export default ProfilePage