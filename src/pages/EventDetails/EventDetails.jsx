import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [loadingEvent, setLoadingEvent] = useState(true);
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then(res => res.json())
      .then(data => {
        setEvent(data);
        setLoadingEvent(false);
      })
      .catch(err => {
        console.error('Error fetching event:', err);
        setLoadingEvent(false);
      });
  }, [id]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myBookings?email=${user.email}`, {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(data => setUserBookings(data))
        .catch(err => console.error('Error fetching bookings:', err));
    }
  }, [user?.email]);

  if (loading || loadingEvent) {
    return <span className="loading loading-dots loading-lg text-center block mt-10"></span>;
  }

  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }

  if (!event) {
    return <p className="text-center mt-10 text-red-600">Event not found.</p>;
  }

  const alreadyBooked = userBookings.some(booking => booking.eventId === id);

  const handleBooking = () => {
    if (alreadyBooked) {
      Swal.fire('Already Booked!', 'You have already booked this event.', 'warning');
      return;
    }
    const booking = {
      eventId: event._id,
      userEmail: user.email,
      eventName: event.eventName,
      date: event.eventDate || event.date,
      location: event.location,
      image: event.image,
    };

    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    })
      .then(res => {
        if (res.status === 409) {
          Swal.fire('Already Booked!', 'You have already booked this event.', 'warning');
          return;
        }
        return res.json();
      })
      .then(data => {
        if (data?.insertedId) {
          Swal.fire('Booked!', 'You have successfully booked this event.', 'success');
          navigate('/myBookings');
        }
      })
      .catch(err => {
        Swal.fire('Error', 'Failed to book the event.', 'error');
      });
  };

  const { eventName, description, image, eventDate, location: place, eventType } = event;

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 min-h-screen px-4 pb-12 pt-5 md:px-16 bg-orange-50">
      <div className="container flex flex-col-reverse justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        
        {/* Image Section Left */}
        <motion.div
          className="flex items-center justify-center p-6 mt-10 lg:mt-30 h-72  sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image}
            alt={eventName}
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded"
          />
        </motion.div>

        {/* Text Content Right */}
        <motion.div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold leading-none sm:text-6xl mb-4 text-blue-950">
            {eventName.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="dark:text-violet-600 text-orange-600">{eventName.split(' ').slice(-1)}</span>
          </h1>
<p className="mt-4 text-lg">{description}</p>
          <p className="mt-4 text-lg">Join us for an exciting and empowering experience designed for athletes and enthusiasts alike.
Each event is thoughtfully organized to promote fitness, fun, and community spirit.
Whether you're a beginner or a pro, you'll find motivation, challenge, and support.
Be part of something inspiring — make memories, meet people, and move forward with purpose.</p>
         
          <div className="mt-6 text-sm text-gray-600 space-y-1">
          <p><strong>Date:</strong> {
  (() => {
    const date = new Date(eventDate || event.date);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  })()
}</p>


            <p><strong>Location:</strong> {place || 'N/A'}</p>
            <p><strong>Type:</strong> {eventType}</p>
            <p><strong>Your Email:</strong> {user?.email}</p>
          </div>

          <motion.div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={handleBooking}
              disabled={alreadyBooked}
              className={`px-8 py-3 text-lg font-semibold rounded text-white transition 
                ${alreadyBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
            >
              {alreadyBooked ? 'Already Booked' : 'Book Now'}
            </button>

            <button
              onClick={() => navigate('/events')}
              className="px-8 py-6 text-lg font-semibold border rounded border-gray-800 dark:border-gray-700 btn btn-outline"
            >
              Back to Events
            </button>
          </motion.div>
        </motion.div>
        
      </div>
     

    
    </section>
  );
};

export default EventDetails;
