import React from 'react'
import {CButton,CCardBody,CCardImage,CCardText,CCard,CCardTitle} from '@coreui/react';
function Cardsample() {
  return (
    <div className="container-fluid d-flex justify-content-evenly">
    <div className='row'>
    <div className='col-md-4'>
     <Card
       img="https://www.india.ford.com/content/ford/in/en_in/home/cars/aspire/_jcr_content/par/brandgallery_69428842/image1/image.imgs.full.high.jpg/1537443564777.jpg"
       title="Forest"
       description=" Featuring a striking-look, a commanding stance and dynamic design."
       add="/"
     />
     </div>
     <div className='col-md-4'>
     <Card
       img="https://www.india.ford.com/content/ford/in/en_in/home/cars/figo/_jcr_content/par/brandgallery_69428842/image1/image.imgs.full.high.jpg/1626760636390.jpg"
       title="Agricultural"
       description=" Featuring a striking-look, a commanding stance and dynamic design."
       add="/"
     />
</div>
<div className='col-md-4'>
     <Card
       img="https://www.india.ford.com/content/ford/in/en_in/home/suvs/freestyle/_jcr_content/par/brandgallery/image1/image.imgs.full.high.jpg/1545119844657.jpg"
       title="Retail"
       description=" Featuring a striking-look, a commanding stance and dynamic design."
       add="/"
     />
   </div>
   </div>
</div>
   );
}
function Card(props){
return (
<CCard className="ck" style={{ width: '20rem' } }>
 <CCardImage orientation="top" src={props.img}/>
 <CCardBody>
   <CCardTitle>{props.title}</CCardTitle>
   <CCardText>
    {props.description}
   </CCardText>
   
   <CButton href={props.add} target ="_blank" className='mx-5 px-5'>Find More</CButton>
 </CCardBody>
</CCard>

 );
}

export default Cardsample;