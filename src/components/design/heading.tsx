import React from 'react';

const AnimatedHeadline = ({ title }) => {
 


  return (
    <div className="container mx-auto px-4 pt-10 lg:px-8 lg:pt-5 xl:max-w-6xl text-center bg-white dark:bg-dark">
      <h1
        
        className="relative z-10 mb-8 text-3xl  leading-tight shadow-2xl text-black dark:text-white sm:text-4xl sm:leading-tight border-2 border-purple-900"
      >
        {title}
      </h1>
    </div>
  );
};

export default AnimatedHeadline;
