import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import FeaturedEvents from './FeaturedEvents';
import Sponsors from './Sponsors';

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
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;