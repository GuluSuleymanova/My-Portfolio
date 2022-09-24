import React from 'react'

const Aboutitem = (props) => {
  return (
    
        <ul>
<li><span>{props.title}</span><a href={props.url} target="_blank" rel="noopener noreferrer">{props.desc}</a></li>
</ul>
    
  )
}

export default Aboutitem