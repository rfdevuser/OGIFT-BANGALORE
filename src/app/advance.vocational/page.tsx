import Vocational1 from "@/components/Vocational";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocational",
  description: "This is for Vocational page",
  // other metadata
};

const vocational =()=>{
  const vocation_props = {
    heroImage: '/images/courses/advoc.jpg',
    heroTitle: 'Advance Vocational Course in Garment making & Tailoring',
    heroText: 'Discover your passion for garment making and tailoring with our 12-week Advance Vocational Course. ',
    featureTitle1: 'Comprehensive Machine Training',
    featureText1: 'Embark on a journey of discovery into the world of industrial sewing machines. From understanding their intricate parts to mastering their full functionality, this course equips you with the expertise needed to operate these machines with confidence. Explore a wide array of stitches essential for garment tailoring, ensuring versatility in your craft.',
    featureTitle2: ' Fabric Expertise and Finishing Techniques',
    featureText2: 'Delve into the realm of fabrics, from their diverse types to their unique properties. Develop a keen eye for quality and suitability as you learn to select the perfect fabric for each garment. Dive deep into finishing techniques, refining your skills to achieve impeccable results in garment construction. From pattern creation to precise fabric cutting, elevate your craftsmanship to new heights.    ',  
    featureTitle3: ' Personalized Guidance and Small Class Environment',  
    featureText3: 'Experience a personalized approach to learning with dedicated guidance tailored to your individual needs. In our intimate class setting, you will receive the attention and support necessary to thrive. From conceptualization to execution, our experienced instructors will mentor you every step of the way, ensuring your success in mastering complex tailoring skills.',  
    heading:'Fashion Mastery Unleashed: Elevating Expertise with Onati Global Institute',
    subheading1: 'Comprehensive Foundation in Fashion Production',
    subdes1: 'Embark on a journey of mastery with our certificate course, providing a comprehensive foundation in garment construction, sewing techniques, and fashion production. Delve into the intricacies of industrial sewing machines, mastering various attachments and footers essential for precise tailoring. From basic sewing techniques to advanced pattern making and garment construction, students acquire a holistic understanding of the fashion production process, ensuring readiness for the industrys demands.',
    subheading2: 'Hands-On Learning for Skill Enhancement',
    subdes2: 'At Onati Global Institute of Fashion Technology, we prioritize hands-on learning to elevate students skills and proficiency in apparel tailoring and fashion production. Through a dynamic blend of theoretical knowledge and practical experience, students hone expertise in stitching, hemming, seam finishing, and garment assembly using both hand and machine sewing methods. Our instructors provide personalized guidance, fostering an environment where students develop confidence and competence in executing complex garment construction tasks with precision and flair.',

    subheading3: 'Industry-Relevant Training for Career Advancement',
    subdes3: 'Prepare for a promising career in the fashion industry with our industry-relevant training program. With a sharp focus on industry safety, standards, and best practices, our course equips students for rewarding opportunities in garment production, fashion studios, tailoring shops, and apparel manufacturing companies. From understanding fabric types and materials to mastering fashion production processes and quality control techniques, students graduate equipped with the skills and certification necessary to thrive in entry-level positions. Our expert instruction and small class sizes ensure personalized attention, empowering each student to excel in their chosen field and carve out a successful career path in fashion.',


    miniStats: {
      about: '  Advance Vocational Course ',
      duration: '12 Months',
      eligibility: '10th Pass',
      highlight: 'Employable',
    },
    feature2Title: 'Style Evolution: Diploma in Haute Couture Fashion Designing',
    feature2Text: 'Dive into the world of haute couture with our Diploma in Fashion Designing. Spanning 6 months, this course is tailor-made for individuals with a passion for fashion, offering a comprehensive curriculum designed to transform creative enthusiasts into industry-ready professionals.',
    feature21Text:' Embark on a journey of discovery as you explore the fundamentals of fashion design, delve into creative expression, and acquire hands-on skills in digital design tools and portfolio development. Our small class sizes ensure personalized attention, fostering an environment conducive to growth and innovation. Throughout the program, you will gain invaluable insights into fashion designing, from understanding fabrics and patterns to mastering sewing techniques and garment construction. Surface ornamentation techniques further enhance your repertoire, equipping you with a diverse skill set ready to tackle any design challenge. ',
    feature22Text:'Upon completion, a plethora of career opportunities awaits, from pursuing roles as a fashion designer in boutiques to becoming a stylist with renowned apparel brands. Textile design also beckons, offering avenues for artistic expression and innovation.What sets our course apart is our commitment to industry connections, providing internship opportunities with leading fashion houses like Rakhis Fashions and other esteemed companies ',
    feature23Text:' With career guidance and an industry-relevant curriculum, our program ensures you are not just prepared for the fashion world – you are poised to thrive in it. Join us and unleash your creative potential with OGIFT, your gateway to a vibrant career in fashion.'
  };

  return(
    <>
    <section className="overflow-hidden pb-[120px] pt-[90px] bg-white dark:bg-dark relative">
      <Vocational1 {...vocation_props} />
    </section>
    </>
  )
}
export default vocational;