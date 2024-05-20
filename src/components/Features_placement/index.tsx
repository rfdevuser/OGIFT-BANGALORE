import Image from "next/image";
import React from "react";

const ImagePage: React.FC = () => {
  return (

    <div className="flex flex-col md:flex-row mt-10">

      <div className="flex-grow max-w-md lg:w-1/2 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mb-0">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image width={500} height={500} className="h-full w-full object-cover md:h-48 md:w-48" src="/images/placement/placement_poster.png" alt="Modern building architecture" />
          </div>
          <div className="p-8 dark:bg-gray-800">
            <div className="uppercase tracking-wide text-xl text-[#4a044e] dark:text-white font-semibold">100% Placement Support</div>
            <a href="/placements" className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"><u>Unlock Your Career Potential with Our Comprehensive Placement Support Program!</u></a>
            <p className="mt-2 text-slate-500 dark-text-white-200">At OGIFT, we understand the importance of kickstarting your career on the right foot. Thats why we are proud to offer 100% placement support to all our students. Our dedicated team works tirelessly to connect you with top-tier employers in your field, ensuring you have every opportunity to secure your dream job.</p>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-md lg:w-1/2 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image width={500} height={500} className="h-full w-full object-cover md:h-48 md:w-48" src="/images/placement/internship.png" alt="Modern building architecture" />
          </div>
          <div className="p-8 dark:bg-gray-800">
            <div className="uppercase tracking-wide text-xl text-[#4a044e] dark:text-white font-semibold">Assured Internship Opportunity</div>
            <a href="/placements" className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"><u>Embark on a Journey of Learning and Growth with Our Assured Internship Opportunity!</u></a>
            <p className="mt-2 text-slate-500 dark:text-white">Are you eager to gain real-world experience and kickstart your career journey? Look no further! At OGIFT, we are committed to providing you with an unparalleled internship experience that sets you up for success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
