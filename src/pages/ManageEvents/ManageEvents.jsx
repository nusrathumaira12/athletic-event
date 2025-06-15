import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const ManageEvents = () => {
    const { user, loading } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myCreatedEvents?email=${user.email}`, {
                credentials: 'include'
            })
                .then(res => res.json())
                .then(data => setEvents(data));
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
                fetch(`http://localhost:3000/events/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setEvents(prev => prev.filter(ev => ev._id !== id));
                            Swal.fire('Deleted!', 'Event has been removed.', 'success');
                        }
                    });
            }
        });
    };

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold mb-6">Manage Your Events</h2>
            {events.length === 0 ? (
                <p>No events created by you yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-white shadow rounded">
                        <thead className="bg-orange-200">
                            <tr>

                                <th>Serial No</th>
                                <th>Event Name</th>
                                <th>Date</th>
                                <th>Type</th>
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
