import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('default');



  useEffect(() => {
    fetch('https://athletic-event-server.vercel.app/events')
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

  let filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchText.toLowerCase()) ||
    event.location?.toLowerCase().includes(searchText.toLowerCase())
  );
  
  // Apply sorting
  if (sortOption === 'name-asc') {
    filteredEvents.sort((a, b) => a.eventName.localeCompare(b.eventName));
  } else if (sortOption === 'name-desc') {
    filteredEvents.sort((a, b) => b.eventName.localeCompare(a.eventName));
  } 
  

  return (
    
    <div className="bg-[#f5f0ec] min-h-screen py-12 px-4 md:px-16">
      <Helmet>
              <title>Events | Athlofy</title>
            </Helmet>
      <div className="max-w-7xl mx-auto">
       
        <div className="flex justify-between items-center mb-12 pr-30">
          <div className='text-center  ml-30'>
            <h2 className="text-xs font-semibold text-orange-600 uppercase items-center text-start">|| ATHLOFY Programs ||</h2>
            <h1 className="text-4xl font-bold mt-2 text-start dark:text-blue-900">
              Find Your Focus With Our <br />
              <span className="text-orange-500 text-start">Running Programs.</span>
            </h1>
          </div>
          <button className="border border-orange-500 text-orange-500  font-semibold px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition ">
            All Programs
          </button>
        </div>

       
        

<div className=" mb-6 md:pr-10 flex flex-col md:flex-row  justify-between items-center gap-4">
  <div className="w-full md:w-1/2">
    <input
      type="text"
      placeholder="Search by event name or location..."
      className="w-full md:ml-28 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:text-black"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  </div>

  <select
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
    className="px-6 py-2 md:mr-10  border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:text-black"
  >
    <option value="default">Sort by</option>
    <option value="name-asc">Name (A-Z)</option>
    <option value="name-desc">Name (Z-A)</option>
    {/* <option value="date-asc">Date (Oldest First)</option>
    <option value="date-desc">Date (Newest First)</option> */}
  </select>
</div>


        {loading ? (
          <p className="text-center text-lg font-medium">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No events available.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 md:mx-30 rounded-3xl">
            {filteredEvents.map((event) => (

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
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-2 dark:text-black">
                    🏃 {event.eventName}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p><span className="font-semibold">Type:</span> {event.eventType}</p>
                    <p><span className="font-semibold">Location:</span> {event.location || "Dhaka"}</p>
                    <p><span className="font-semibold">Date:</span> {event.eventDate}  {event.date}</p>
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
              {!loading && filteredEvents.length === 0 && (
              <p className="text-center text-gray-600 font-medium col-span-2">
                No matching events found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
