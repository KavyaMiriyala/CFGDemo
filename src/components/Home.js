import React from 'react';
import Template from './Template'
import { Outlet, NavLink,Link } from 'react-router-dom'
import {Routes, Route,Navigate} from 'react-router-dom';
import ImageSlider from '../HelpPages/ImageSlider';
import HomeData from '../HelpPages/HomepageImages';
import Cardsample from '../HelpPages/CardSample';

function Home(){
    let webList=[
        {
            webName1 : "Fresh",
            webImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg",
            webName2 : "Mobiles",
            webImage2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg",
            webName3 : "Fashion",
            webImage3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg",
            webName4 : "Electronics",
            webImage4 : "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
        },

        {
            webName1 : "Smart LEDs",
            webImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg",
            webName2 : "Appliances",
            webImage2 : "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_186x116_186x116_in-en._SY116_CB663888095_.jpg",
            webName3 : "Furniture",
            webImage3 : "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg",
            webName4 : "Kitchen products",
            webImage4 : "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_186x116_186x116_in-en._SY116_CB663888093_.jpg"
        },
        {
            webName1 : "Cleaning Accessories",
            webImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
            webName2 : "Tyre & rimcare",
            webImage2 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
            webName3 : "Helmets",
            webImage3 : "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
            webName4 : "Headphones",
            webImage4 : "https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC_04._SY116_CB665766031_.jpg"
        }



    ]




return (
    <div className="text-center container">
        <ImageSlider slides={HomeData}/>
        <br></br>
        <Cardsample/>

         </div>
        
        
    )
}

export default Home