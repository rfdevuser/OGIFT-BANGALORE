import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";


import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import ImagePage from "@/components/Features_placement";
import Hero from "@/components/Hero";
import Slideshow from "@/components/Slideshow";

import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OGIFT",
  description: "Welcome to OGIFT",
  // other metadata
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <ImagePage/>
      <Slideshow />
      {/* <Brands/> */}
      <AboutSectionOne />
      <AboutSectionTwo />
     
      <Video />
      <Testimonials />
  
      {/* <Contact /> */}
    </>
  );
}
