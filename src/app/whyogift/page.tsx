// import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Why OGIFT",
//   description: "This is for About us page",
//   // other metadata
// };

// const Card = ({ title, description }) => {
//   return (
//     <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md mb-4 border-4 border-purple-900">
//       <h2 className="text-lg font-bold mb-2">{title}</h2>
//       <p className="text-sm">{description}</p>
//     </div>
//   );
// };

// const whyogift = () => {
//   return (
//     <>
     
//       <section className="container  ">
//         <div className="mt-16">
//           {/* Full screen image */}
//           <img src="/images/blog/aboutimg.jpg" alt="Full Screen Image" className="w-full max-h-screen object-cover shadow-xl" />
//         </div>

//         <div className="relative mt-14">
//           <strong className="text-black dark:text-white mx-auto">
//             <h1>Why Choose Onati Global Institute of Fashion Technology?{" "}</h1>
//           </strong>
//           <div className="grid gap-2">
//             <Card title="Comprehensive Curriculum:" description="Our curriculum is carefully crafted to cover all aspects of fashion design, merchandising, marketing, and management, providing students with a well-rounded education that prepares them for diverse career opportunities." />
//             <Card title="Experienced Faculty:" description="Our faculty members are industry professionals with extensive experience and expertise in their respective fields. They bring real-world insights and practical knowledge to the classroom, enriching the learning experience for our students." />
//             <Card title="State-of-the-Art Facilities:" description="Facilities: From cutting-edge design studios to fully-equipped sewing labs, our institute offers top-notch facilities that provide students with the resources they need to bring their creative visions to life." />
//             <Card title="Industry Connections:" description="We have built strong partnerships with leading fashion companies, brands, and organizations, offering students valuable networking opportunities, internships, and hands-on experience in the industry." />
//             <Card title="Global Perspective:" description="With a focus on global trends and perspectives, we prepare students to thrive in an increasingly interconnected world. Our programs incorporate international experiences and collaborations, exposing students to diverse cultures and markets." />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default whyogift;


import DynamicHeading from "@/components/design/dynamic.heading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Why OGIFT",
  description: "This is for About us page",
  // other metadata
};


const whyogift = () => {
  return (
    <>
     
      <section className="container  ">
      <div
            className="container mx-auto px-4 pt-20 lg:px-6 lg:pt-32 xl:max-w-6xl "
          >
             
            <div className="text-center">
              <h2
                className="mb-4 text-balance text-3xl font-extrabold text-black dark:text-white md:text-5xl"
              >
              Why OGIFT?
              </h2>
              <h3
                className="mx-auto text-lg font-medium text-gray-900 md:text-xl md:leading-relaxed lg:w-2/3"
              >
              <DynamicHeading/>
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pb-16 pt-10">
            <Link
                      href="/admissions"
                      className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-purple-600 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 "
                    >
                       Enroll with us
                    </Link>
            </div>
            <div className="bg-[#4a044e] dark:bg-dark text-white py-8 text-center ">
  <div className="max-w-screen-xl mx-auto px-4">
    <p className="text-lg-bold-white">
    🎓Unlock your future in fashion with us. Join a community of creativity, innovation, and limitless style.🎓
    </p>
  </div>
</div>
            <div
              className="relative mx-5 -mb-20 rounded-xl bg-white p-2 shadow-lg sm:-mb-40 lg:mx-32"
            >
              <div className="aspect-w-full aspect-h-5 w-full bg-white dark:bg-gray-600">
                <Image
                  src="/images/whyogift/pie_chat.jpg"
                  alt="Hero Image"

                  width="500" 
                  height="300"
                  className="mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
             
            </div>
            
          </div>
          <div className="mt-60 lg:mt-60  justify-items-center"> </div>
          <div className="text-center lg:mt-10 sm:mt-10 md:mt-10">
              <h2 className="text-2xl font-extrabold text-black md:text-4xl ">
               What we offer
              </h2>
            </div>
          <div className=" grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 w-50  lg:mx-40 sm:mx-auto md:mx-auto ">
  <div className="rounded-3xl bg-white bg-opacity-5 p-6 shadow-xl  ">

    <h4 className="mb-2 text-base md:text-lg font-bold text-black dark:text-white">
      1. Thorough
    </h4>
    <p className="text-xs md:text-sm leading-relaxed text-black dark:text-white text-opacity-75"></p>
    <ul>
  <li>➤ Comprehensive training in sketching, pattern-making, and garment construction.</li>
  <li>➤ Emphasis on translating creative concepts into wearable pieces reflecting individual style.</li>
  <li>➤ Understanding consumer behavior and market trends is prioritized.</li>
  <li>➤ Acquisition of skills for developing effective merchandising strategies and marketing campaigns.</li>
</ul>
    
  </div>
  <div className="rounded-3xl bg-white bg-opacity-5 p-6 shadow-xl ">

    <h4 className="mb-2 text-base md:text-lg font-bold text-black dark:text-white">
      2. Experienced Faculty
    </h4>
    <p className="text-xs md:text-sm leading-relaxed text-black dark:text-white text-opacity-75">
    <ul>
  <li>➤ Faculty with extensive experience in the fashion industry.</li>
  <li>➤ Worked for renowned fashion houses and managed their own labels.</li>
  <li>➤ Contributed to major fashion publications, enriching industry insights.</li>
  <li>➤ Offer mentorship, guiding students through their academic journey.</li>
</ul>
    </p>
  </div>
  <div className="rounded-3xl bg-white bg-opacity-5 p-6 shadow-xl">

    <h4 className="mb-2 text-base md:text-lg font-bold text-black dark:text-white ">
      3.Cutting-edge
    </h4>
    <p className="text-xs md:text-sm leading-relaxed text-black dark:text-white text-opacity-75">
    <ul>
  <li>➤ Cutting-edge design studios furnished with the latest software and technology.</li>
  <li>➤ Spacious and well-lit environments conducive to creativity.</li>
  <li>➤ Ergonomic workstations and drafting tables for comfortable workspaces.</li>
  <li>➤ Fully-equipped sewing labs providing hands-on experience in garment construction.</li>
</ul>
    </p>
  </div>
</div>
<div className="relative  border-2 border-purple-900 z-10 mb-10 overflow-hidden rounded-md bg-[#f0abfc] dark:bg-dark bg-opacity-10 p-10 md:p-9 lg:p-8 xl:p-9 my-20 lg:my-20">
                    <p className="text-center text-base font-medium italic text-body-color ">
                  <strong>“</strong>At Onati Global Institute of Fashion Technology, students embark on a transformative journey into the vibrant world of fashion, guided by a comprehensive curriculum designed to sculpt their creative prowess and professional acumen. Led by a cadre of seasoned industry professionals, our faculty imparts not just theoretical knowledge but invaluable insights garnered from years of hands-on experience. Within our state-of-the-art facilities, students unleash their creativity, from conceptualization to creation, utilizing cutting-edge design studios and fully-equipped sewing labs. Moreover, our institutes strong ties with leading fashion entities afford students unparalleled opportunities for networking, internships, and real-world exposure, propelling them towards success in the global fashion landscape. Through a lens of global perspective, we nurture a diverse and inclusive environment, fostering cross-cultural understanding and preparing students to navigate the dynamic nuances of international markets with confidence and finesse.<strong>”</strong>
                    </p>
                    </div>

      </section>
    </>
  );
};

export default whyogift;
