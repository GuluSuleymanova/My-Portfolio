import React from 'react'
import profile from '../../assets/images/about.jpg'
import resume from '../../assets/Süleymanova Gülü.CV.pdf'
import aboutdata from '../data/aboutdata'
import Aboutitem from './Aboutitem'



const About = () => {
  
  
  return (
    
    <div className='about-page' id='about'>
      <div className="container">
        <div className="head-part">
        <div className="head-part text-center">
                    <h1><span>About</span> Me</h1>
                    <h3>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO</h3>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12 mb-5">
                    <div className="image-part">
                      <div className="image">
                        <img src={profile} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className=" right-part col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                        <div className="list-one">
                         {
                         aboutdata.leftside.map((item,index)=>{
                          return(
                            <Aboutitem
                            title={item.title}
                            desc={item.desc}
                            item={item}
                            key={index}
                            />
                          )
                         })
                         }

                         
                          
                          
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                    <div className="list-two">

                    {aboutdata.rightside.map((item,index)=>{
                          return(
                            <Aboutitem
                            title={item.title}
                            desc={item.desc}
                            url={item.url}
                            item={item}
                            key={index}
                            />
                          )
                         })}
                      
                      </div>
                      </div>
                    </div>
                    <div className="cv"><a href={resume} download><span>
                      <i class="fa fa-download"></i>download my cv</span></a>
                    </div>
                  </div>
                </div>
                <hr />
        </div>
      </div>
      
    </div>
  )
}

export default About