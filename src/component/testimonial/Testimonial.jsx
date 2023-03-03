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
    name: 'Agnus Maria Joseph',
    review: "I had the pleasure of attending college with Vishnu and was consistently impressed by his strong work ethic and dedication to studies. He was always willing to go the extra mile to ensure that projects were completed to the highest standards, and his contributions were invaluable to our team.One of Vishnu's standout qualities is to lead a group. This was particularly evident in our final year project. He demonstrated excellent problem-solving skills and the ability to think creatively, leading the team to achieve impressive results. I believe that Vishnu would be an asset to any organisation and I wholeheartedly recommend his for any opportunity. He has the skills, drive, and determination to excel in any professional setting and I am confident that he will make a significant impact in any field."
  },
  {
    avatar: AVTR2,
    name: 'Adwaith R Krishna',
    review: "Vishnu is an incredibly hard worker and is always willing to go above and beyond to ensure that a project is completed to the highest standards. He has strong attention to detail and is always looking for ways to improve processes and streamline workflows. In addition, Vishnu is a natural problem-solver and is skilled at finding creative solutions to complex challenges. Vishnu is also a fantastic team player and is always willing to lend a helping hand to his colleagues. He is an excellent communicator and is able to clearly articulate his ideas and thoughts. He is also highly collaborative and is always open to hearing different perspectives and viewpoints. I wholeheartedly recommend Vishnu as a startup partner and believe that he would be an invaluable asset to any team. Please do not hesitate to contact me if you have any further questions or would like to discuss Vishnu's qualifications in more detail."
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
