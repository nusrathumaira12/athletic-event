import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import axiosSecure from '../../api/axiosSecure';

const UpdateEvents = () => {
    const {id} = useParams()
   const {user} = useContext(AuthContext)
    const [eventData, setEventData] = useState(null)
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        fetch(`https://athletic-event-server.vercel.app/events/${id}`, {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => setEventData(data))
        .catch(err => console.error(err))
    }, [id])

const handleUpdateEvent = (e) => {
    e.preventDefault()
    setIsSubmitting(true);
    const form = e.target;

    const updatedEvent = {
        eventName: form.eventName.value,
        eventType: form.eventType.value,
        eventDate: form.date.value,
        location: form.location.value,
        description: form.description.value,
        image: form.image.value,
        creatorName: form.creatorName.value,
    }

    axiosSecure.patch(`/events/${id}`, updatedEvent)
    .then(res => {
        setIsSubmitting(false);
        if(res.data.modifiedCount > 0 || res.data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'Event updated successfully!'
            });
            navigate('/manageEvents');
        }
        
    })
    .catch(err => {
        setIsSubmitting(false)
        console.error(err);
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Something went wrong while updating event.'
        });
    });
}

if (!eventData) return <p className="text-center mt-10">Loading...</p>;

    return (
               <div className="min-h-screen bg-base-200 flex justify-center items-center px-4 py-10">
                 <Helmet>
                                <title>UpdateEvent |Athofy</title>
                            </Helmet>
            <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Update Event</h2>
                <form onSubmit={handleUpdateEvent} className="space-y-4">
                    <div>
                        <label className="block font-semibold">Event Name</label>
                        <input type="text" name="eventName" defaultValue={eventData.eventName} required className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold">Event Type</label>
                        <select name="eventType" required className="select select-bordered w-full" defaultValue={eventData.eventType}>
                            <option value="">Select an event type</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Sprinting">Sprinting</option>
                            <option value="Long Jump">Long Jump</option>
                            <option value="High Jump">High Jump</option>
                            <option value="Hurdle Race">Hurdle Race</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold">Event Date</label>
                        <input type="date" name="date" defaultValue={eventData.eventDate} required className="input input-bordered w-full" />
                    </div>

                    <div>
    <label className="block font-semibold">Event Location</label>
    <input
        type="text"
        name="location"
        defaultValue={eventData.location}
        required
        className="input input-bordered w-full"
    />
</div>


                    <div>
                        <label className="block font-semibold">Event Description</label>
                        <textarea name="description" defaultValue={eventData.description} rows="4" required className="textarea textarea-bordered w-full"></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold">Event Image URL</label>
                        <input type="url" name="image" defaultValue={eventData.image} required className="input input-bordered w-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold">Creator Name</label>
                            <input type="text" name="creatorName" defaultValue={eventData.creatorName} readOnly className="input input-bordered w-full bg-gray-100" />
                        </div>
                        <div>
                            <label className="block font-semibold">Creator Email</label>
                            <input type="email" name="creatorEmail" defaultValue={eventData.creatorEmail} readOnly className="input input-bordered w-full bg-gray-100" />
                        </div>
                    </div>

                    <button type="submit" className="btn bg-orange-600 text-white w-full hover:bg-orange-700" disabled={isSubmitting}>
    {isSubmitting ? (
        <span className="loading loading-spinner loading-sm"></span>
    ) : (
        'Update Event'
    )}
</button>

                </form>
            </div>
        </div>

    );
};

export default UpdateEvents;