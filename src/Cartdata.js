import React from 'react';
import { useState } from 'react';
import Cartcomponent from './Cartcomponent';
import './Cartdata.css'

function Cartdata () {
   
   let data=[
        {
         id:1,
         image:"https://media.istockphoto.com/id/502129687/photo/decorative-cosmetics-for-makeup.jpg?s=1024x1024&w=is&k=20&c=wGmovDLR3scv2NWrha6VGUO82qn_cWwxBh1ljemwo-0=",
         productname:"Fancy Products",
         price:"₹3240.00-₹6480.00"
        },
        {
          id:2,
          product:"sale",
          image:"https://m.media-amazon.com/images/I/71u3QxI3QvL._UY695_.jpg",
          productname:"Special Item",
          offerprice:"₹1620.00",
          price:"₹1458.00",
         },
         {
          id:3,
          product:"sale",
          image:"https://m.media-amazon.com/images/I/71Ye4QY493L._SX679_.jpg",
          productname:"Male Puppets",
          offerprice:"₹4050.00",
          price:"₹2025.00"
         },
         {
          id:4,
          image:"https://m.media-amazon.com/images/I/413LMwScBjS._SX679_.jpg",
          productname:"Wifi Booster",
          price:"₹3240.00"
         },
         {
          id:5,
          product:"sale",
          image:"https://m.media-amazon.com/images/I/81wN5ep5CAL._SY879_.jpg",
          productname:"JH Gallery Lotus Hangings for Decoration",
          offerprice:"₹4050.00",
          price:"₹2025.00"
         },
         {
          id:6,
          image:"https://m.media-amazon.com/images/I/71+FRIdP3pL._UL1500_.jpg",
          productname:"Indian Traditional Kanjivaram Silk",
          price:"₹9720.00-₹22680.00"
         },
         {
          id:7,
          product:"sale",
          image:"https://m.media-amazon.com/images/I/61xlUgke8BL._UX679_.jpg",
          productname:"Men's Beige Silk Blend Sherwani Set",
          offerprice:"₹1620.00",
          price:"₹1458.00"
         },
         {
          id:8,
          image:"https://m.media-amazon.com/images/I/616e2t492uL._SX679_.jpg",
          productname:"Alpha Bluetooth Calling Smart Watch ",
          price:"₹3240"
         }
    ]

    
   
        return<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5" id="cartcontainer">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {data.map((e)=>{
                return <Cartcomponent Cart={e} />
                })}
              </div>
            </div>
          </section>
    }

export default Cartdata;
