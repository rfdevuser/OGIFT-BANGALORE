// Video.js
"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
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

  return (
    <div className="relative">
      <div className="absolute inset-0  bg-cover bg-center inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/images/video/vidbg.jpg')" }}></div>
      <section
        ref={videoRef}
        className="relative z-10 py-16 md:py-20 lg:py-28 video-section transition-opacity transition-transform duration-5000 ease-in-out transform opacity-0"
      >
        <div className="container">
          <SectionTitle
            title="Stylish Strides: Unveiling the Latest Trends from OGIFT"
            paragraph=" we unveil the latest trends, showcase expert tips, and provide insider insights that will elevate your style game to new heights. "
            center
            mb="80px"
          />

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[770px] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <Image src="/images/blog/jh.jpg" alt="video image" fill />
                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                        fill="#fb7185"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay={isOpen}
        start={true}
        isOpen={isOpen}
        videoId="hOnENYgKCrk"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Video;
