import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

import axiosSecure from '../../api/axiosSecure';

const CreateEvent = () => {
    const { user } = useContext(AuthContext)


    const handleCreateEvent = (e) => {
        e.preventDefault()
        const form = e.target;

        const newEvent = {
            eventName: form.eventName.value,
            eventType: form.eventType.value,
            eventDate: form.date.value,
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            creatorEmail: user?.email || 'N/A',
            creatorName: user?.displayName || 'N/A'

        }

        console.log("New event date:", newEvent.eventDate);

        axiosSecure.post('/events', newEvent)
            .then(res => {

                if (res.data.insertedId || res.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Event Created!',
                        text: 'Your event has been successfully posted.',
                    });
                    form.reset();
                }
            })

            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong while creating the event.',
                });
            });
    }
    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center px-4 py-10">
            <Helmet>
                <title>CreateEvent |Athofy</title>
            </Helmet>
            <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Create a New Event</h2>
                <form onSubmit={handleCreateEvent} className="space-y-4">
                    <div>
                        <label className="block font-semibold">Event Name</label>
                        <input type="text" name="eventName" required className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold">Event Type</label>
                        <select name="eventType" required className="select select-bordered w-full">
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
                        <input type="date" name="date" required className="input input-bordered w-full" />
                    </div>

                    <div>
    <label className="block font-semibold">Event Location</label>
    <input
        type="text"
        name="location"
        required
        placeholder="Enter location (e.g., Dhaka Stadium)"
        className="input input-bordered w-full"
    />
</div>


                    <div>
                        <label className="block font-semibold">Event Description</label>
                        <textarea name="description" rows="4" required className="textarea textarea-bordered w-full"></textarea>
                    </div>

                    <div>
                        <label className="block font-semibold">Event Image URL</label>
                        <input type="url" name="image" required placeholder="https://example.com/image.jpg" className="input input-bordered w-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold">Creator Name</label>
                            <input type="text" name="creatorName" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-gray-100" />
                        </div>
                        <div>
                            <label className="block font-semibold">Creator Email</label>
                            <input type="email" name="creatorEmail" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100" />
                        </div>
                    </div>

                    <button type="submit" className="btn bg-orange-600 text-white w-full hover:bg-orange-700">
                        Create Event
                    </button>
                </form>
            </div>
        </div>

    );
};

export default CreateEvent;