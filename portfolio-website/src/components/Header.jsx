import React from 'react';

const Header = () => {

  return (
    <nav className="py-4">

      <div className="container mx-auto flex justify-between items-center">
      <a><img src="src/assets/logo.png" alt="Jao's Books" className="w-20"/></a>


        <div className="text-black flex space-x-8">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Resume</a>
        </div>

      </div>


    </nav>
  );
};

export default Header;