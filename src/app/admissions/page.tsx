import Breadcrumb from "@/components/Common/Breadcrumb";
import Admission from "@/components/Admission";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import TickerWrapper from "@/components/design/ticker";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admission",
  description: "This is Admission page",
  // other metadata
};

const ContactPage = () => {
  const newsItems = [
    { title: 'New fashion design course for 2024-2025 batch starting next month! Enroll now!' },
    { title: 'Admission open - 2024-2025' },
    { title: 'Admission open - 2024-2025' },
    {title: 'Admission open - 2024-2025'}
    // Add more news items as needed
  ];
  return (
    <>
      <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-8 md:py-20 lg:py-28  bg-[#fdf4ff]">
       
        <div className="absolute inset-0 z-0 opacity-20"  ></div>
        <TickerWrapper newsItems={newsItems}/>
        <div className="container relative">
          <div className="flex flex-col items-center">
            <SectionTitle
              title="Admissions"
              paragraph="Welcome to the vibrant community of OGIFT, where your passion for creativity meets unparalleled opportunities for growth and learning.
              Kindly Note that the registrations fees are non-refundable."
              center
            />
            <Admission />
           
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
