"use client"
import {useState} from 'react'
import { ArrowLeft, Menu } from 'lucide-react';
import Link from 'next/link';
import { ITEMS } from '@/utils/navigation';
const Navigation = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const closeNavbar = () => {
      setDropdownOpen(false);
    };
  
    return (
      <div className="absolute top-1/2 left-0 ml-3 py-2 w-fit">
        <div
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeNavbar}
          className="fixed group z-50"
        >
          <button
            onClick={toggleDropdown}
            className={`${
              isDropdownOpen
                ? "opacity-0 duration-300 ease-in  transform -translate-y-1/2 -translate-x-96 "
                : " bg-black duration-300 transition-all ease-out transform -translate-y-1/2 opacity-100"
            } bg-black rounded-xl w-fit p-2 py-4 drop-shadow-xl`}
          >
            <Menu className="text-white text-lg drop-shadow-md" />
          </button>
          <div
            className={`${
              isDropdownOpen
                ? "transition-all duration-300 ease-out transform -translate-y-1/2 opacity-100"
                : "transition-all duration-300 ease-in  transform -translate-y-1/2 -translate-x-96 opacity-0"
            } bg-black p-2 ml-0 absolute top-0 rounded-xl drop-shadow-lg`}
          >
            <button onClick={closeNavbar}>
              <ArrowLeft className="flex text-white text-xl items-center justify-start my-1 ml-1" />
            </button>
  
            {ITEMS.map((item, index) => (
              <Link
                key={index}
                onClick={() => console.log(`Clicked on ${item.name}`)}
                href={item.link}
                className="flex px-2 py-1.5 text-white text-lg flex-cols gap-3 justify-start items-center no-underline hover:cursor-pointer duration-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Navigation