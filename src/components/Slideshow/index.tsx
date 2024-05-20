// components/ImageSlider.js
"use client"
import { useEffect, useState } from 'react';
import hoverCard from '../Common/hovercard';
import AnimatedHeadline from '../design/heading';
import Image from 'next/image';

const images = [
  {
    src: '/images/slideshow/interview.jpg',
    caption1: 'Opportunities: Diverse Career Opportunities ',
    caption2: 'Professional Development Support',
    caption3: 'Skills: Industry-Relevant Skills',
    caption4: 'partnerships: Employer Partnerships'
  },
  {
    src: '/images/slideshow/playing_pic1.jpg',
    caption1: 'Thrilling Career Adventures ',
    caption2: 'Partners in Fun and Success',
    caption3: 'Unlock Your Superpowers',
    caption4: 'partnerships: Employer Partnerships'
  },
  {
    src: '/images/slideshow/reading_pic2.jpg',
    caption1: 'Cozy Reading Nooks',
    caption2: 'Environment: Inspiring Surroundings',
    caption3: 'Access to Diverse Resources',
    caption4: 'Community of Readers'
  },
  {
    src: '/images/slideshow/fashion_show.jpg',
    caption1: 'Campus Couture: College Fashion Show Sets Trends Ablaze!',
    caption2: 'Style on Stage: Students Showcase Creativity at College Fashion Extravaganza',
    caption3: 'Fashion Forward: College Runway Event Turns Heads with Student Designs',
    caption4: 'Breaking Boundaries: Diversity and Innovation Shine at College Fashion Gala'
  },
  {
    src: '/images/slideshow/design_ele.jpg',
    caption1: 'Creative Hub: OGIFT Nurtures Fashion Designers of Tomorrow',
    caption2: 'Design Oasis: Where Passion Meets Innovation in Fashion Education',
    caption3: 'Artistic Haven: Where Dreams Take Shape Through Fashion Design',
    caption4: 'Style Sanctuary: Empowering Students with Comprehensive Design Education'
  },
  {
    src: '/images/slideshow/pattern_sample.jpg',
    caption1: 'Cutting-Edge Campus: Where Designers Explore Limitless Possibilities',
    caption2: 'Unleash Your Creativity: College Offering Endless Cutting Materials for Fashion Design',
    caption3: 'Shears & Beyond: College Empowering Students with Access to Abundant Cutting Resources',
    caption4: 'The Scissor Kingdom: Where Designers Craft Their Dreams with Unlimited Materials'
  },
  // Add more images with captions as needed
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);

    // Cleanup function to clear interval when component unmounts or currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative mt-20">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &gt;
      </button>
    <AnimatedHeadline title={"𝐋𝐢𝐟𝐞 𝐚𝐭 𝐎𝐆𝐈𝐅𝐓"} />

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/4 mb-4 sm:mb-0">
          <div className="border-4 border-gray-500 rounded-lg overflow-hidden shadow-lg">
            <Image
            width={500}
            height={500}
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className="block w-full h-auto"
            />
          </div>
        </div>
      
        <div className='w-full mx-auto my-auto sm:w-1/2 sm:my-auto sm:mx-auto '>
        <div className="space-y-2 p-4">
  <div
    role="alert"
    className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10 flex-shrink-0 mr-2 text-green-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="text-xs font-semibold">{images[currentIndex].caption1}</p>
  </div>

  <div
    role="alert"
    className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10 flex-shrink-0 mr-2 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="text-xs font-semibold">
   { images[currentIndex].caption2}
    </p>
  </div>

  <div
    role="alert"
    className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10 flex-shrink-0 mr-2 text-yellow-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="text-xs font-semibold">
   { images[currentIndex].caption3}
    </p>
  </div>

  <div
    role="alert"
    className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10 flex-shrink-0 mr-2 text-red-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="text-xs font-semibold">{images[currentIndex].caption4}</p>
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Slideshow;
