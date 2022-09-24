import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
import PortData from '../../data/PortfolioData'

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='portfolio-page'>
      <div className="container">
        <div className="head-part text-center">
          <h1>My <span>Project</span></h1>
        </div>
        <div className="button-parts">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>All Projects</button>
            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>React.js</button>
            <button  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>Javascript</button>
          <button  className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}>Html/Css</button>
          </div>

          <div className="content-parts">

           <div
          className={toggleState === 1 ? "content  active-content" : "content"}
                 >
          <div className="row gy-3">
            {PortData.allprojects.map((item,index)=>{
              return(
                <PortfolioItem
                img={item.img}
                title={item.title}
                link={item.link}
                item={item}
                key={index}
                />
              )
            })}
        </div>
      </div>


      <div
          className={toggleState === 2 ? "content  active-content" : "content"}
                 >
          <div className="row gy-3">
            {PortData.reactprojects.map((item,index)=>{
              return(
                <PortfolioItem
                img={item.img}
                title={item.title}
                link={item.link}
                item={item}
                key={index}
                />
              )
            })}
        </div>
      </div>


      <div
          className={toggleState === 3 ? "content  active-content" : "content"}
                 >
          <div className="row gy-3">
            {PortData.jsprojects.map((item,index)=>{
              return(
                <PortfolioItem
                img={item.img}
                title={item.title}
                link={item.link}
                item={item}
                key={index}
                />
              )
            })}
        </div>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
                 >
          <div className="row gy-3">
            {PortData.htmlcssprojects.map((item,index)=>{
              return(
                <PortfolioItem
                img={item.img}
                title={item.title}
                link={item.link}
                item={item}
                key={index}
                />
              )
            })}
        </div>
        </div>
      
      
    </div>


    </div>
    </div>
  )
}

export default Portfolio