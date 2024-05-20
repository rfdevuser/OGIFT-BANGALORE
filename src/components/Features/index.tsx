"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SingleFeature from './SingleFeature';
import AnimatedHeadline from '../design/heading';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = document.getElementById('features').offsetTop;
      setIsVisible(scrollTop > offsetTop - window.innerHeight / 2);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="features" className="py-8 md:py-20 lg:py-20 px-4 md:px-20 lg:px-28 relative bg-white dark:bg-black overflow-hidden">
    {/* <AnimatedHeadline title={"🎀𝐃𝐞𝐬𝐢𝐠𝐧 𝐘𝐨𝐮𝐫 𝐃𝐞𝐬𝐭𝐢𝐧𝐲: 𝐖𝐡𝐞𝐫𝐞 𝐅𝐚𝐬𝐡𝐢𝐨𝐧 𝐚𝐧𝐝 𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐢𝐭𝐲 𝐂𝐨𝐥𝐥𝐢𝐝𝐞🎀"} /> */}
    <div className="mx-auto max-w-[900px] text-center  bg-transparent">
    <motion.h1
                    className="mb-5 text-3xl-[#4a044e] bg-transparent mx-auto z-100   text-black dark:text-white sm:text-4xl  md:text-5xl "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3.5, delay: 1.0 }}
                  >
                𝐃𝐞𝐬𝐢𝐠𝐧 𝐘𝐨𝐮𝐫 𝐃𝐞𝐬𝐭𝐢𝐧𝐲: 𝐖𝐡𝐞𝐫𝐞 𝐅𝐚𝐬𝐡𝐢𝐨𝐧 𝐚𝐧𝐝 𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐢𝐭𝐲 𝐂𝐨𝐥𝐥𝐢𝐝𝐞
                  </motion.h1>
                  </div>
        <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/features/features1.jpg')" }}></div>
        <div className="relative z-10">
          <SingleFeature />
        </div>
      </section>
    </>
  );
};

export default Features;
