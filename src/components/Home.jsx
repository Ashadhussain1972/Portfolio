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
    <div className="relative flex h-screen">
      {/* Left Side */}
      <div className="w-3/4 bg-gray-800 font-serif flex items-center p-5">
        <div className="text-white m-20 space-y-4">
          <h1 className="text-2xl text-violet-300">Hello Everyone</h1>
          <h2 className="text-6xl font-bold">
            I'm {userData?.name || "Loading..."}
          </h2>
          
          {/* Projects Button */}
          <NavLink to="/Projects">
            <button className="mt-5 border-2 border-violet-300 text-white bg-gray-800 hover:border-violet-400 transition-all duration-300 font-medium text-lg px-6 py-3 flex items-center"
          >
              Projects
            </button>
          </NavLink>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/4 bg-violet-300 font-serif flex flex-col p-5">
        <h2 className="text-black font-serif font-semibold text-xl mb-4 cursor-default">
          Contact Me
        </h2>
        <div className="flex gap-3">
          <a href="https://github.com/ashadhussain1972" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" className="w-6 h-6 hover:scale-110 transition-all cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-all cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-all cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      {userData && (
        <img
          src={userData.avatar_url}
          alt="Profile Picture"
          className="absolute left-3/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-80 shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
        />
      )}
    </div>
  );
}

export default Home;
