import React from 'react'
import Slider from "react-slick";
import {Grid } from '@mui/material';
import { Rating } from '@mui/material';

import './styles.css'
const Testimonials = () => {

    const testimonials=[
        {
            imgUrl:'images/person.jpg',
            name:'Susan',
            stars:3,
            description:"Kadhi chana today was average and there was fantastic salad"

        },
        {
            imgUrl:'images/person2.jpg',
            name:'Giri',
            stars:5,
            description:"Loved today's . Just Yummy!!!!!"

        },
        {
            imgUrl:'images/person.jpg',
            name:'Anunaya',
            stars:3,
            description:"Today's meal taste was good"

        },  
     
    ]

    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      arrows:false,
      slidesToScroll: 1,
      lazyLoad: false,
      autoplay: true,
    autoplaySpeed: 1000  ,
 
     
    };

   
  return (
    <div className='testimonialSlider'>
      
        <Slider {...settings}>
        {testimonials.map((person)=>{
            return (
                < div>

  <Grid className="gridContainer" container spacing={2}>
  <Grid className="gridItem" item xs={6}>
  <img className="avatar"   
  alt="Remy Sharp"  
  src={person.imgUrl}
  style={{width:"150px",height:'190px',borderRadius:"50%",opacity:'none'}}


/>
<div className="naming" ><span style={{fontFamily: "'Kalam', cursive", fontSize:'30px'}}>{person.name}</span></div>

    
  </Grid>
  <Grid className="gridItem" item xs={6}>
 <div style={{fontFamily: "'Kalam', cursive", fontSize:'30px', marginBottom:'15px'}}>{person.description}</div>
    {/* {Array.apply(null, { length: person.stars}).map((e, i) => (
  <span className="busterCards" key={i}>
    
  </span>
))} */}
<Rating name="read-only" value={person.stars} readOnly />
  </Grid>
 
</Grid> 
                </div>
              
            )
        })}
        </Slider>
      </div>
  )
}
export default Testimonials

