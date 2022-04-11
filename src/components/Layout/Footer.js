import React from "react";
import LogoVPN from "@assets/Logo.svg";
import Facebook from "@assets/Icon/facebook.svg";
import Twitter from "@assets/Icon/twitter.svg";
import Instagram from "@assets/Icon/instagram.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <div className="text-3xl font-bold mb-6">Pathways Telematics</div>
          <p className="mb-2">
            <strong className="font-medium">Pathways Telematics</strong> is a renowned wholesaler, supplier and service provider of advance gps tracking system.
          </p>
          <p className="text-gray-400">©2022PathwaysTelematics</p>
        </div>
        <div className=" row-span-2 sm:col-span-4 sm:col-start-6 sm:col-end-10 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contact</p>
          <p className="text-black-500 ">
            Matiala ,Uttam Nagar  ND 110059, INDIA | <br />
            +91-8826611558 | <br />
            info@pathwaystelematics.com |
          </p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-10 sm:col-end-15 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Social</p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.facebook.com/pathwaystelematics" target="_blank">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://instagram.com/pathwaystelematics?igshid=YmMyMTA2M2Y=" target="_blank">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
