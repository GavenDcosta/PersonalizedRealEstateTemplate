import React, { useEffect } from 'react'
import "./layout.scss"
import Navbar from '../../components/navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
  return (
        <div className="layout">
           <div className="navbar">
             <Navbar />
           </div>
           
           <div className="content">
             <Outlet />
           </div>

           <h3>© {new Date().getFullYear()} Copyright: M&G WebWorks</h3>
        </div>
   
  )
}

const RequireAuth = () => {

  const {currentUser} = useContext(AuthContext)

  // useEffect(() => {
  //    if(!currentUser){
  //      <Navigate to="/login" />
  //    }
  // }, [currentUser])

  return (
      !currentUser ? <Navigate to="/login" /> : (
        <div className="layout">
           <div className="navbar">
             <Navbar />
           </div>
           
           <div className="content">
             <Outlet />
           </div>

           
        </div>
      )  
  )
}

export {Layout, RequireAuth}