import React from 'react';
import Template from './Template'
import { Outlet, NavLink,Link } from 'react-router-dom'
import {Routes, Route,Navigate} from 'react-router-dom';
import ImageSlider from '../HelpPages/ImageSlider';
import {TaruData} from '../HelpPages/Image'

<style>

</style>

function Product(){

    let webList=[
        {
            webName1 : "AshwaGand",
            webImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg",
            webName2 : "Lemon Grass",
            webImage2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg",
            webName3 : "Wheat Grass",
            webImage3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg",
            webName4 : "Jowar",
            webImage4 : "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
        },

        {
            webName1 : "Natural Gum",
            webImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg",
            webName2 : "Bamboo",
            webImage2 : "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_186x116_186x116_in-en._SY116_CB663888095_.jpg",
            webName3 : "Tamarind",
            webImage3 : "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg",
            webName4 : "Sandal",
            webImage4 : "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_186x116_186x116_in-en._SY116_CB663888093_.jpg"
        },
        {
            webName1 : "Sanitary Pad",
            webImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
            webName2 : "Detergents",
            webImage2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
            webName3 : "Soaps",
            webImage3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
            webName4 : "Cockery",
            webImage4 : "https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC_04._SY116_CB665766031_.jpg"
        }



    ]

return (
    <div className="text-center container">
          <h2 className=" text-info">Welcome to SHG Products</h2>
            <h2 className="text-success">TARU Foundation Presents</h2>
              <hr></hr>
              <ImageSlider slides={TaruData}/>
              <br/>
           <div className="d-flex container">
              <Template webObj={webList[0]} >
                   <span className=' fs-6'>Forest</span>
              </Template>

              <Template webObj={webList[1]}>
                    <span className=' fs-6'>Agricultural</span>
              </Template>

              <Template webObj={webList[2]} >
                  <span className=' fs-6'>Retail</span>
               </Template>
           </div>
       

       <Routes>
            <Route path="#" />
       </Routes>
       </div>

 
        
        
    )
}

export default Product