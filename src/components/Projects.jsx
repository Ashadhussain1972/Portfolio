import React from 'react';
import { NavLink } from 'react-router-dom';

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-serif px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-violet-300">My Projects</h1>
          <NavLink to="/">
            <button className="border-2 border-violet-300 px-6 py-2 rounded-2xl hover:border-violet-500 transition-all duration-300 text-white text-md">
              ⬅ Back to Home
            </button>
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Project Cards */}
          {[
            {
              title: 'Guess The Number',
              description: 'Fun number guessing game using JavaScript logic.',
              link: 'https://guess-the-number-games.netlify.app/',
            },
            {
              title: 'Personal Menu',
              description: 'Responsive menu app with cart support.',
              link: 'https://your-personal-menu.netlify.app/',
            },
            {
              title: 'Easy Whiteboard',
              description: 'Collaborative drawing app using Canvas API.',
              link: 'https://easywhite-board.netlify.app/',
            },
            {
              title: 'Stock Comparo',
              description: 'Compare multiple stock prices using APIs and charts.',
              link: 'https://stockcomparo.netlify.app/',
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl text-violet-300 font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
