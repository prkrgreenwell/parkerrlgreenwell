import React from "react";
import propertyImg from "../../public/assets/projects/property.jpg";
import Image from "next/image";
import { ArrowBack, RadioButtonChecked } from "@mui/icons-material";
import Link from "next/link";

const property = () => {
  return (
    <div className="full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            dolore recusandae ex repudiandae tenetur natus ut obcaecati,
            blanditiis voluptates minima, et delectus. Molestiae voluptatibus
            officiis corrupti et, sapiente aut odit!
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 ">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <p className="text-center font-bold pb-2">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
              <RadioButtonChecked className="pr-1" /> React
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RadioButtonChecked className="pr-1" /> Tailwind
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RadioButtonChecked className="pr-1" /> Javascript
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RadioButtonChecked className="pr-1" /> Firebase
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RadioButtonChecked className="pr-1" /> Google API
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RadioButtonChecked className="pr-1" /> Zillow API
            </p>
          </div>
        </div>
        <Link href="/#projects">
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
            <ArrowBack />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default property;
