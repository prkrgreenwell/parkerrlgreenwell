import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[--primary]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed veniam
            voluptates dolorum quod quidem illo eum aperiam nostrum
            necessitatibus quas totam iure eos perferendis odio, eligendi fugit
            sint deleniti officia?
          </p>
          <p className="py-2 text-gray-600 cursor-pointer underline">
            Check out my latest projects here
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </div>
  );
};

export default About;
