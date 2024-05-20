"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import AnimatedHeadline from "../design/heading";
import DesignerCard from "../design/desiginer_card_course";
import PopupMessage from "../design/popUpMessageBox";
// import PopupMessage from "./PopupMessage";

const AboutSectionOne = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showMore, setShowMore] = useState(false);

 
  // const [isOpen, setOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the video section is intersecting with the viewport, add the 'show' class
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Start observing the video section
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);
  const handleReadMoreClick = () => {
    setShowPopup(!showPopup); // Toggle the visibility of the popup message
  };
  

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    < section  ref={videoRef}  className="pt-16 md:pt-20 lg:pt-28 bg-[#ffffff] dark:bg-dark overflow-hidden transition-opacity transition-transform duration-5000 ease-in-out transform opacity-100">
      <AnimatedHeadline title={" 𝑫𝒊𝒑𝒍𝒐𝒎𝒂 𝑪𝒐𝒖𝒓𝒔𝒆 𝒊𝒏 𝑭𝒂𝒔𝒉𝒊𝒐𝒏 𝑫𝒆𝒔𝒊𝒈𝒏𝒊𝒏𝒈 "} />
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 ">
              <div className="text-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Discover our Available Courses
                </h3>
              </div>
             <div className="items-center justify-center text-center space-between-2px gap-2  ">
  <DesignerCard title={"Diploma in Fashion Designing"} desc={"6 Months"} link={"/diploma-6-month"}  />
  <DesignerCard title={"Advance Diploma in Fashion Designing"} desc={"12 Months"} link={"/advance-diploma"} />
</div>

                <div className="mb-9">
              <div className="text-center mt-5">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What You will Learn:
                </h3>
              </div>
              <div className="container mx-auto px-4 py-8 max-w-md">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white ">
                    <h2 className="text-xl font-semibold mb-2">𝓐𝓫𝓸𝓾𝓽</h2>
                    <p className="text-gray-200">Designing Fundamentals</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-xl font-semibold mb-2">𝓢𝓴𝓲𝓵𝓵𝓮𝓭</h2>
                    <p className="text-gray-200">Industry-Relevant Skills</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-xl font-semibold mb-2">𝓣𝓸𝓸𝓵𝓼</h2>
                    <p className="text-gray-200">Digital Design Tools</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-xl font-semibold mb-2">𝓖𝓮𝓽</h2>
                    <p className="text-gray-200">Internships offers</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[600px] lg:mr-0 overflow-hidden">
                <Image
                  src="/images/features/diploma-main.png"
                  alt="about-image"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full">
  <div className="container bg-transparent shadow-xxl py-8 px-4 max-w-3xl">
    {/* Conditionally render the PopupMessage component */}
    {showPopup && (
      <PopupMessage
        message={`Welcome to Onati Global Institute of Fashion Technology, where your dreams of a career in fashion come to life! Our 6-month Diploma Course in Fashion Designing with Industry-Ready Internships is your gateway to the dynamic and exciting world of fashion.
        About the Course:
        Our diploma course is meticulously crafted to provide you with a comprehensive understanding of fashion design while offering practical experience through industry-ready internships. In just six months, you will gain the skills, knowledge, and hands-on experience needed to kickstart your career in the fashion industry.
        What You'll Learn:
        Fashion Design Fundamentals: Learn the basics of fashion design, including color theory, garment construction, and pattern making, through engaging lectures and practical workshops.
        Creative Exploration: Discover your unique design style and creative voice as you explore various design techniques, trends, and concepts under the guidance of experienced faculty.
        Industry-Relevant Skills: Develop practical skills in Pattern making , draping, sewing, and textile manipulation, Fashion Production skills,honing your craftsmanship and attention to detail.
        Digital Design Tools: Introduction to the latest software used in the fashion industry for digital designing & Graphic designs. 
        Portfolio Development: Build a professional portfolio showcasing your design projects, internships, and achievements, ready to impress potential employers.
        Industry-Ready Internships:
        One of the highlights of our diploma course is the opportunity to gain real-world experience through industry-ready internships. We have established partnerships with leading fashion companies, brands, and designers, providing you with the opportunity to intern at prestigious organizations and work on live projects.
        During your internship, you will have the chance to apply your skills and knowledge in a professional setting, gain insights into industry practices, and build valuable connections with industry professionals. Whether you aspire to work in fashion design, merchandising, styling, or marketing, our internships will give you a competitive edge in the job market.
        Admissions:
        Admission to our 6-month Diploma Course in Fashion Designing is open to individuals with a passion for fashion and a desire to succeed in the industry. No prior experience is required—just a willingness to learn, explore, and create.
        Experience the Onati Advantage:
        Join us at Onati Global Institute of Fashion Technology and embark on a transformative journey towards a successful career in fashion. Our diploma course offers the perfect blend of theoretical knowledge, practical skills, and industry experience to prepare you for success in the fashion industry.
        Are you ready to take the first step towards your fashion career? Enroll in our 6-month Diploma Course in Fashion Designing with Industry-Ready Internships and unlock your potential today!
        `}
        onClose={handleClosePopup}
        fullscreen={true}
      />
    )}
    <button
      className={`mb-5 flex w-full dark:bg-gray-600 cursor-pointer items-center justify-center rounded-sm bg-dark px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-[#701a75] dark:shadow-submit-darks ${showMore ? "hidden" : ""}`}
      onClick={handleReadMoreClick} // Attach the handleReadMoreClick function
    >
      <span className="golden-text">{showMore ? "Read Less" : "Read More"}</span>
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
