import Breadcrumb from "@/components/Common/Breadcrumb";
import Payment from "@/components/Payment";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import TickerWrapper from "@/components/design/ticker";
import Image from "next/image";
import GetStudentDetails from "../components/GetStudentDetails";

export const metadata: Metadata = {
  title: "Make a payment",
  description: "This is the payments page ",
  // other metadata
};

const payments = () => {
  // const newsItems = [
  //   { title: 'New fashion design course for 2024-2025 batch starting next month! Enroll now!' },
  //   { title: 'Admission open - 2024-2025' },
  //   { title: 'Admission open - 2024-2025' },
  //   {title: 'Admission open - 2024-2025'}
  //   // Add more news items as needed
  // ];
  return (
    <>
      <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-8 md:py-20 lg:py-28  bg-[#fdf4ff]">
       
        <div className="absolute inset-0 z-0 opacity-20"  ></div>
        {/* <TickerWrapper newsItems={newsItems}/> */}
        <div className="container relative">
          <div className="flex flex-col items-center">
           <GetStudentDetails />
           
            {/* <Payment /> */}
           
          </div>
        </div>
      </section>
    </>
  );
};

export default payments;
