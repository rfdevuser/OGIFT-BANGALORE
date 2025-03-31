import CardComponent from "@/components/Common/Card";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { Metadata } from "next";
import Image from "next/image";
import { motion } from 'framer-motion';
import { cardComponentData, cardData } from "./placementsData";
import AnimatedHeadline from "@/components/design/heading";
import client from "@/utils/apollo/ApolloClient";
import { FETCH_ALL_PRODUCTS_QUERY } from "@/utils/gql/GQL_QUERIES";
import ImagePage from "@/components/Features_placement";
export const metadata: Metadata = {
  title: "Placement",
  description: "This is for placement page",
  // other metadata
};

const Card = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md mb-4 border-2 border-purple-900">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const BlogSidebarPage = () => {

  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[90px] bg-white dark:bg-dark relative">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4">
              <div className="relative">
                <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/features/fashions.jpg')" }}></div>
                {/* <AnimatedHeadline title={"𝑷𝒍𝒂𝒄𝒆𝒎𝒆𝒏𝒕 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝒂𝒕 𝑶𝑮𝑰𝑭𝑻"}/> */}
                <div className="container mx-auto px-4 pt-10 lg:px-8 lg:pt-5 xl:max-w-6xl text-center bg-white dark:bg-dark">
                  <h1

                    className="relative z-10 mb-8 text-3xl   shadow-2xl text-black dark:text-white sm:text-4xl  border-2 border-purple-900"
                  >
                 Placement Support at OGIFT
                
                  </h1>
                 
                </div>
                <div className="container mx-auto px-4 pt-10 lg:px-8 lg:pt-5 xl:max-w-6xl text-center bg-white dark:bg-dark">
                
                  <h1

                    className="relative z-10 mb-8 text-xl   shadow-2xl text-black dark:text-white sm:text-xl  border-2 border-purple-900"
                  >
                 <a href="www.rakhisfashions.in><img width="200px" height="200px" src="/rf.jpeg"/></a>Affiliated to Rakhis Fashions, A Leading Designing and Manufacturing Company.
                 
                  </h1>
                 
                 
                </div>
                <h2></h2>
                <p className="mb-10 text-black font-medium leading-relaxed bg-white dark:bg-gray-700 text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  At Onati Global Institute of Fashion Technology, we are committed to not only providing top-notch education but also ensuring that our students have the support they need to kickstart their careers in the fashion industry. Our comprehensive placement support services are designed to connect students with exciting job opportunities and internships, paving the way for a successful and fulfilling career journey.
                </p>
                <strong className="text-black dark:text-white mx-auto">
                  <h1>What Sets Us Apart:</h1>
                </strong>
                <div className="grid gap-2 lg:flex lg:flex-wrap">
                  {cardData?.map((data, index) => (
                    <Card key={index} {...data} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-4/12 px-4">
              <NewsLatterBox />
              <div className="lg:block border-2 border-purple-100 ">
                <Image
                  src="/images/admission/admissionGraph.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[900px] text-center  bg-transparent">
    <h1 className="mb-5 text-3xl-[#4a044e] bg-transparent mx-auto z-100   text-black dark:text-white sm:text-4xl  md:text-5xl ">
        𝑶𝒖𝒓 𝑷𝒓𝒐𝒎𝒊𝒔𝒆: 𝑼𝒏𝒍𝒐𝒄𝒌𝒊𝒏𝒈 𝒀𝒐𝒖𝒓 𝑭𝒖𝒕𝒖𝒓𝒆
        
                  </h1>
                  
                  </div>
                <ImagePage/>
          <div className="w-full md:w-6/12 lg:w-12/12 py-5 text-center lg:hidden">
            <div className="flex flex-col">
              {cardComponentData?.map((data, index) => (
                <CardComponent key={index} {...data} />
              ))}
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
