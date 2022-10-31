import React, { useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './img/smgc.png';
import Avatar from './img/avatar.png';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const login = () => {
    setIsMenu(!isMenu);
  };
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-12 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">ISMMART</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer">
              Services
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  New Item <MdAdd />
                </p>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-12 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">ISMMART</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                New Item <MdAdd />
              </p>
              <ul className="flex flex-col">
                <li className="mt-2 px-4 text-base text-textColor hover:text-headingColor cursor-pointer">
                  Home
                </li>
                <li className="mt-4 px-4 text-base text-textColor hover:text-headingColor cursor-pointer">
                  Menu
                </li>
                <li className="mt-4 px-4 text-base text-textColor hover:text-headingColor cursor-pointer">
                  About Us
                </li>
                <li className="mt-4 px-4 text-base text-textColor hover:text-headingColor cursor-pointer">
                  Services
                </li>
              </ul>
              <p className="m-2 px-4 py-2 flex justify-center rounded-md items-center gap-3 cursor-pointer bg-gray-200 hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base">
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
