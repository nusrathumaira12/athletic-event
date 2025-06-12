import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import FeaturedEvents from './FeaturedEvents';

const Home = () => {
const [events, setEvents] = useState([])

    useEffect(()=> {
fetch('http://localhost:3000/featured-events')
.then(res=> res.json())
.then((data)=> setEvents(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <FeaturedEvents events={events}></FeaturedEvents>
        </div>
    );
};

export default Home;