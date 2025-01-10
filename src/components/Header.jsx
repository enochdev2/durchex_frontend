import React, { useContext, useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import LOGO from "../assets/LOGO.png";
import metamask from "../assets/metamask.png";  
import { ICOContent } from "../Context/index";
import { Link } from 'react-router-dom';

function Header() {
    const contexts = useContext(ICOContent);
    const {
        shortenAddress,
        accountBalance,
        setAccountBalance,
        address,
        connectWallet,
    } = contexts;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
       <header className="px-6 py-4">
    
            <div className="flex items-center justify-between">
              <div className="flex gap-2 md:hidden bloc">
                <img src={LOGO} alt="" />
                <h1 className="text-2xl font-bold">DURCHEX</h1>
              </div>
    
              <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* DURCHEX and Search Bar */}
              <div className=" hidden md:block">
                <div className="flex gap-2">
                  <img src={LOGO} alt="" />
                  <h1 className="text-2xl font-bold">DURCHEX</h1>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-full lg:w-auto">
    
                <div className="w-full">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      placeholder="Search for collections, NFTs or Artists"
                      className="md:w-[500px] w-full bg-transparent border border-[#79718A] rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
    
              </div>
              {/* Navigation */}
              <nav
                className={`${isMenuOpen ? "block" : "hidden"
                  } mt-4 lg:mt-0 lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 text-center`}
              >
                <Link
                  to="/"
                  className="block hover:text-purple-500 transition-colors lg:inline-block"
                >
                  Explore
                </Link>
                {/* <Link to="/create"> */}
                <Link
                  to="/create"
                  className="block hover:text-purple-500 transition-colors lg:inline-block"
                >
                  Create
                </Link>
                {/* </Link> */}
    
                {/* <Link to="/stats"> */}
                <Link
                  to="/stats"
                  className="block hover:text-purple-500 transition-colors lg:inline-block"
                >
                  Stats
                </Link>
                {/* <Link to="/listnft"> */}
                <Link
                  to="/listnft"
                  className="block hover:text-purple-500 transition-colors lg:inline-block"
                >
                  List NFTs
                </Link>
                {/* <Link to="/mynfts"> */}
                <Link
                  to="/mynfts"
                  className="block hover:text-purple-500 transition-colors lg:inline-block"
                >
                  MyNfts
                </Link>
                {/* <Link to="/admin"> */}
                <Link
                  to="/admin"
                  className="block hover:text-purple-500 transition-colors lg:inline-block"
                >
                  Admin
                </Link>
                {/* </Link> */}
                {address ? (
              <li>
                <button className="bg-[#8149F4] hover:bg-purple-700 text-white gap-2 font-bold py-3 px-4 rounded-lg flex items-center mx-auto lg:mx-0">
                  {`${shortenAddress(address)} : ${accountBalance?.slice(0, 5)}`}
                </button>
              </li>
            ) : (
              <button
              className="bg-[#8149F4] hover:bg-purple-700 text-white gap-2 font-bold py-3 px-4 rounded-lg flex items-center mx-auto lg:mx-0"
              onClick={connectWallet}
            >
              <img src={metamask} alt="" />
              Connect Wallet
            </button>
            )}
              
              </nav>
    
            </div>
          </header>
  )
}

export default Header