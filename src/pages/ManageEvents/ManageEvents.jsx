import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import axiosSecure from '../../api/axiosSecure';

const ManageEvents = () => {
    const { user, loading } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/myCreatedEvents?email=${user.email}`)
                .then(res => setEvents(res.data))
                .catch(err => console.error(err));
        }
    }, [user?.email]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to delete this event?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/events/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            setEvents(prev => prev.filter(ev => ev._id !== id));
                            Swal.fire('Deleted!', 'Event has been removed.', 'success');
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire('Error', 'Something went wrong', 'error');
                    });
            }
        });
    };

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-6">
            <Helmet>
                <title>ManageEvent | Athofy</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-6">Manage Your Events</h2>
            {events.length === 0 ? (
                <p>No events created by you yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-white shadow rounded dark:bg-blue-900">
                        <thead className="bg-orange-200 dark:bg-orange-600 dark:text-white">
                            <tr>
                                <th>Serial No</th>
                                <th>Event Name</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Location</th> 
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, index) => (
                                <tr key={event._id}>
                                    <td>{index + 1}</td>
                                    <td>{event.eventName}</td>
                                    <td>{event.eventDate}</td>
                                    <td>{event.eventType}</td>
                                    <td>{event.location || 'N/A'}</td> 
                                    <td>
                                        <button
                                            onClick={() => navigate(`/updateEvent/${event._id}`)}
                                            className="btn btn-sm bg-blue-600 text-white mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(event._id)}
                                            className="btn btn-sm bg-red-600 text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageEvents;
