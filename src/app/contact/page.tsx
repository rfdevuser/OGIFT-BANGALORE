import Breadcrumb from "@/components/Common/Breadcrumb";
import ShareButtons from "@/components/Common/shareButtom";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <><div className="bg-[#fce7f3] dark:bg-dark">
      <Breadcrumb
        pageName="Let's Talk Fashion"
        description="At Onati Global, we believe in open communication and transparency. If you have any questions about our programs, admissions, or anything else, please don't hesitate to get in touch. We're committed to providing you with the information and support you need."
      />
    
      <div className="flex flex-col-reverse lg:flex-row h-screen ">
        {/* Map Section */}
        <div className="lg:flex-1 h-3/5 lg:h-full">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            title="Onati Global Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.099051299844!2d77.65718521483686!3d12.95413019086904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173f2d5533a1%3A0x9b0481f2923aa1f4!2sOnati%20Global!5e0!3m2!1sen!2sin!4v1619787113557!5m2!1sen!2sin"
          ></iframe>
        </div>
        {/* Info Box Section */}
        <div className="w-full mx-auto my-auto sm:w-full sm:my-auto sm:mx-auto lg:w-1/2 lg:ml-4">
      <div className="bg-[#4a044e] dark:bg-gray-700 text-white p-8 rounded-lg shadow-lg">
        {/* Logo and Institute Name */}
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/images/logo/logo-3.svg"
            alt="Logo"
            width={500}
      height={500}
            className="h-16 w-16 mr-4"
          />
          <h1 className="text-2xl font-bold">Onati Global Institute of Fashion Technology</h1>
        </div>

        {/* Address Section */}
        <div className="text-xl">
          <p className="font-bold mb-2">Address:</p>
          <p>No 4 5th Main 1st Cross B Block,</p>
          <p>4th Main Vinayakanagar ,</p>
          <p>Bengaluru, Karnataka 560017</p>
          <h1>Email: admissions@ogiftbangalore.com</h1>
            <p></p><h1>Contact Counsellor : +91 90369 28799</h1>
        </div>
      </div>
    </div>
      </div>
      <div className="bg-[#4a044e] dark:bg-gray-400 text-white py-8 text-center mt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <p className="text-lg-bold-white">
        🌕Connect with us to ignite your passion for fashion and explore endless possibilities in style.🌕
        </p>
      </div>
    </div>
    <div className="bg-[#f5d0fe] dark:bg-gray-700">
      <Contact />
      </div>
      </div>
    </>
  );
};

export default ContactPage;
