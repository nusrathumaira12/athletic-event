import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaPlay, FaUsers, FaLaughBeam, FaTrophy, FaRunning } from 'react-icons/fa';

Modal.setAppElement('#root'); // Important for accessibility

const AboutAthlofy = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className="bg-[#f9f8f7] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image & Play */}
        <div className="relative max-w-md w-full">
          <img
            src="https://images.unsplash.com/photo-1599059811071-b9b6a2ce1e19"
            alt="Athletes"
            className="rounded-xl object-cover w-full h-full"
          />
          <button
            onClick={openModal}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-md hover:scale-110 transition"
          >
            <FaPlay className="text-orange-500 text-xl" />
          </button>
          <button className="absolute bottom-5 right-5 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition text-sm font-semibold">
            READ MORE
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-orange-600 font-semibold mb-2 tracking-wide">|| ABOUT ATHLOFY ||</p>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            BUILT FOR ATHLETES,<br />
            POWERED <span className="text-orange-600 italic">BY PASSION.</span>
          </h2>
          <p className="mb-4 text-gray-600">
            Athlofy is your ultimate destination for discovering, booking, and thriving in local athletic events.
            From weekend warriors to elite competitors — we’re here to support your journey.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-6">
            <span>✅ Local Events Access</span>
            <span>✅ Athlete Community</span>
            <span>✅ Verified Organizers</span>
          </div>

          <h3 className="text-xl font-bold mb-4">WHY CHOOSE ATHLOFY?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <FaRunning className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic">TRAINING RESOURCES</h4>
              <p className="text-sm text-gray-600">Access tips, workouts, and expert guidance to prepare better.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <FaLaughBeam className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic">ATHLETE COMMUNITY</h4>
              <p className="text-sm text-gray-600">Meet, compete, and connect with fellow athletes locally.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <FaUsers className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic">ALL-LEVEL WELCOME</h4>
              <p className="text-sm text-gray-600">Whether beginner or pro — everyone finds their challenge.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <FaTrophy className="text-orange-600 text-2xl mb-2" />
              <h4 className="font-bold italic">EXCLUSIVE EVENTS</h4>
              <p className="text-sm text-gray-600">Get early access to marathons, bootcamps, and meetups.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Athlofy Intro Video"
        className="bg-white p-4 rounded shadow-xl max-w-2xl mx-auto mt-20 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50"
      >
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded"
            src="https://www.youtube.com/embed/LXb3EKWsInQ" // replace with your intro video URL
            title="Athlofy Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded float-right"
        >
          Close
        </button>
      </Modal>
    </section>
  );
};

export default AboutAthlofy;
