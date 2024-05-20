import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
      src="/images/usp_img/choose-01b.png"
      alt="logo"
      width={140}
      height={30}
      className="w-full dark:hidden"
      loading="lazy"
    />

    
    ),
    title: "   Inspiring Environment",
    paragraph:
      "Dive into a nurturing space where creativity, collaboration, and personal growth are not just encouraged but celebrated.",
  },
  {
    id: 2,
    icon: (
      <Image
      src="/images/usp_img/choose-02b.png"
      alt="logo"
      width={140}
      height={30}
      className="w-full dark:hidden"
      
    />
    ),
    title: "Unique Teaching Method",
    paragraph:
      "Explore innovative and tailored teaching approaches crafted to meet diverse learning styles, ensuring an engaging and effective educational experience.",
  },
  {
    id: 3,
    icon: (
      <Image
      src="/images/usp_img/choose-03b.png"
      alt="logo"
      width={140}
      height={30}
      className="w-full dark:hidden"
      
    />
    ),
    title: "Well-Researched Courseware",
    paragraph:
      "Access meticulously curated course materials, continuously updated to reflect the latest industry trends and insights, enriching your learning journey.",
  },
  {
    id: 4,
    icon: (
      <Image
      src="/images/usp_img/choose-04b.png"
      alt="logo"
      width={140}
      height={30}
      className="w-full dark:hidden"
      
    />
    ),
    title: "Expert & Trained Mentors",
    paragraph:
      "Learn from esteemed industry professionals and experienced educators dedicated to providing unparalleled guidance and mentorship, ensuring your academic and professional success.",
  },
  {
    id: 5,
    icon: (
      <Image
      src="/images/usp_img/choose-05b.png"
      alt="logo"
      width={140}
      height={30}
      className="w-full dark:hidden"
      
    />
    ),
    title: "   Placement Program",
    paragraph:
      " Leverage our robust placement program designed to connect you with a myriad of promising career opportunities, setting you on the path to a successful and fulfilling professional journey.",
  },
  {
    id: 6,
    icon: (
      <Image
      src="/images/usp_img/choose-06b.png"
      alt="logo"
      width={140}
      height={30}
      className="w-full dark:hidden"
      
    />
    ),
    
   title: "Bringing Industry to Classroom",
    paragraph:
      "Immerse yourself in real-world experiences and invaluable insights through our strategic industry partnerships and collaborative initiatives, bridging the gap between academia and the dynamic fashion landscape.",
  },
];
export default featuresData;
