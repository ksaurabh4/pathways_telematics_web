import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Router, useRouter } from 'next/router'
// Import react scroll
import ButtonOutline from "../misc/ButtonOutline.";
// import LogoVPN from "@assets/Logo.svg";
import AboutIcon from "@svg/aboutIcon.js";
import ProductsIcon from "@svg/productsIcon.js";
import FeaturesIcon from "@svg/featuresIcon.js";
import ContactIcon from "@svg/contactIcon.js";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const route = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
    setActiveLink(route.pathname)
  }, []);
  const routes = [{ pathName: 'Home', path: '/', icon: AboutIcon, desc: '' }, { pathName: 'About', path: '/about', icon: AboutIcon, desc: '' }, { pathName: 'Products', path: '/products', icon: ProductsIcon, desc: '' }, { pathName: 'Features', path: '/features', icon: FeaturesIcon, desc: '' }, { pathName: 'Contact', path: '/contact', icon: ContactIcon, desc: '' }]
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <LogoVPN className="h-8 w-auto" /> */}
            <h1 className="text-3xl font-bold"><Link href="/">Pathways</Link></h1>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {routes.map(route => <Link
              href={route.path}
              key={route.path}
            >
              <a onClick={() => {
                setActiveLink(route.path);
              }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === route.path
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 a")
                }>{route.pathName}</a>
            </Link>)}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                Track
              </a>
            </Link>
            <ButtonOutline>Ask Us</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {routes.map(route => <Link
              href={route.path}
              key={route.path}
            >
              <a
                onClick={() => {
                  setActiveLink(route.path);
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === route.path
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent")
                }>
                <route.icon />
                {route.pathName}
              </a>
            </Link>)}
          </ul>
        </div>
      </nav >
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
