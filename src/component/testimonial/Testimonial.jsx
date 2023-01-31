import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'name1',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed ipsum quos voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed ipsum quos voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed ipsum quos voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed ipsum quos voluptatem?"
  },
  {
    avatar: AVTR2,
    name: 'name2',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed ipsum quos voluptatem?"
  },
  {
    avatar: AVTR3,
    name: 'name3',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed ipsum quos voluptatem?"
  },
  {
    avatar: AVTR4,
    name: 'name4',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed ipsum quos voluptatem?"
  }
]


const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Recommendation from friends and colleagues</h5>
      <h2>Endorsement</h2>
      <Swiper className="container testimonials__container" 
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      
       pagination={{ clickable: true }}
       
      
       >
       
    {
      data.map(({avatar,name,review},index)=>{
        return(
          <SwiperSlide key = {index}className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
        )
      })
    }
      </Swiper>
    </section>
  );
};

export default Testimonial;
