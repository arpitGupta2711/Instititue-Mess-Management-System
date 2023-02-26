import React from 'react'
import './styles.css'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';

const Carousel = () => {
  // const PrevButton = (props) => (
    
  //   <button className="prev-button" onClick={props.onClick}>
  //     Previous
  //   </button>
  // );
  
  // const NextButton = (props) => (
  //   <button className="next-button" onClick={props.onClick}>
  //     Next
  //   </button>
  // );

  const menu=[
    {
      id: 1,
      src:'images/food.jpg',
      alt: "Image 1",
      meal:'Breakfast',
      description:['Poha','Bread','Sprouts'],

    },
    {
      id: 2,
      src:'images/food.jpg',
      alt: "Image 2",
      meal:'Lunch',
      description:['Chola Puri','Rice','Chapati'],

    },
    {
      id: 3,
      src:'images/food.jpg',
      alt: "Image 3",
      meal:'Dinner',
      description:['Shahi Paneer','Biryani','Chapati','Gulab Jamun'],
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
    // prevArrow: <PrevButton />,
    // nextArrow: <NextButton />,
    // customPaging: (i) => <div>{i + 1}</div>,
   
    // width:"100px"
     
    };
    // const handlePrevClick = () => {
    //   this.slider.slickPrev();
    // }
  
    // const handleNextClick = () => {
    //   this.slider.slickNext();
    // }
    return (
    
        <div className="imgSlider ">
          <Slider {...settings}>
            {menu.map((item) => (
              
              <div className='imgContent ' key={item.id}>
                <div className='menu '>
                   <Typography sx={{fontFamily: "'Architects Daughter', cursive", fontSize:'48px'}}> {item.meal}</Typography>
                    
                  
                  {item.description.map(itemsInAMeal=>{
                    return (<Typography   sx={{fontSize:"20px",color:'#471909', fontWeight:'800'}}>
                      {itemsInAMeal}
                    </Typography>

                    )
                  })}

                </div>
         
              
                <img src={item.src} style={{opacity:'0.3'}} alt={item.alt}/>
              
               
                {/* <div></div> */}
                
              </div>
            ))}
          </Slider>
          {/* <div className="slider-buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div> */}
        </div>
            
    )
  }

export default Carousel
