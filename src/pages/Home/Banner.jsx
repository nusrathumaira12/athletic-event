
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "motion/react"

const highlightLastTwoWords = (text) => {
    const words = text.split(" ");
    const lastTwo = words.slice(-2).join(" ");
    const rest = words.slice(0, -2).join(" ");
    return (
      <span>
        {rest}{" "}
        <span className="text-orange-500 font-semibold">{lastTwo}</span>
      </span>
    );
  };
  


const Banner= () => {
  const athleticEvents = [
    {
      id: 1,
      slogan: "Run the City,Beat Your Best.",
      description: "Join thousands in the iconic 2025 city marathon.Experience energy, excitement, and endurance.Whether a pro or beginner, the road is yours.",
      image: "/images/marathon.jpg",
    },
    {
      id: 2,
      slogan: "Dive Deep,And Rise Strong.",
      description: "Witness elite swimmers chase national glory.Every stroke, every breath counts.The pool becomes a battlefield of champions.",
      image: "/images/swimming.jpg",
    },
    {
      id: 3,
      slogan: "Chase the Finish,Claim the Future.",
    description: "The best young athletes meet on the field.Track their drive, jumps, and sprints.The next generation of champions begins here.",
      image: "/images/track-field.jpg",
    },
    {
      id: 4,
      slogan: "Ride Fast,Conquer the Climb.",
      description: "Tackle steep hills and thrilling descents.Test your endurance and determination.Pedal to glory in the Cycling Challenge.",
      image: "/images/cycling.jpg",
    },

    
  ];

  return (
    <div className="w-full  mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className=" overflow-hidden"
      >
        {athleticEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <div
              className="h-[630px] flex items-center justify-start bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="font-bold  p-6 text-3xl rounded-xl text-start max-w-2xl ml-10">
                <p className='text-sm text-orange-600'>|| WELCOME TO <motion.span
                animate={
                    {color: ['#ff5733', '#33ff33', '#8a33ff' ],
                        transition: {duration: 2, repeat: Infinity}
                    }}
                > ATHLOFY </motion.span> ||</p>
              <h2 className="text-6xl font-bold whitespace-pre-line">{highlightLastTwoWords (event.slogan)}</h2>
              <p className="text-base mt-2 whitespace-pre-line font-semibold">{event.description}</p>
             <div className='flex gap-3 mt-5'>
             <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => window.location.href = '/events'}
             className="btn text-white border-none bg-orange-600 py-6 px-10">START RUNNING</motion.button>
             <button
             onClick={() => window.location.href = '/about'}

             className="btn btn-neutral border-white text-white btn-outline py-6 px-10 hover:bg-orange-600">EXPLORE MORE</button>
             </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
