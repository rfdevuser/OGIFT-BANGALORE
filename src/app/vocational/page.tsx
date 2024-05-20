import Vocational1 from "@/components/Vocational";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocational",
  description: "This is for Vocational page",
  // other metadata
};

const vocational =()=>{
  const vocation_props = {
    heroImage: '/images/courses/voc.jpg',
    heroTitle: 'Vocational Course in Garment making & Tailoring',
    heroText: 'From mastering industrial sewing machines to understanding fabric types and patterns, you will receive comprehensive training in garment construction.',
    featureTitle1: 'Mastering Industrial Sewing Machines',
    featureText1: 'Embark on a journey into the world of industrial sewing machines. Learn about their intricate parts and functionalities from seasoned experts. Gain hands-on training in operating these machines with finesse, setting the stage for your sewing prowess.',
    featureTitle2: ' Crafting Garments with Precision',
    featureText2: 'Unlock the secrets of tailoring excellence as you delve into various stitches essential for garment creation. Explore the nuances of different fabric types and discover the art of impeccable finishing touches. With our guidance, you will refine your skills to create garments of unparalleled quality.    ',  
    featureTitle3: ' From Patterns to Perfection',  
    featureText3: ' Dive into the realm of patterns and fabric cutting, mastering the fundamentals of garment construction. Receive personalized guidance on tailoring projects, ensuring your skills are honed to perfection. Benefit from our intimate class sizes, fostering an optimal learning environment for your sewing journey.',  
    heading:'Empower Your Fashion Future: Tailoring Excellence at Onati Global Institute',
    subheading1: 'Comprehensive Foundation in Fashion Production',
    subdes1: 'Our certificate course offers a comprehensive foundation in garment construction, sewing techniques, and fashion production. Students delve into the intricacies of industrial sewing machines, mastering various attachments and footers essential for precise tailoring. Additionally, they learn basic repairs, ensuring seamless workflow in professional settings. From basic sewing techniques to advanced pattern making and garment construction, students acquire a holistic understanding of the fashion production process.',
    subheading2: 'Hands-On Learning for Skill Enhancement',
    subdes2: 'At Onati Global Institute of Fashion Technology, we prioritize hands-on learning to enhance students skills and proficiency in apparel tailoring and fashion production. Through a blend of theoretical knowledge and practical experience, students gain expertise in stitching, hemming, seam finishing, and garment assembly using both hand and machine sewing methods. Our instructors provide personalized guidance, allowing students to develop confidence and competence in executing complex garment construction tasks.',

    subheading3: 'Industry-Relevant Training for Career Advancement',
    subdes3: 'With a focus on industry safety, standards, and best practices, our course prepares students for rewarding career opportunities in the fashion industry. From understanding fabric types and materials to mastering fashion production processes and quality control techniques, students graduate equipped with the skills and certification necessary to thrive in entry-level positions in garment production, fashion studios, tailoring shops, and apparel manufacturing companies. Our expert instruction and small class sizes ensure that each student receives the attention and support needed to excel in their chosen field.',


    miniStats: {
      about: ' Vocational skill development ',
      duration: '6 Months',
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