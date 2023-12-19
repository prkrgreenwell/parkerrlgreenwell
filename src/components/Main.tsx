import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&#39;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[--primary]">Parker</span>
          </h1>
          <h1 className="py-2 text-gray-700">I&#39;m a Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&#39;m an up and coming developer who loves working on projects and
            learning new things. I have background in STEM, education, design,
            and entertainment.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
              <LinkedIn style={{ color: `var(--primary)` }} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
              <GitHub style={{ color: `var(--primary)` }} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
              <Email style={{ color: `var(--primary)` }} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
              <LinkedIn style={{ color: `var(--primary)` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
