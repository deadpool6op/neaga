import React, { useState } from "react";
import './Slide.css'
import {ChevronLeft,ChevronRight} from 'lucide-react'


const Slider = (props) => {
  const[index,setIndex]=useState(0)
  const prevSlide =() =>{
    const firstslide=index===0
    const newindex =firstslide ? props.sliderdata.length -1 : index -1;
    setIndex(newindex);
  }
  const nextSlide =() =>{
    const lastslide = index === props.sliderdata.length -1;
    const newIndex = lastslide ? 0 : index +1 ;
    setIndex(newIndex)

  }
  
  return (
<div className='wrapper'>
  <h></h>
  <div className='slider-container'
  style={{backgroundImage: `url(${props.sliderdata[index].url})`}}
  >
    <ChevronLeft  className='icon' onClick={prevSlide}/>
    <ChevronRight className='icon' onClick={nextSlide}/>
  </div>


</div>
  

  
  )
};

export default Slider