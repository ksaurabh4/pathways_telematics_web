import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "@assets/HugeGlobal.svg";

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Simple Pricing Which Suits Your Requirements
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Free.png"
                  width={145}
                  height={165}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Basic Tracking
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ₹3500 <span className="text-black-500">/ yr</span>
                </p>
                <ButtonOutline>Select</ButtonOutline>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Advance Tracking{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ₹5000 <span className="text-black-500">/ yr</span>
                </p>
                <ButtonOutline>Select</ButtonOutline>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Premium Tracking{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware{" "}
                </li>
                <li className="relative check custom-list my-2">
                  Get New Features{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  ₹9000 <span className="text-black-500">/ yr</span>
                </p>

                <ButtonOutline>Select</ButtonOutline>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-16 mb-0">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Huge Tracking Network across India{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            See Pathways Telematics presence everywhere to make it easier for you to take your decision.
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
          {/* <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            {/* <Netflix className="h-18 w-auto" /> 
          <img
            src="/assets/Icon/amazon.png"
            className="h-14 w-auto mt-4 lg:mt-2"
            alt=""
          />
          <img
            src="/assets/Icon/netflix.png"
            className="h-14 w-auto mt-2 lg:mt-0"
            alt=""
          />
          <img
            src="/assets/Icon/reddit.png"
            className="h-12 w-auto mt-2 lg:mt-0"
            alt=""
          />
          <img
            src="/assets/Icon/discord.png"
            className="h-14 w-auto mt-2 lg:mt-0"
            alt=""
          />
          <img
            src="/assets/Icon/spotify.png"
            className="h-12 w-auto mt-2 lg:mt-0"
            alt=""
          />
        </div> */}
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Trusted by Hundreds of Happy Customer{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Contact Us Now <br /> Get Special Offers!
                </h5>
                <p>Are you happy with what we offer? Ask for Free Quote</p>
              </div>
              <ButtonPrimary>Ask For Quotation</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Pricing;
