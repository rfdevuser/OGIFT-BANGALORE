import Vocational1 from "@/components/Vocational";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocational",
  description: "This is for Vocational page",
  // other metadata
};

const vocational =()=>{
  const vocation_props = {
    heroImage: '/images/courses/voc-emb.jpg',
    heroTitle: 'Vocational Embroidery & Craft Course',
    heroText: 'Unlock your creative potential with our Vocational Embroidery & Craft Course. Dive into the world of painting, embroidery, sketching, and craft making in a nurturing environment with small class sizes. Explore the art of painting and embroidery, sketch captivating motifs, and master the craft of creating stunning surface ornamentation.',
    featureTitle1: 'Creative Exploration: Unleash Your Artistic Potential',
    featureText1: 'Immerse yourself in a world of endless possibilities as our course introduces you to painting, embroidery, sketching, and tracing motifs. Experience the sheer joy of self-expression through diverse artistic mediums, each stroke unlocking new dimensions of creativity within you.',
    featureTitle2: ' Versatile Skill Set: Mastering the Art of Expression',
    featureText2: 'Acquire a diverse array of skills ranging from painting various surface ornamentations to crafting intricate designs. From the delicate intricacies of embroidery to the vibrant hues of painting, explore techniques that transcend conventional boundaries, enabling you to breathe life into your artistic visions.    ',  
    featureTitle3: ' Personalized Learning Experience: Nurturing Your Creative Journey',  
    featureText3: ' Benefit from the intimacy of small class sizes, where personalized attention and guidance cultivate an environment of learning and growth. Experience firsthand the support and mentorship tailored to your needs, empowering you to unleash your creativity and excel in your craft.',  
    heading:'Crafting Mastery: Elevating Artistry in Fashion',
    subheading1: 'Crafting Excellence: Mastering Artistic Skills in Fashion',
    subdes1: ' Crafting Excellence: Mastering Artistic Skills in Fashion Embark on a transformative journey with our certificate course, designed to hone your craftsmanship in the realm of fashion. Gain proficiency in a diverse array of artistic techniques, including embroidery, painting motifs, floral adornments on fabrics, sketching, and the art of appliqué making. Our comprehensive curriculum ensures you develop a rich tapestry of craft skills essential for success in the dynamic world of fashion.',
    subheading2: 'Unlocking Pathways to Success: Diverse Career Avenues Await',
    subdes2: 'Prepare for a fulfilling career journey with an array of opportunities awaiting your expertise. Whether envisioning your own home shop, imparting knowledge as a craft teacher, contributing as a painting associate, or venturing as an entrepreneur, the possibilities are limitless. Our course equips you with the skills and entrepreneurial spirit necessary to thrive in various career paths within the creative industry.',

    subheading3: 'Hands-On Projects: Bridging Theory with Practice',
    subdes3: 'Engage in immersive projects tailored to enhance your vocational skills and unleash your creativity. From crafting intricate hand tassels to embellishing potli bags with flair, mastering flower making, and perfecting the art of appliqué, each project serves as a stepping stone towards mastery. Under expert guidance, you will refine your techniques and ignite your passion for artistic expression.',


    miniStats: {
      about: '  Vocational Embroidery',
      duration: '4 weeks',
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