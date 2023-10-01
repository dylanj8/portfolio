import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
        alt="main-image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] items-center m-auto h-full w-full flex flex-col justify-center lg:items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Hey, I'm Dylan
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a {""}
            <TypeAnimation
              sequence={[
                // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Web Developer", // Types 'Three' without deleting 'Two'
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-evenly pt-6 max-w-[200px] w-full">
            <FaLinkedin size={20} className="cursor-pointer" />
            <FaGithub size={20} className="cursor-pointer" />
            <FaTwitterSquare size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
