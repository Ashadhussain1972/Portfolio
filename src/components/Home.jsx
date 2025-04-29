import { useEffect, useState } from 'react';
import Github from '../Images/github.png';
import Insta from '../Images/instagram.png';
import Linkedin from '../Images/linkedin.png';
import { NavLink } from 'react-router-dom';

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ashadhussain1972');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen">
      {/* Mobile Top Profile Image */}
      {userData && (
        <div className="md:hidden flex justify-center pt-8 bg-gray-900 order-1">
          <img
            src={userData.avatar_url}
            alt="Profile"
            className="w-36 h-36 rounded-full shadow-xl hover:scale-105 transition-transform"
          />
        </div>
      )}

      {/* Left Section (Main Content) */}
      <div className="order-2 md:order-none w-full md:w-3/4 bg-gray-800 text-white font-serif p-6 md:p-20 flex flex-col justify-center items-center md:items-start gap-6 md:gap-10">
        <h1 className="text-xl text-violet-300">Hello Everyone</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-center md:text-left">
          I'm {userData?.name || "Loading..."}
        </h2>
        <NavLink to="/Projects">
          <button className="mt-2 border-2 border-violet-300 rounded-xl px-6 py-3 text-white bg-gray-800 hover:border-violet-400 transition-all duration-300 text-lg">
            Projects
          </button>
        </NavLink>
      </div>

      {/* Right Section (Contact Me) */}
      <div className="order-3 md:order-none w-full md:w-1/4 bg-violet-300 p-6 font-serif flex flex-col justify-start items-center md:items-start">
        <h2 className="text-black font-semibold text-xl mb-4">
          Contact Me
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/ashadhussain1972" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/ashad_hussain1" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/ashad-hussain/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>
        <div className='mt-96 pt-10 pl-2'>
          <p>Email:ashad1972.ah@outlook.com</p>
        </div>
      </div>

      {/* Desktop Overlapping Image */}
      {userData && (
        <img
          src={userData.avatar_url}
          alt="Profile"
          className="hidden md:block absolute top-1/2 left-[75%] transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        />
      )}
    </div>
  );
}

export default Home;
