
import FlipCard from "@/components/Common/flipCard";
import LandingPage from "@/components/Courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "adv-diploma",
  description: "This is for course page",
  // other metadata
};

const flipCardsData = [
    { frontTitle: "Uncover Insider Insights", backTitle: "Industry Connections" },
    { frontTitle: "Uncover Insider Insights", backTitle: "Internship Opportunities" },
    { frontTitle: "Uncover Insider Insights", backTitle: "Career Guidance" },
    { frontTitle: "Uncover Insider Insights", backTitle: "Handson experience in Merchandising" },
  ];

const Diploma_six_month = () => {
  const diploma_props = {
    heroImage: '/images/courses/core2.jpg',
    heroTitle: 'Advance Diploma in Fashion Designing ',
    heroText: 'Embark on a dynamic journey into the world of fashion with our Advance Diploma in Fashion Designing, a comprehensive one-year program offering industry-ready education. Gain hands-on experience in fashion design fundamentals, merchandising, and digital design tools, preparing you for exciting careers as a fashion designer, stylist, merchandiser, or textile designer.',
    feature1Image: '/images/courses/adv_dip.jpg',
    feature1Title: 'WHY CHOOSE THIS COURSE',
    feature1Text: ' Dive into the heart of fashion with our meticulously crafted curriculum, where you will master the essential fashion design fundamentals, from color theory to garment construction, igniting your creative journey in style',
    feature11Text: 'Explore the various types of merchandisers and their roles in driving fashion success with our comprehensive insights and expertise.',  
    feature12Text: ' Acquire industry-relevant skills essential for success in the fast-paced world of fashion, honing your craftsmanship, trend analysis, and digital design proficiency to thrive in todays dynamic fashion landscape.',  
    feature13Text: ' Unlock the power of creativity with our comprehensive training in cutting-edge digital design tools, empowering you to bring your fashion visions to life with precision and innovation in the digital realm.',  
    feature14Text: 'Sourcing',  
    feature15Text: 'Experience personalized learning and unparalleled mentorship in our intimate class settings, where small class sizes foster a supportive environment for tailored guidance and hands-on collaboration',  

    miniStats: {
      about: 'Advance Diploma ',
      duration: '1 year ',
      eligibility: 'PUC & Above',
      highlight: 'Employable',
    },
    feature2Title: 'Fashion Fusion: Advance Diploma in Designing Excellence',
    feature2Text: 'Dive into the captivating world of fashion with our immersive Advance Diploma in Fashion Designing, a year-long program meticulously crafted to ignite your creativity and equip you with industry-ready skills. ',
    feature21Text:'From mastering the nuances of fashion design and garment construction to delving into the strategic aspects of merchandising, our comprehensive curriculum covers every facet of the fashion industry.',
    feature22Text:'Gain practical experience in digital design tools and surface ornamentation techniques while exploring the role of a merchandiser and the intricacies of sourcing and display. ',
    feature23Text:' Benefit from personalized attention in our small class sizes and seize internship opportunities with prominent companies like Rakhis Fashions to refine your craft and build a robust portfolio. Step confidently into the realm of fashion with the expertise and connections you need to thrive in this dynamic field.'
  };

  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[40px] bg-white dark:bg-dark relative">

      <LandingPage {...diploma_props} />
      <div className="flex justify-center">
          {/* {Render FlipCard components with custom props} */}
          {flipCardsData?.length>0 && flipCardsData?.map((data, index) => (
            <FlipCard key={index} frontTitle={data.frontTitle} backTitle={data.backTitle} />
          ))}
        </div>


      </section>
    </>
  );
};

export default Diploma_six_month;
