import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import axiosSecure from '../../api/axiosSecure';

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [isTableView, setIsTableView] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/myBookings?email=${user.email}`)
        .then(res => setBookings(res.data))
        .catch(err => console.error(err));
    }
  }, [user?.email]);
  

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to cancel this booking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
    }).then(result => {
      if (result.isConfirmed) {
        setDeletingId(id);
        axiosSecure
        .delete(`/myBookings/${id}`)
        .then(res => {
          if (res.data.deletedCount > 0) {
            setBookings(prev => prev.filter(b => b._id !== id));
            Swal.fire('Deleted!', 'Booking has been canceled.', 'success');
          }
        })
        .catch(error => {
          console.error(error);
          Swal.fire('Error', 'Something went wrong while deleting', 'error');
        })
        .finally(() => setDeletingId(null));
      
      }
    });
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Bookings</h2>
        <button
          onClick={() => setIsTableView(!isTableView)}
          className="btn bg-orange-600 text-white"
        >
          {isTableView ? 'Switch to Card View' : 'Switch to Table View'}
        </button>
      </div>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : isTableView ? (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-orange-200 text-left">
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking._id}>
                  <td>{booking.eventName}</td>
                  <td>{booking.date}</td>
                  <td>{booking.location}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                      disabled={deletingId === booking._id}
                    >
                      {deletingId === booking._id ? 'Cancelling...' : 'Cancel'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookings.map(booking => (
            <div key={booking._id} className="bg-white rounded shadow p-4 relative">
              <img
                src={booking.image}
                alt={booking.eventName}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-bold text-lg">{booking.eventName}</h3>
              <p>Date: {booking.date}</p>
              <p>Location: {booking.location}</p>
              <button
                onClick={() => handleDelete(booking._id)}
                className="btn btn-sm bg-red-600 text-white absolute right-4 bottom-12"
                disabled={deletingId === booking._id}
              >
               {deletingId === booking._id ? 'Cancelling...' : 'Cancel'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
