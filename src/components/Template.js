import React from 'react';
import { Outlet, NavLink,Link } from 'react-router-dom'

function Template(props) {
console.log(props)


  return (
  <div className='card card-body mx-2 border-0  pb-0 pt-0'>
 <div className='row'>
     <h2>{props.children}</h2>
     <div className="col-sm-5 ">
   <img  className='mx-3' src={props.webObj.webImage1}/>
   <p className=' fs-6'>{props.webObj.webName1}</p>  
</div>
<div className="col-sm-5">
   <img  className='mx-3 'src={props.webObj.webImage2}/>
   <p className=' fs-6'>{props.webObj.webName2}</p>  
</div>
<div className="col-sm-5">
   <img  className='mx-3 ' src={props.webObj.webImage3}/>
   <p className=' fs-6'>{props.webObj.webName3}</p>  
</div>

<div className="col-sm-6">
   <img  className='mx-3 ' src={props.webObj.webImage4}/>
   <p className=' fs-6'>{props.webObj.webName4}</p>  
</div>
 </div>
 <NavLink className="nav-link text-start" to=" ">See more</NavLink>
  </div>
  )
}

export default Template;
