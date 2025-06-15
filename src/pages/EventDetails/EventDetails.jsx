import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const EventDetails = () => {
    const { id } = useParams()
   const [event, setEvent] =useState(null)
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

      useEffect(()=>{
        if(user?.email){
          fetch(`http://localhost:3000/myBookings?email=${user.email}`, {

            credentials: 'include'
          })
          .then(res => res.json())
          .then(data => setUserBookings(data))
          .catch(err => console.error('Error fetching bookings:', err));
        }
      },[user?.email])

    if (loading || loadingEvent) {
        return <span className="loading loading-dots loading-lg text-center block mt-10"></span>
    }


  
    if (!user) {
      return <Navigate to="/logIn" state={{from: location}}  replace />;
    }

    if (!event) {
        return <p className="text-center mt-10 text-red-600">Event not found.</p>;
      }
    
const alreadyBooked = userBookings.some(booking => booking.eventId === id)
 


  const handleBooking = () => {
    if(alreadyBooked){
      Swal.fire('Already Booked!', 'You have already booked this event.', 'warning');
      return;
    }
    const booking = {
      eventId: event._id,        // Required
      userEmail: user.email,     // Required
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
       return res.json()
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
        <div className="min-h-screen bg-[#f5f0ec] px-4 py-10 md:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
          <img src={image} alt={eventName} className="w-full h-64 object-cover rounded-md mb-6" />
          <h1 className="text-3xl font-bold mb-2">{eventName}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
  
          <div className="text-sm text-gray-600 space-y-1 mb-6">
            <p><strong>Date:</strong> {new Date(eventDate || event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {place || 'N/A'}</p>
            <p><strong>Type:</strong> {eventType}</p>
            <p><strong>Your Email:</strong> {user?.email}</p>
          </div>
  
          <button
            onClick={handleBooking}
            disabled={alreadyBooked}
            className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition
             ${ alreadyBooked ? 'opacity-50 cursor-not-allowed' : ''} `}
          >
             {alreadyBooked ? 'Already Booked' : 'Book Now'}
          </button>
        </div>
      </div>
    );
};

export default EventDetails;