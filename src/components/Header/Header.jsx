import React, { useState, useEffect } from 'react'
import {  NavLink , Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'




const Header = () => {
const [sticky, setSticky]=useState('');

useEffect(() => {
  window.addEventListener('scroll',isSticky);

  return () => {
    window.removeEventListener('scroll',isSticky);
  }
}, []);

const isSticky=()=>{
  const scrollTop= window.scrollY;
  const stickyClass=scrollTop >=30 ? 'issticky' : '';
  setSticky(stickyClass);
};

const classheader = `header ${sticky}`;




  return (
    <div className={classheader}>
   <nav className="navbar navbar-expand-lg bg-dark p-0">
        <div className="container">
        <NavLink className="navbar-brand" to='/'><span>G /</span><span>S</span></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " activeClassName= 'active' smooth='true'  aria-current="page" end='true' href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" activeClassName= 'active' smooth='true' href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" activeClassName= 'active' smooth='true' href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" activeClassName= 'active' smooth='true' href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
   </div> 
  )
}


export default Header





