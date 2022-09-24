import React from 'react'

const PortfolioItem = (props) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
        <div className="image-portfolio">
            <div className="image " >
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.img}  alt="" />
                <h1>{props.title}</h1>
                </a>
                 

            </div>
        </div>
    </div>
  )
}

export default PortfolioItem