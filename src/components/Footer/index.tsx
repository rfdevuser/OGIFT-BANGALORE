import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsLatterBox from "../Contact/NewsLatterBox";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-white pt-5 dark:bg-gray-dark md:pt-20 lg:pt-8 "style={{ backgroundImage: "url('/images/footer/des2.jpg')", backgroundSize: "cover", backgroundPosition: "center" , }}>
      <div className="relative container z-20 ">
        <div className="flex flex-wrap justify-center items-center ">
          {/* Logo and Useful Links */}
          <div className=" md:w-1/2 lg:w-4/12 xl:w-4/12 mb-8 md:mb-0 text-center">
            <div className="mb-6 max-w-[400px] lg:mb-0 md:mx-auto ">
              <Link href="/" className="item-center">
                <div className="flex justify-center mx-auto"> 
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full"
                    width={100}
                    height={20}
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
            
            <ul className="space-y-4">
              <li>
                <Link
                  href="/admissions"
                  className="text-sm text-black duration-300 hover:text-primary dark:text-black dark:hover:text-dark"
                >
                <strong>  Admission</strong>
                </Link>
              </li>
              <li>
                <Link
                  href="/whyogift"
                  className="text-sm text-black duration-300 hover:text-primary dark:text-black dark:hover:text-dark"
                >
               <strong>Why OGIFT?</strong> 
                </Link>
              </li>
              <li>
                <Link
                  href="/diploma-6-month"
                  className="text-sm text-black duration-300 hover:text-primary dark:text-black dark:hover:text-dark"
                >
                <strong> Diploma in Fashion Designing</strong>
                </Link>
              </li>
              <li>
                <Link
                  href="/vocational"
                  className="text-sm text-black duration-300 hover:text-primary dark:text-black dark:hover:text-dark"
                >
              <strong>Vocational Course in Garment making & Tailoring </strong>
                </Link>
              </li>
              <li>
                <Link
                  href="/vocational_embroidery"
                  className="text-sm text-black duration-300 hover:text-primary dark:text-black dark:hover:text-dark"
                >
              <strong>Vocational Embroidery & Craft Course</strong> 
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Address */}
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-4/12 md:text-center ">
          <div className=" mt-2">  <p className="mb-4 text-sm text-black dark:text-black">
             <strong> Institute Address</strong>
            </p>
            <p>No 4 5th Main 1st Cross B Block,</p>
            <p>4th Main Vinayakanagar,</p>
            <p>Bengaluru 17, Karnataka</p>
            <h1>Email: admissions@ogiftbangalore.com</h1>
            <p></p><h1>Contact: +91 9036928800</h1>
            </div>
          <div className="mx-auto sm:mx-30 md:mx-30"> 
            <Link href='https://api.whatsapp.com/send/?phone=%2B919036928800&text=Hi+Team%2C+is+there+any+related+service+available+%3F&type=phone_number&app_absent=0'>
            <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-full rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-[#86198f] mt-10 text-center ">

  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
  <p className="z-10 absolute bottom-2 left-2 ">Chat with us</p>
</button>
</Link>
          </div>
          </div>
          {/* Newsletter Box */}
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>

        {/* Divider */}
       
      </div>
      <div><div className="flex items-center justify-center h-full">
 
      <Link href="https://www.facebook.com/profile.php?id=61557904023674">
  <button
    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Facebook
  </button>
</Link>
  {/* <button
    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    YouTube
  </button> */}
  <Link href= "mailto:admissions@ogiftbangalore.com?subject=Inquiry%20about%20Admissions">
  <button
    className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Email
  </button>
  </Link>
  <Link href =" https://www.facebook.com/profile.php?id=61557904023674">
  <button
    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    type="button"
  >
    Instagram
  </button>
  </Link>
  
</div>
</div>
    </footer>
  );
};

export default Footer;
