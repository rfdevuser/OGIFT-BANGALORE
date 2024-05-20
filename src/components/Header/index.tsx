"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";


const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  

  const handleNavLinkClick = () => {
    // Close the mobile menu when a nav link is clicked
    setNavbarOpen(false);
  };
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Toggle for About submenu
  const [aboutOpen, setAboutOpen] = useState(false);
  const toggleAboutSubMenu = () => {
    setAboutOpen(!aboutOpen);
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className="header left-0 top-0 z-20 flex w-full items-center size-10  "
       
        style={{ backgroundColor: '#22011b' }}
      >
        
        <div className="container shadow-2xl" 
         style={{
          borderRadius: '10px', // Rounded corners
          backgroundColor: "transparent", 
          // pink color
          marginTop: 110,
          
         
         
          zIndex: 50 // Z-index of 50
        }}
        >
          <div className="relative -mx-5 flex items-center justify-between font-serif "
          
          >
            <div className="w-20 max-w-full xl:mr-12 flex items-center justify-center"  >
              <Link
                href="/"
                onClick={() => setNavbarOpen(false)}
                className={`header-logo block w-full ${
                  sticky ? "py-18 lg:py-2" : "py-1"
                } `}
              >
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  loading="lazy"
                  className="w-full dark:hidden "
                  style={{
                    marginLeft:10,
                    marginTop:10,
                    background:"#fce7f3",
                  }}
          
                  
                />
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                  style={{
                    marginLeft:10,
                    marginTop:10,
                    background:"#fce7f3",
                  }}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-1">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
        id="navbarCollapse"
        className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
          navbarOpen
            ? "visibility top-full opacity-100"
            : "invisible top-[120%] opacity-0"
        }`}
      >
        <ul className="block lg:flex lg:space-x-12">
          {menuData.map((menuItem, index) => (
            <li key={index} className="group relative text-lg">
              {menuItem.submenu ? (
                <div>
                  <p
                    onClick={menuItem.title === "Courses" ? toggleAboutSubMenu : () => handleSubmenu(index)}
                    className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-[#4a044e] dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-lg"
                  >
                    {menuItem.title}
                    <span className="pl-3">
                      <svg width="25" height="24" viewBox="0 0 25 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </p>
                  <div
                    className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                      menuItem.title === "About" || menuItem.title === "Courses" ? (aboutOpen ? "block" : "hidden") : openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem.submenu.map((submenuItem, index) => (
                      <Link
                        href={submenuItem.path}
                        key={index}
                        className="block rounded py-2.5 text-sm text-dark hover:text-[#4a044e] dark:text-white/70 dark:hover:text-white lg:px-3"
                        onClick={handleNavLinkClick} // Close mobile menu on link click
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={menuItem.path}
                  className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                    usePathName === menuItem.path ? "text-[#4a044e] dark:text-white" : "text-dark hover:text-dark dark:text-white/70 dark:hover:text-white"
                  }`}
                  onClick={handleNavLinkClick} // Close mobile menu on link click
                >
                  {menuItem.title}
                </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;