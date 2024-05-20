"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TickerWrapper from "../design/ticker";

// const string news = [
//   "New fashion design course for 2024-2025 batch starting next month! Enroll now!"
//   ];

const Hero = () => {
  // Define your image paths
  const images = [
    "/images/hero/image1.jpg",
    "/images/hero/image2.jpg",
    "/images/hero/image3.jpg",
    "/images/hero/image4.jpg",
    "/images/hero/image5.jpg",
    "/images/hero/image6.jpg",
    "/images/hero/image7.jpg",
    "/images/hero/image9.jpg",
  ];

  const newsItems = [
    { title: 'New fashion design course for 2024-2025 batch starting next month! Enroll now!' },
    { title: 'Internship opportunities available at top fashion houses. Apply now!' },
    { title: 'Learn from industry experts at our upcoming workshop series.' },
    {title: 'Exciting new collection launch next week! Stay tuned for updates.'}
    // Add more news items as needed
  ];
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Function to transition to the next image
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Transition to the next image every 5 seconds
    const interval = setInterval(nextImage, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [setCurrentImage]);

  return (
    <>
      <div style={{ overflow: "hidden" }}> {/* Apply overflow: hidden to the parent container */}
        <section
          id="home"
          className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
          {/* Background image slideshow */}
          {images?.length > 0 &&
            images?.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity -z-20 duration-1000 ${
                  index === currentImage ? "opacity-50" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                 loading="lazy"
                  quality={100}
                />
              </div>
            ))}

          <div className="container relative">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[900px] text-center  bg-transparent">
                  <motion.h1
                    className="mb-5 text-3xl-[#4a044e] bg-transparent mx-auto z-100   text-black dark:text-white sm:text-4xl  md:text-5xl "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3.5, delay: 1.0 }}
                  >
                 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐎𝐧𝐚𝐭𝐢 𝐆𝐥𝐨𝐛𝐚𝐥 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞 𝐨𝐟 𝐅𝐚𝐬𝐡𝐢𝐨𝐧 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲
                  </motion.h1>
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                      href="/founders.vision"
                      className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-purple-600 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105  "
                    >
                      Founders Vision!
                    </Link>
                    <Link
                      href="/founder"
                      className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-green-500 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 "
                    >
                      Our Mission
                    </Link>
                  </div>
                </div>
              </div>
              <TickerWrapper newsItems={newsItems}/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
