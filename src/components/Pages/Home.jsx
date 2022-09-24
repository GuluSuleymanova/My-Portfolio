import React from 'react'
import profile from '../../assets/images/profile.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className='home-page'>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">

          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
           <div className="info-part">
            <div className="text-part">
              <h2>Hi There !</h2>
            <span> I'm{' '}
        <h2 style={{ color: '#e211bf', fontWeight: '400' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Gulu Suleymanova', 'Junior Frontend Developer',]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </h2>
      </span>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab, quam non laboriosam recusandae qui a praesentium eligendi voluptatum, earum consequatur omnis consectetur quaerat unde vel facere quod cum culpa.</p>
           </div>
           <div className="button-part">
            <Link to='/about'><button className='one-btn'><i className="fa-solid fa-user"></i> More About Me</button></Link>
            <Link to ='/portfolio'><button ><i className="fa-solid fa-briefcase"></i> Portfolio</button></Link>
           </div>
           </div>

          </div>

          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
       <div className="image-part">
       <div className="image">
        <img src={profile} alt="" />
       </div>
</div>
          </div>
        </div>
      </div>

    </div>

    
  )
}

export default Home