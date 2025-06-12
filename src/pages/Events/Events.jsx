import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch events:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#f5f0ec] min-h-screen py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 pr-30">
          <div className='text-center  ml-30'>
            <h2 className="text-xs font-semibold text-orange-600 uppercase items-center text-start">|| ATHLOFY Programs ||</h2>
            <h1 className="text-4xl font-bold mt-2 text-start">
              Find Your Focus With Our <br />
              <span className="text-orange-500 text-start">Running Programs.</span>
            </h1>
          </div>
          <button className="border border-orange-500 text-orange-500  font-semibold px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition ">
            All Programs
          </button>
        </div>

        {/* Loading or Event Cards */}
        {loading ? (
          <p className="text-center text-lg font-medium">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No events available.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 md:mx-30 rounded-3xl">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.
                        eventName}
                    className="w-full h-60 object-cover"
                  />
                  {event.level && (
                    <span className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded">
                      {event.level}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                    🏃 {event.eventName}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p><span className="font-semibold">Type:</span> {event.eventType}</p>
                    <p><span className="font-semibold">Location:</span> {event.location}</p>
                    <p><span className="font-semibold">Time:</span> {event.date}</p>
                  </div>
                  <Link
                    to={`/events/${event._id || event.id}`}
                    className="inline-block bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                   View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
