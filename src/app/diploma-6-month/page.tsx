
import FlipCard from "@/components/Common/flipCard";
import LandingPage from "@/components/Courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diploma-6 months",
  description: "This is for Diploma 6-month page",
  // other metadata
};

const flipCardsData = [
    { frontTitle: "Uncover Insider Insights", backTitle: "Industry Connections" },
    { frontTitle: "Uncover Insider Insights", backTitle: "Internship Opportunities" },
    { frontTitle: "Uncover Insider Insights", backTitle: "Career Guidance" },
    { frontTitle: "Uncover Insider Insights", backTitle: "Industry Relevant Curriculum" },
  ];


const Diploma_six_month = () => {
  const diploma_props = {
    heroImage: '/images/courses/core3.jpg',
    heroTitle: 'Diploma in Fashion Designing',
    heroText: '"Dive into the world of fashion with our 6-month Diploma in Fashion Designing. Gain hands-on skills in design fundamentals, fabric knowledge, and garment construction, preparing you for roles as a fashion designer, stylist, or textile designer.',
    feature1Image: '/images/courses/dip.jpg',
    feature1Title: 'WHY CHOOSE THIS COURSE',
    feature1Text: ' Fashion Design Fundamentals form the cornerstone of our curriculum at Onati Global Institute of Fashion Technology.',
    feature11Text: 'Creative Exploration is the journey where imagination meets innovation, and inspiration ignites invention',  
    feature12Text: ' Mastering industry-relevant skills empowers fashion enthusiasts to stay abreast of emerging trends, execute designs with precision, and navigate the complexities of the global fashion market. ',  
    feature13Text: ' Digital Design Tools revolutionize the creative process in the fashion industry, offering designers a dynamic platform to conceptualize, iterate, and bring their visions to life in the digital realm.',  
    feature14Text: 'Portfolio Development',  
    feature15Text: 'Small class sizes at Onati Global Institute of Fashion Technology ensure a personalized and enriching learning experience for every student.',  

    miniStats: {
      about: 'Diploma ',
      duration: '6 Months',
      eligibility: 'PUC & Above',
      highlight: 'Employable',
    },
    feature2Title: 'Style Evolution: Diploma in Haute Couture Fashion Designing',
    feature2Text: 'Dive into the world of haute couture with our Diploma in Fashion Designing. Spanning 6 months, this course is tailor-made for individuals with a passion for fashion, offering a comprehensive curriculum designed to transform creative enthusiasts into industry-ready professionals.',
    feature21Text:' Embark on a journey of discovery as you explore the fundamentals of fashion design, delve into creative expression, and acquire hands-on skills in digital design tools and portfolio development. Our small class sizes ensure personalized attention, fostering an environment conducive to growth and innovation. Throughout the program, you will gain invaluable insights into fashion designing, from understanding fabrics and patterns to mastering sewing techniques and garment construction. Surface ornamentation techniques further enhance your repertoire, equipping you with a diverse skill set ready to tackle any design challenge. ',
    feature22Text:'Upon completion, a plethora of career opportunities awaits, from pursuing roles as a fashion designer in boutiques to becoming a stylist with renowned apparel brands. Textile design also beckons, offering avenues for artistic expression and innovation.What sets our course apart is our commitment to industry connections, providing internship opportunities with leading fashion houses like Rakhis Fashions and other esteemed companies ',
    feature23Text:' With career guidance and an industry-relevant curriculum, our program ensures you are not just prepared for the fashion world – you are poised to thrive in it. Join us and unleash your creative potential with OGIFT, your gateway to a vibrant career in fashion.'
  };

  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[40px] bg-white dark:bg-dark relative">

      <LandingPage {...diploma_props} />
      <div className="flex justify-center">
          {/* Render FlipCard components with custom props */}
         {flipCardsData?.length>0  && flipCardsData?.map((data , index)=>(
            <FlipCard key={index} frontTitle={data.frontTitle} backTitle={data.backTitle}/>
         )

         )}
        </div>
      </section>
    </>
  );
};

export default Diploma_six_month;
