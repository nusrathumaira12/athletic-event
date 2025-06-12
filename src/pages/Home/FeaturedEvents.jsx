import React from 'react';
import { Link } from 'react-router';

const FeaturedEvents = ({ events }) => {
  return (
    <section className="bg-[#f8f8f8] py-16">
         <div className="max-w-7xl mx-auto px-4">
        <p className='text-orange-600 text-sm mt-12 font-bold text-center mx-auto'>|| EVENT SCHEDULE ||</p>
      <h2 className=" font-bold text-center mb-8 text-4xl ">🎯 Upcoming Featured Events for <br /><span className='text-orange-600'>Runners and Athletes.</span></h2>
  
      <div className="grid gap-10 md:grid-cols-2">
          {events.map((event) => {
            const dateObj = new Date(event.date);
            const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
            const day = dateObj.getDate().toString().padStart(2, '0');

            return (
              <div
                key={event._id || event.id}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white text-center px-3 py-2 rounded-md shadow-md">
                  <div className="text-gray-500 text-xs">{month}</div>
                  <div className="text-xl font-bold text-black">{day}</div>
                </div>
                <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 w-full">
                  <h3 className="text-xl font-bold mb-2">{event.eventName}</h3>
                  <p className="text-sm mb-4">{event.description?.slice(0, 100)}...</p>
                  <Link
                    to={`/event/${event._id || event.id}`}
                    className="inline-block bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            See All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;



