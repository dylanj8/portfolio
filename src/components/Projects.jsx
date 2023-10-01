import React from "react";
import ProjectItem from "./ProjectItem";
import dadeatsimage from "../assets/dadeatsimage.png";
import kaitimage from "../assets/kaitimage.png";
import groceryimage from "../assets/groceryimage.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl text-center font-bold text-gray-800">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
        necessitatibus fugit ut consequatur enim incidunt. Ipsa distinctio
        voluptates beatae aliquam animi ratione asperiores pariatur ducimus.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 md:grid-cols-3">
        <ProjectItem
          img={dadeatsimage}
          title="Dad Eats"
          description="This website is a food ordering/delivery clone with a complete backend using express and mongodb, featuring auth using JWT and Bcrypt"
          technologies="React, Express, MongoDB, JWT, Bcrypt"
          customlink="https://github.com/dylanj8/dad-eats"
        />
        <ProjectItem
          img={kaitimage}
          title="Bouquets by Kait"
          description="A website I created for a local small business owner"
          technologies="React, TailwindCSS"
          customlink="http://bouquetsbykait.netlify.app"
        />
        <ProjectItem
          img={groceryimage}
          title="Grocery App"
          description="This is an app I created so my family and I can track what groceries are needed when any of us are at the shops"
          technologies="NextJS, MongoDB, Prisma"
          customlink="https://github.com/dylanj8/grocery-app"
        />
      </div>
    </div>
  );
};

export default Projects;
