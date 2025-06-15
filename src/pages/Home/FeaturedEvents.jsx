import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const FeaturedEvents = ({ events }) => {
  return (
    <section className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-orange-600 text-sm mt-12 font-bold text-center mx-auto">|| EVENT SCHEDULE ||</p>
        <h2 className="font-bold text-center mb-20 text-5xl">
          🎯 Upcoming Featured Events for <br />
          <span className="text-orange-600">Runners and Athletes.</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {events.map((event, index) => {
            const date = new Date(event.eventDate || event.date);
            const month = !isNaN(date) ? date.toLocaleString('default', { month: 'short' }).toUpperCase() : 'N/A';
            const day = !isNaN(date) ? date.getDate().toString().padStart(2, '0') : '--';

            return (
              <motion.div
                key={event._id || event.id}
                className="relative rounded-xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="w-full h-94 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white text-center px-5 py-4 font-extrabold rounded-md shadow-md">
                  <div className="text-gray-500 text-xl">{month}</div>
                  <div className="text-2xl font-bold text-blue-900">{day}</div>
                </div>
                <div className="absolute bottom-0 md:flex bg-gradient-to-t from-black/80 to-transparent text-white p-6 w-full mt-10 justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">{event.eventName}</h3>
                    <p className="text-sm font-bold mb-2 mt-2">
                      Location: <span className="p-2 rounded-sm">{event.location || 'Not Selected'}</span>
                    </p>
                  </div>

                  <div>
                    <Link
                      to={`/events/${event._id || event.id}`}
                      className="inline-block bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            See All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
