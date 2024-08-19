import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";
import GmailButton from "./GmailButton";
import DevCommunityButton from "./DevCommunity";
import ResumeButton from "./ResumeButton";
import { FaLocationArrow } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      const currentMenuRef = menuRef.current as HTMLDivElement;
      currentMenuRef.style.maxHeight = isMenuOpen ? `${currentMenuRef.scrollHeight}px` : '0px';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed z-10 w-full py-4 px-4 backdrop-blur-[20px] backdrop-saturate-[1.8] backdrop-filter sm:px-10">
      
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden transition-transform duration-300 ease-in-out text-sky-300"
            style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
          >
            <FaLocationArrow size={24} />
          </button>
        </div>
        <div className={`hidden sm:flex items-center space-x-8 text-lg`}>
          <Link href={`/work`} className="text-sky-300 hover:text-indigo-300">./work</Link>
          <Link href="/misc" className="text-sky-300 hover:text-indigo-300">./misc</Link>
        </div>
        <div className="hidden sm:flex items-center space-x-6 text-sky-300 ">
          <div className="hover:text-indigo-300">
            <DarkModeToggle />
          </div>
          
          <LinkedInButton />
          <GitHubButton />
          <GmailButton />
          <ResumeButton />
          <DevCommunityButton />
        </div>
      </div>
      <div 
        ref={menuRef}
        className="sm:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: '0px' }}
      >
        <div className="py-4 space-y-4">
          <Link href={`/work`} className="block text-sky-300 hover:text-indigo-300">./work</Link>
          <Link href="/misc" className="block text-sky-300 hover:text-indigo-300">./misc</Link>
          <div className="flex justify-between mt-4 text-sky-300">
            <div className="hover:text-indigo-300">
              <DarkModeToggle />
            </div>
            <LinkedInButton />
            <GitHubButton />
            <GmailButton />
            <ResumeButton />
            <DevCommunityButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;