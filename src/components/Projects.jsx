import React from 'react';
import { NavLink } from 'react-router-dom';

function Projects() {
  return (
    <div className="flex h-screen bg-gray-800 text-white font-serif">
      {/* Left Side Content */}
      <div className="w-3/4 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold text-violet-300 mb-4">My Projects</h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officiis!
        </p>
        <NavLink to="/">
            <button className="mt-5 border-2 border-violet-300 text-white bg-gray-800 hover:border-violet-400 transition-all duration-300 font-medium text-lg px-6 py-3 flex items-center"
          >
              Projects
            </button>
          </NavLink>
      </div>

      {/* Right Side Image */}
      <div className="w-1/4 bg-violet-300 flex justify-center items-center p-5">
        <img
          src="#"
          alt="Project IMG"
          className="rounded-lg shadow-lg w-72 h-72 object-cover hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default Projects;
