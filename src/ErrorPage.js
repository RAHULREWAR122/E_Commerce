import React from 'react'
import "./global.css"
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='errorPage'>
         <div className="mid">
            <h1>404</h1>
            <h2>OOPS! PAGE NOT FOUND</h2>
            <h3><strong>Sorry, the page you're looking for dosesn't exist. Please Return to <a href="/">Home Page</a></strong></h3>
            <div>
                <button><NavLink className="nav" to="/">RETURN HOME</NavLink></button>
            </div>
         </div>
    </div>
  )
}

export default ErrorPage