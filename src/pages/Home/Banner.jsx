import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

import marathonImg from '../../../src/images/images/marathon.jpg';
import swimmingImg from '../../../src/images/images/swimming.jpg';
import trackFieldImg from '../../../src/images/images/track-field.jpg';
import cyclingImg from '../../../src/images/images/cycling.jpg';

const highlightLastTwoWords = (text) => {
  const words = text.split(' ');
  const lastTwo = words.slice(-2).join(' ');
  const rest = words.slice(0, -2).join(' ');
  return (
    <span>
      {rest}{' '}
      <span className="text-orange-500 font-semibold">{lastTwo}</span>
    </span>
  );
};

const Banner = () => {
  const athleticEvents = [
    {
      id: 1,
      slogan: 'Run the City, Beat Your Best.',
      description:
        'Join thousands in the iconic 2025 city marathon.\nExperience energy, excitement, and endurance.\nWhether a pro or beginner, the road is yours.',
      image: marathonImg,
    },
    {
      id: 2,
      slogan: 'Dive Deep, And Rise Strong.',
      description:
        'Witness elite swimmers chase national glory.\nEvery stroke, every breath counts.\nThe pool becomes a battlefield of champions.',
      image: swimmingImg,
    },
    {
      id: 3,
      slogan: 'Chase the Finish, Claim the Future.',
      description:
        'The best young athletes meet on the field.\nTrack their drive, jumps, and sprints.\nThe next generation of champions begins here.',
      image: trackFieldImg,
    },
    {
      id: 4,
      slogan: 'Ride Fast, Conquer the Climb.',
      description:
        'Tackle steep hills and thrilling descents.\nTest your endurance and determination.\nPedal to glory in the Cycling Challenge.',
      image: cyclingImg,
    },
  ];

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="overflow-hidden"
      >
        {athleticEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <div
              className="h-[630px] flex items-center justify-start bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="font-bold p-6 text-3xl  text-start max-w-2xl ml-10  backdrop-blur-md rounded-xl">
                <p className="text-sm text-orange-600">
                  || WELCOME TO{' '}
                  <motion.span
                    animate={{
                      color: ['#ff5733', '#33ff33', '#8a33ff'],
                      transition: { duration: 2, repeat: Infinity },
                    }}
                  >
                    ATHLOFY
                  </motion.span>{' '}
                  ||
                </p>
                <h2 className="text-6xl font-bold whitespace-pre-line mt-2">
                  {highlightLastTwoWords(event.slogan)}
                </h2>
                <p className="text-base mt-4 whitespace-pre-line font-semibold">
                  {event.description}
                </p>
                <div className="flex gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = '/events')}
                    className="btn text-white border-none bg-orange-600 py-3 px-6 text-lg rounded"
                  >
                    START RUNNING
                  </motion.button>
                  <button
                    onClick={() => (window.location.href = '/about')}
                    className="btn btn-outline border-white text-white hover:bg-orange-600 py-3 px-6 text-lg rounded"
                  >
                    EXPLORE MORE
                  </button>
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
