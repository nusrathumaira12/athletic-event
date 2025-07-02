import React from 'react';
import { FaPlay, FaUsers, FaLaughBeam, FaTrophy, FaRunning } from 'react-icons/fa';
import AboutPic from '../../../public/images/track-field.jpg'
const AboutAthlofy = () => {
  return (
    <section className="bg-[#f9f8f7] py-12 px-4">
      <div className="max-w-6xl h-2/5 mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image with play button */}
        <div className="relative max-w-md w-full">
          <img
            src={AboutPic} // replace with your preferred athletic image
            alt="Athletes"
            className=" object-cover w-full h-full"
          />
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-md hover:scale-110 transition">
            <FaPlay className="text-orange-500 text-xl" />
          </button>
          {/* <button className="absolute bottom-5 right-5 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition text-sm font-semibold">
            READ MORE
          </button> */}
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <p className="text-orange-600 font-semibold mb-2 tracking-wide">|| ABOUT ATHLOFY ||</p>
          <h2 className="text-4xl font-bold leading-tight mb-4 italic dark:text-blue-900">
            BUILT FOR ATHLETES,<br />
            POWERED <span className="text-orange-600 ">BY PASSION.</span>
          </h2>
          <p className="mb-4 text-gray-600">
            Athlofy is your ultimate destination for discovering, booking, and thriving in local athletic events.
            From weekend warriors to elite competitors — we’re here to support your journey.
          </p>

          {/* Bullet points */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-6">
            <span>✅ Local Events Access</span>
            <span>✅ Athlete Community</span>
            <span>✅ Verified Organizers</span>
          </div>

          {/* Why Choose */}
          <h3 className="text-xl font-bold mb-4 dark:text-blue-900">WHY CHOOSE ATHLOFY?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded shadow-sm">
              <FaRunning className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic dark:text-blue-900">TRAINING RESOURCES</h4>
              <p className="text-sm text-gray-600">Access tips, workouts, and expert guidance to prepare better.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded shadow-sm">
              <FaLaughBeam className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic dark:text-blue-900">ATHLETE COMMUNITY</h4>
              <p className="text-sm text-gray-600">Meet, compete, and connect with fellow athletes locally.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded shadow-sm">
              <FaUsers className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic dark:text-blue-900">ALL-LEVEL WELCOME</h4>
              <p className="text-sm text-gray-600">Whether beginner or pro — everyone finds their challenge.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded shadow-sm">
              <FaTrophy className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic dark:text-blue-900">EXCLUSIVE EVENTS</h4>
              <p className="text-sm text-gray-600">Get early access to marathons, bootcamps, and meetups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAthlofy;
