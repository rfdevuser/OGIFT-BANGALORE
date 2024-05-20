
import Image from 'next/image';
import Link from 'next/link';



interface diploma_props {
  heroImage: string;
  heroTitle: string;
  heroText: string;
  feature1Image: string;
  feature1Title: string;
  feature1Text: string;
  feature11Text: string;
  feature12Text: string;
  feature13Text: string;
  feature14Text: string;
  feature15Text: string;
  miniStats: {
    about: string;
    duration: string;
    eligibility: string;
    highlight: string;
  };
  feature2Title: string;
  feature2Text: string;
  feature21Text: string;
  feature22Text: string;
  feature23Text: string;
}

const LandingPage: React.FC<diploma_props> = ({
  heroImage,
  heroTitle,
  heroText,
  feature1Image,
  feature1Title,
  feature1Text,
  feature11Text,
  feature12Text,
  feature13Text,
  feature14Text,
  feature15Text,
  miniStats,
  feature2Title,
  feature2Text,
  feature21Text,
  feature22Text,
  feature23Text,
}) => {

  return (

    <div className="font-muli bg-[#fdf4ff] text-white">
      <div id="page-container" className="max-w-1xl mx-auto bg-white mt-10">

        {/* Hero */}
        <div className="hero overflow-hidden relative">
          <div className="bg-hero absolute w-full h-full text-white max-h-550px bg-gradient-to-r from-[#e879f9] to-[#4a044e] transform -skew-y-6 origin-top overflow-hidden z-0"></div>
          <div className="container position-relative z-10 mt-5">
            {/* Header */}
            <header className="py-5">
              {/* No content needed in header */}
            </header>
            {/* Content */}
            <div className="flex justify-center">
              <div className="md:w-8/12">
                <div className="py-5 text-center " >
                  <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 relative z-10 shadow-xl">{heroTitle}</h1>
                  <p className="text-white-75 leading-normal mx-lg-5 mb-5 relative z-10">{heroText}</p>

                  <Link href="/admissions">

                    <button className="btn btn-success bg-[#16a34a] shadow-lg uppercase font-bold py-3 px-4 relative z-10 ">
                      <i className="fas fa-check-circle mr-1"></i> Get Enroll Today
                    </button>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Hero */}

        {/* Feature #1 */}
        <div className="bg-white dark:bg-dark py-5">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Image */}
              <div className="w-full md:w-5/12 flex items-center justify-center md:justify-end py-5">
                <div className="md:mr-[40px] border-8 border-purple-900 rounded-xl">
                  <Image className="max-w-xs " width={500}
      height={500} src={feature1Image} alt="Feature 1" loading='lazy' />
                </div>
              </div>
              {/* Text */}
              <div className="w-full md:w-7/12 flex items-center justify-center md:justify-start py-5">
                <div className="pl-4 ">
                  <h2 className="font-bold text-dark dark:text-white pb-4 border-2 border-purple-900 text-center py-2">{feature1Title}</h2>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature1Text}</p>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature11Text}</p>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature12Text}</p>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature13Text}</p>
                  {/* <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature14Text}</p> */}
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature15Text}</p>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* END Feature #1 */}

        {/* END Feature #1 */}
        {/* Mini Stats */}
        <div className="bg-transparent shadow-2xl border-2 border-purple-200 py-5">
          <div className="container">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.about}</div>
                <div className="text-sm text-black font-semibold">ABOUT</div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.duration}</div>
                <div className="text-sm text-black font-semibold">DURATION</div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.eligibility}</div>
                <div className="text-sm text-black font-semibold">ELIGIBILITY</div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 py-5 text-center">
                <div className="text-4xl font-bold text-[#4a044e]">{miniStats.highlight}</div>
                <div className="text-sm text-black font-semibold">COURSE HIGHLIGHT</div>
              </div>
            </div>
          </div>
        </div>
        {/* END Mini Stats */}
        {/* Feature #2 */}
        <div className="bg-white dark:bg-dark  py-5">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Image (order-1 for smaller screens, order-0 for larger screens) */}
              <div className="w-full md:w-5/12 order-1 md:order-0 flex items-center justify-center md:justify-start py-5 md:pr-4">
                <div>
                  <Image width={500}
      height={500} className="max-w-md border-8 border-purple-900 rounded-xl" src={heroImage} alt="Feature 2" loading='lazy'/>
                </div>
              </div>
              {/* Text (order-0 for smaller screens, order-1 for larger screens) */}
              <div className="w-full md:w-7/12 order-0 md:order-1 flex items-center justify-center md:justify-start py-5 md:pl-4">
                <div className="pl-4">
                  <h2 className="font-bold text-black dark:text-white border-2 border-purple-900 text-center py-2">{feature2Title}</h2>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature2Text}</p>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature21Text}</p>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature22Text}</p>
                  <p className="leading-normal text-gray-700 dark:text-gray-300 mb-4">{feature23Text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Feature #2 */}

        {/* Footer */}
        <footer className="bg-[#f5d0fe] dark:bg-gray-700 py-5">
          <div className="container text-center py-5">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">
              Why Choose OGIFT?
            </h2>
            <p className="text-lg text-black dark:text-white mb-5">
  At OGIFT,<u> we bridge the gap between education and industry, offering unparalleled industry connections and internship opportunities that pave the way for your success. </u>Benefit from personalized career guidance and an industry-relevant curriculum curated to meet the evolving demands of the fashion world. Choose OGIFT and embark on a transformative journey towards a fulfilling and rewarding career in fashion.
</p>
<p className="text-lg text-black dark:text-white mb-5">
  <strong>Ignite Your Creativity, Unleash Your Potential:</strong>
  Embark on a transformative journey of self-discovery and artistic exploration as you delve deep into the intricacies of fashion design. From mastering the fundamental principles of garment construction and color theory to honing your proficiency in pattern making and textile manipulation, our comprehensive curriculum provides the perfect blend of theoretical knowledge and hands-on experience to nurture your creative talents.
</p>
<p className="text-lg text-black dark:text-white mb-5">
  <strong>Embark on a transformative journey of self-discovery and artistic exploration</strong> as you delve deep into the intricacies of fashion design. From mastering the fundamental principles of garment construction and color theory to honing your proficiency in pattern making and textile manipulation, our comprehensive curriculum provides the perfect blend of theoretical knowledge and hands-on experience to nurture your creative talents.
 <p></p> <strong>A Tapestry of Learning and Innovation:</strong>
  Immerse yourself in a dynamic learning environment where innovation and craftsmanship converge. Through engaging lectures, interactive workshops, and state-of-the-art facilities, you will gain invaluable insights into the latest trends, techniques, and technologies shaping the fashion landscape. Embrace the digital revolution with hands-on training in cutting-edge software for digital designing and graphic arts, equipping you with the skills necessary to thrive in todays digital-centric industry.
</p>
<p className="text-lg text-black dark:text-white mb-5">
  <strong>Crafting Your Path to Success:</strong>
  At Onati Global Institute, we believe in empowering our students to chart their own course towards success. Our personalized approach to education ensures that each student receives individualized attention and guidance, fostering a supportive learning environment conducive to growth and development. As you progress through the program, you will have the opportunity to build a professional portfolio showcasing your design projects, internships, and accomplishments, providing you with a competitive edge in the job market.
</p>
<p className="text-lg text-black dark:text-white mb-5">
  <strong>Real-World Experience, Endless Possibilities:</strong>
  One of the hallmarks of our diploma course is the opportunity to gain real-world experience through industry-ready internships. Through our extensive network of industry partners, including leading fashion houses, brands, and designers, you will have the chance to intern at prestigious organizations and work on live projects, gaining invaluable hands-on experience and forging valuable connections with industry professionals.
</p>
<Link href="/admissions">
  <button className="btn btn-success bg-[#16a34a] shadow-lg uppercase font-bold py-3 px-4 relative z-10">
    <i className="fas fa-check-circle mr-1"></i> Get Enroll Today
  </button>
</Link>
<hr className="border-dark my-5" />
<p className="text-blue-200 mb-0">
  GET SET GO!
</p>

          </div>
        </footer>
        {/* END Footer */}
      </div>
    </div>
  );
};

export default LandingPage;
