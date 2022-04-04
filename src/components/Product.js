import Image from "next/image";
import React from "react";
import ButtonPrimary from "@components/misc/ButtonPrimary";

const Product = ({ product }) => {
  const features = product.features.split('|')
  const contentSection = <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
    <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
      {product.name}
    </h3>
    <p className="my-2 text-black-500">
      {product.desc}
    </p>
    <ul className="text-black-500 self-start list-inside ml-8">
      {features.map(feature => <li className="relative circle-check custom-list mb-2">
        {feature}
      </li>)}
    </ul>
  </div>

  const imageSection = <div className="flex w-full justify-end">
    <div className="h-full w-full p-4">
      <Image
        src={`/assets/${product.image}.png`}
        alt={product.name}
        layout="responsive"
        quality={100}
        height={414}
        width={508}
      />
      <div className="flex justify-center mt-5"><ButtonPrimary>Explore More</ButtonPrimary></div>
    </div>
  </div >

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        {product.orientation === 'left' ? contentSection : imageSection}
        {product.orientation === 'left' ? imageSection : contentSection}
      </div>
    </div>
  );
};

export default Product;
