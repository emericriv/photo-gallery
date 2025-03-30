// import React from "react";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-dark fixed w-full top-0 left-0 text-blue-gray px-40 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-gold">Ma Galerie</div>
      <div className="hidden md:flex items-center justify-center space-x-6 text-sm">
        <ul className="flex space-x-6">
          <Link to={"/"} className="hover:text-gold cursor-pointer">
            Accueil
          </Link>
          <Link to={"/gallery"} className="hover:text-gold cursor-pointer">
            Galerie
          </Link>
          <li className="hover:text-gold cursor-pointer">À propos</li>
          <li className="hover:text-gold cursor-pointer">Contact</li>
        </ul>
        <button className="bg-gold/80 text-dark hover:bg-gold cursor-pointer px-4 py-1 rounded-full text-sm text-center font-semibold transition duration-300">
          Se connecter
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
