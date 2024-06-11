import React from 'react'
import "./contactTheAgent.scss"
import { Link } from "react-router-dom"

const ContactTheAgent = () => {
  return (
    <div className="contactTheAgent">
      <div className="wrapper">

        <h1>Connect with me 😄</h1>
        <h3>( Gaven Dcosta )</h3>

        <div className="items">
          <Link to="https://www.instagram.com/gavendcosta/" target='_blank'>
              <div className="item">
                <img src="/instagram.png" alt="" />
                <p>Instagram</p>
              </div>
          </Link>
          <Link to="https://www.facebook.com/gaven.dcosta/" target='_blank'>
              <div className="item">
                <img src="/facebook.png" alt="" />
                <p>Facebook</p>
              </div>
          </Link>
          <Link to="mailto:gavendcosta@gmail.com" target='_blank'>
              <div className="item">
                <img src="/email.png" alt="" />
                <p>Email</p>
              </div>    
          </Link>
          <Link to="https://wa.me/919768333418" target='_blank'>
              <div className="item">
                <img src="/whatsapp.png" alt="" />
                <p>WhatsApp</p>
              </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactTheAgent