"use client";
import { ApolloProvider } from '@apollo/client';
 // Import your Apollo Client instance
// import  client  from '@utils/apollo/ApolloClient.js'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { motion } from "framer-motion"

import client from '@/utils/apollo/ApolloClient';


const inter = Inter({ subsets: ["latin"] });
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      
      <head />

      <body className={`bg-white dark:bg-black ${inter.className}`}>
      <ApolloProvider client={client}>
        <Providers>
        <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
          <Header />
    
          {children}
         
          <Footer />
         
          <WhatsAppWeget/>
          <ScrollToTop />
          </motion.main>
        </Providers>
        </ApolloProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import WhatsAppWeget from "@/components/WhatsappWidget";

