import React from 'react';
import person1 from '../../assets/images/person1.jpg';
import person2 from '../../assets/images/person2.jpg';
import person3 from '../../assets/images/person3.jpg';
import person4 from '../../assets/images/person4.jpg';

const Testimonial = () => {
    const testimonials = [
        {
            img: person1,
            name: 'Jhankar Mahbub',
            text: 'Training here has transformed my performance. The coaches are knowledgeable and truly care about every athlete’s progress.',
        },
        {
            img: person2,
            name: 'Abu Jakaria',
            text: 'Fantastic facilities and a motivating environment. I’ve seen significant improvement in my speed and endurance since joining.',
        },
        {
            img: person3,
            name: 'Faisal Shohag',
            text: 'The personalized workout plans helped me reach my fitness goals faster than I imagined. Highly recommend for serious athletes!',
        },
        {
            img: person4,
            name: 'Ferdous Zihad',
            text: 'Great community and expert guidance. The athletics programs are well-structured and cater to all skill levels.',
        },
    ];

    return (
        <section className=" dark:bg-gray-100 dark:text-gray-800 ">
            <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12 ">
                <h1 className="p-4  text-4xl font-semibold leading-none text-center text-blue-950">
                    What our customers are saying <span className='text-orange-600'>about us</span>
                </h1>
            </div>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        img={testimonial.img}
                        name={testimonial.name}
                        text={testimonial.text}
                    />
                ))}
            </div>
        </section>
    );
};

const TestimonialCard = ({ img, name, text }) => (
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50 bg-orange-100">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                {text}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
            </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50 bg-orange-400">
            <img src={img} alt={name} className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
            <p className="text-xl font-semibold leading-tight">{name}</p>
            <p className="text-sm uppercase">Event Participant</p>
        </div>
    </div>
);

export default Testimonial;
