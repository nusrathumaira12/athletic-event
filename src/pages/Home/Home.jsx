import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import FeaturedEvents from './FeaturedEvents';
import Sponsors from './Sponsors';
import AboutAthlofy from './AboutAthlofy';
import { Helmet } from 'react-helmet-async';
import Testimonial from './Testimonial';

const Home = () => {
const [events, setEvents] = useState([])

    useEffect(()=> {
fetch('https://athletic-event-server.vercel.app/featured-events')
.then(res=> res.json())
.then((data)=> setEvents(data))
    }, [])
    return (
        <div>
             <Helmet>
        <title>Home | Athlofy</title>
      </Helmet>
            <Banner></Banner>
            <FeaturedEvents events={events}></FeaturedEvents>
            <AboutAthlofy></AboutAthlofy>
            <Testimonial></Testimonial>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;