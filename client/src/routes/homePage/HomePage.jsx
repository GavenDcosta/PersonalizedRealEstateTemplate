import React, { useContext } from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchBar/SearchBar'
import { AuthContext } from '../../context/AuthContext'

const HomePage = () => {

  const {currentUser} = useContext(AuthContext) 

  console.log(currentUser)

  return (
    <div className='homePage'>
        <div className="textContainer">
          <div className="wrapper">
              <h1 className='title'>
                  Find Your Dream Property with Expert Guidance
              </h1>
              <p className="description">
                  Welcome to my real estate platform! As an experienced and dedicated agent, I am here to help you find your perfect property. Whether you're looking to buy, sell, or rent, I provide personalized service to meet all your real estate needs. Let's work together to turn your real estate dreams into reality.
              </p>
            <SearchBar />
            <div className="boxes">
                {/* <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Expirence</h2>
                </div>

                <div className="box">
                    <h1>200+</h1>
                    <h2>Awards gained</h2>
                </div>
 
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div> */}

                <h3>© {new Date().getFullYear()} Copyright: M&G WebWorks</h3>
            </div>

            
           
            
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div> 
    </div>
  )
}
 
export default HomePage
