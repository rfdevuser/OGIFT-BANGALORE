import ShareButtons from "@/components/Common/shareButtom";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder " ,
  description: "This is our founder ",
  // other metadata
};

const founder = {
  name: 'Rakhi P',
  image: '/images/blog/author-02.jpg',
  message: '"We empower individuals with the tools and expertise to thrive in the global fashion landscape. We foster creativity, encourage experimentation, and instill a deep understanding of design principles and industry practices. Through our innovative programs and dedicated faculty, we cultivate the next generation of fashion leaders who will shape the future of the industry."',
  facebook: 'facebook-url',
  instagram: 'instagram-url',
  twitter: 'twitter-url'
};

const AboutFounder = () => {
  return (
    <section className="pb-16 pt-20 relative " >
      
      <div className="relative">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/missionbg.jpg')" }}></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-2 items-center justify-center p-2 relative z-10">
          <div className="flex-1 p-2">
            <Image src={founder.image} alt={founder.name} width={300} height={300} loading="lazy" className="border-4 border-purple-900 rounded-lg mb-4 mx-auto" />
            
          </div>
          <div className="flex-3">
            <h2 className="text-3xl font-bold mb-4" >Founders Mission</h2>
            <p className="text-lg p-5 border-2 border-purple-900">{founder.message}</p>
          </div>
          <Link href='https://in.linkedin.com/in/rakhi-peethamber-a8786b60'>
            <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-10 w-full rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-[#86198f] mt-2 text-center ">

  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
  <p className="z-10 absolute bottom-2 left-2 ">Rakhi Peethamber </p>
</button>
</Link>
        </div>
      </div>
    </section>
    
  );
};

export default AboutFounder;
