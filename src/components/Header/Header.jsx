import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const Header = () => {
  return (
    <div className="header">
   <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
        <NavLink className="navbar-brand" to='/'><span>G /</span><span>S</span></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " activeClassName= 'active'  aria-current="page" end to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName= 'active' to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName= 'active' to="/portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName= 'active' to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
   </div> 
  )
}


export default Header






 {/* <div className="nav-content  ">

<ul className={click ? "nav-menu active" : "nav-menu"}
onClick={() => setClick(false)}>
<li className="navs">
<NavLink  className={({ isActive }) =>
    isActive ? 'active' : 'inactive'
  } to="home">Home</NavLink>
</li>
<li className="navs">
<NavLink className={({ isActive }) =>
    isActive ? 'active' : 'inactive'
  }  to="about">About</NavLink>
</li>
<li className="navs">
<NavLink className={({ isActive }) =>
    isActive ? 'active' : 'inactive'
  } to="portfolio">Portfolio</NavLink>
</li>
<li className="navs">
<NavLink className={({ isActive }) =>
    isActive ? 'active' : 'inactive'
  }  to="contact">Contact</NavLink>
</li>
</ul>
</div>
<div className="nav-icon" onClick={() => setClick(!click)}
>
{click ? (
<i className="fa-solid fa-xmark"></i>
) : (
<i className="fa-solid fa-bars"></i>
)}
</div>
*/}