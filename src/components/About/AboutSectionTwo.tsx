"use client"
import React, { useState } from "react";
import Image from "next/image";
import AnimatedHeadline from "../design/heading";
import DesignerCard from "../design/desiginer_card_course";
import PopupMessage from "../design/popUpMessageBox";


const AboutSectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // const [showPopup, setShowPopup] = useState(false);

  const handleReadMoreClick = () => {
    setShowPopup(!showPopup); // Toggle the visibility of the popup message
  };
  

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="about" className="pt-6 md:pt-6 lg:pt-12 bg-[#ffffff] dark:bg-dark">
      <AnimatedHeadline title={"𝑽𝒐𝒄𝒂𝒕𝒊𝒐𝒏 𝑪𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒆 𝑪𝒐𝒖𝒓𝒔𝒆"} />
      <div className="container">
        
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[650px] lg:mr-0 overflow-hidden">
                <Image
                  src="/images/features/voc-main.png"
                  alt="about-image"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 ">
              <div className="text-center">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Discover our Available Courses
                </h3>
              </div>
              <div className=" items-center justify-center text-center space-between-2px gap-2 ">
                <DesignerCard title={"Vocational Course in Garment making & Tailoring"} desc={"6 Months"} link={"/vocational"} />
                <DesignerCard title={"Vocational Embroidery & Craft Course"} desc={"4 weeks"} link={"/vocational_embroidery"} />
                <DesignerCard title={"Advance Vocational Course in Garment making & Tailoring"} desc={"12 Months"} link={"/advance.vocational"} />
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
                    <p className="text-gray-200">Introduction to Industrial Sewing Machine</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-xl font-semibold mb-2">𝓢𝓴𝓲𝓵𝓵𝓮𝓭</h2>
                    <p className="text-gray-200"> Pattern Making</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-xl font-semibold mb-2">𝓗𝓪𝓷𝓭𝓼 𝓸𝓷</h2>
                    <p className="text-gray-200">Garment Construction</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-xl font-semibold mb-2">𝓣𝓻𝓪𝓲𝓷𝓮𝓭</h2>
                    <p className="text-gray-200">Fashion Production Processes</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            <div className="w-full">
  <div className="container bg-transparent shadow-xxl py-8 px-4 max-w-3xl">
    {/* Conditionally render the PopupMessage component */}
    {showPopup && (
      <PopupMessage
        message={`Welcome to Onati Global Institute of Fashion Technology, where we empower individuals with the practical skills and knowledge needed to excel in the world of apparel tailoring and fashion production. Our 3-month certificate course is designed to provide a comprehensive foundation in garment construction, sewing techniques, and fashion production, preparing students for exciting career opportunities in the fashion industry.
        About the Course:
        Our vocational apparel tailoring and fashion production course are tailored to meet the needs of individuals seeking hands-on training and practical experience in garment making. Whether you're a beginner looking to start a career in fashion or a fashion enthusiast eager to enhance your skills, this course is perfect for you.
        What You'll Learn:
        Introduction to Industrial Sewing Machine: Part of The Sewing Machine, knowledge od various attachment sand footers to help in proper tailoring, introduction to basic repairs of the machine.
        Basic Sewing Techniques: Learn essential sewing techniques, including stitching, hemming, seam finishing, and garment assembly, using both hand and machine sewing methods.
        Pattern Making: Intermediate level of the art of pattern making, including drafting basic patterns, adjusting for fit, and creating custom patterns for different garment styles.
        Garment Construction: Gain practical experience in constructing garments from start to finish, including cutting fabric, assembling components, and finishing details.
        Fashion Production Processes: Understand the key stages of fashion production, including Fabric types, materials, production planning, quality control, and manufacturing techniques.
        Industry Safety and Standards: Learn about industry safety practices, equipment operation, and compliance with quality standards and regulations in garment production.
        
        
        Why Choose Our Course:
        Practical Training: Our course emphasizes hands-on learning and practical experience, allowing students to develop proficiency in garment construction and sewing techniques through real-world projects and exercises.
        Expert Instruction: Learn from experienced instructors who are passionate about sharing their knowledge and expertise in apparel tailoring and fashion production.
        Small Class Sizes: Enjoy personalized attention and support in small class sizes, ensuring that each student receives the guidance and assistance they need to succeed.
        Career Opportunities: Upon completion of the course, students will be equipped with the skills and certification needed to pursue entry-level positions in garment production, fashion studios, tailoring shops, and apparel manufacturing companies.`}
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
