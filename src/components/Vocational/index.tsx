"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
interface vocational_Propos {
  heroImage: string;
  heroTitle: string;
  heroText: string;
  featureTitle1: string,
  featureText1: string,
  featureTitle2: string,
  featureText2: string,
  featureTitle3: string,
  featureText3: string,
  heading: string,
  subheading1: string,
  subdes1: string,
  subheading2: string,
  subdes2: string,
  subheading3: string,
  subdes3: string,

  miniStats: {
    about: string;
    duration: string;
    eligibility: string;
    highlight: string;
  };
  feature2Title: string;
  feature2Text: string;
  feature21Text: string;
  feature22Text: string;
  feature23Text: string;
}


const Vocational1: React.FC<vocational_Propos> = ({ heroImage,
  heroTitle,
  heroText,
  featureTitle1,
  featureText1,
  featureTitle2,
  featureText2,
  featureTitle3,
  featureText3,
  heading,
  subheading1,
  subdes1,
  subheading2,
  subdes2,
  subheading3,
  subdes3,

  miniStats,
  feature2Title,
  feature2Text,
  feature21Text,
  feature22Text,
  feature23Text, }) => {
  const images = [
    "/images/vocational/voc1.jpg",
    "/images/vocational/voc2.jpg",
    "/images/vocational/voc3.jpg",
    "/images/vocational/voc4.jpg",
    "/images/vocational/voc5.jpg",
    "/images/vocational/voc6.jpg",
    "/images/vocational/voc7.jpg",
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
  }, [nextImage]);

  return (
    <div
      id="page-container"
      className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100"
    >

      {/* <!-- Page Content --> */}
      <main id="page-content" className="flex max-w-full flex-auto flex-col">
        {/* <!-- Hero --> */}
        <div className="relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity ${index === currentImage ? "opacity-15" : "opacity-0"
                }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
            </div>
          ))}
          <div className=" ">



          </div>

          {/* <!-- Hero Content --> */}
          <div
            className="container mx-auto px-4 pt-10 lg:px-8 lg:pt-32 xl:max-w-6xl"
          >
            <div className="text-center">
              <h2
                className="mb-4 text-balance text-3xl font-extrabold text-black md:text-5xl"
              >
                {heroTitle}
              </h2>
              <h3
                className="mx-auto text-lg font-medium text-gray-900 md:text-xl md:leading-relaxed lg:w-2/3"
              >
                {heroText}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pb-16 pt-10">
              <Link href="/admissions">

                <button className="btn btn-success bg-[#16a34a] shadow-lg uppercase font-bold py-3 px-4 relative z-10 ">
                  <i className="fas fa-check-circle mr-1"></i> Get Enroll Today
                </button>

              </Link>
            </div>
            <div
              className="relative mx-5 -mb-20 rounded-xl bg-white p-2 shadow-lg sm:-mb-40 lg:mx-32"
            >
              <div className="aspect-w-16 aspect-h-10 w-full bg-white-200">
                <Image
                width={500}
                height={500}
                  src={heroImage}
                  alt="Hero Image"
                loading="lazy"

                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* <!-- END Hero Content --> */}
        </div>
        {/* <!-- END Hero --> */}
        {/* Mini Stats */}

        <div className="bg-[#fae8ff] py-5 mt-40">
          <div className="container">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.about}</div>
                <div className="text-sm text-black font-semibold">ABOUT</div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.duration}</div>
                <div className="text-sm text-black font-semibold">DURATION</div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.eligibility}</div>
                <div className="text-sm text-black font-semibold">ELIGIBILITY</div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.highlight}</div>
                <div className="text-sm text-black font-semibold">COURSE HIGHLIGHT</div>
              </div>
            </div>
          </div>
        </div>
        {/* END Mini Stats */}
        {/* <!-- Features Section --> */}
        <div className="bg-white dark:bg-dark pt-10">


          <div
            className="container mx-auto space-y-8  px-4 py-14 lg:px-8 lg:py-32 xl:max-w-6xl"
          >
            {/* <!-- Heading --> */}
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
                WHY CHOOSE THIS COURSE
              </h2>
              <h3
                className="mx-auto text-lg font-medium text-gray-600 dark:text-gray-300 md:text-xl md:leading-relaxed lg:w-2/3"
              >
                Discover why our course is the perfect choice for your personal and professional development journey
              </h3>
            </div>
            {/* <!-- END Heading --> */}

            {/* <!-- Features --> */}
            <div className="grid grid-cols-1  md:grid-cols-4 md:gap-12 justify-center">
  <div className="container bg-[color]">
    <div className="hidden md:block">
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <div className=" text-center">
    <div className="relative mb-2 ml-3 inline-flex h-16 w-16 items-center justify-center">
    </div>
    <h4 className="mb-2 text-xl font-bold">{featureTitle1}</h4>
    <p className="border-2 border-purple-900 p-2 text-left leading-relaxed text-gray-600 dark:text-gray-300">
      {featureText1}
    </p>
  </div>
  <div className=" text-center">
    <div className="relative mb-2 ml-3 inline-flex h-16 w-16 items-center justify-center">
    </div>
    <h4 className="mb-2 text-xl font-bold">{featureTitle2}</h4>
    <p className="border-2 border-purple-900 p-2 text-left leading-relaxed text-gray-600 dark:text-gray-300">
      {featureText2}
    </p>
  </div>
  <div className=" text-center">
    <div className="relative mb-2 ml-3 inline-flex h-16 w-16 items-center justify-center">
    </div>
    <h4 className="mb-2 text-xl font-bold">{featureTitle3}</h4>
    <p className="border-2 border-purple-900 p-2 text-left leading-relaxed text-gray-600 dark:text-gray-300">
      {featureText3}
    </p>
  </div>
</div>

            {/* <!-- END Features --> */}
          </div>
        </div>
        {/* <!-- END Features Section --> */}

        {/* <!-- How it works --> */}
        <div className="relative bg-white">
          <div className="absolute inset-0 skew-y-1 bg-[#fae8ff] dark:bg-gray-700 "></div>
          <div
            className="container relative mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl"
          >
            {/* <!-- Heading --> */}
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-black md:text-4xl">
                {heading}
              </h2>
            </div>
            {/* <!-- END Heading --> */}

            {/* <!-- Steps --> */}
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            >
              <div
                className="rounded-3xl bg-white bg-opacity-5 p-10 shadow-sm transition hover:bg-opacity-30"
              >

                <h4 className="mb-2 text-lg font-bold text-black">
                  1.{subheading1}
                </h4>
                <p className="text-m leading-relaxed text-black text-opacity-75">
                  {subdes1}
                </p>
              </div>
              <div
                className="rounded-3xl bg-white bg-opacity-5 p-10 shadow-sm transition hover:bg-opacity-30"
              >

                <h4 className="mb-2 text-lg font-bold text-black">
                  2.{subheading2}
                </h4>
                <p className="text-m leading-relaxed text-black text-opacity-75">
                  {subdes2}
                </p>
              </div>
              <div
                className="rounded-3xl bg-white bg-opacity-5 p-10 shadow-sm transition hover:bg-opacity-30 sm:col-span-2 lg:col-span-1"
              >

                <h4 className="mb-2 text-lg font-bold text-black">
                  3. {subheading3}
                </h4>
                <p className="text-m leading-relaxed text-black text-opacity-75">
                  {subdes3}
                </p>
              </div>
            </div>
            {/* <!-- END Steps --> */}
          </div>
        </div>




        {/* <!-- Stats Section --> */}
        <div className="bg-purple-900">
          <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
            <div
              className="grid grid-cols-1 divide-y divide-gray-800 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            >
              <dl className="space-y-1 px-5 py-16 lg:py-32">
                <dt className="text-4xl font-extrabold text-white">2000+</dt>
                <dd
                  className="text-sm font-semibold uppercase tracking-wide text-blue-400"
                >
                 Customers of our designs
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-16 lg:py-32">
                <dt className="text-4xl font-extrabold text-white">6+</dt>
                <dd
                  className="text-sm font-semibold uppercase tracking-wide text-blue-400"
                >
                  Coursework
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-16 lg:py-32">
                <dt className="text-4xl font-extrabold text-white">100+</dt>
                <dd
                  className="text-sm font-semibold uppercase tracking-wide text-blue-400"
                >
                  equipment
                </dd>
              </dl>
            </div>
          </div>
        </div>
        {/* <!-- Stats Section --> */}


      </main>
      {/* <!-- END Page Content --> */}
    </div>
  )
};

export default Vocational1;