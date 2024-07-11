import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";
import GmailButton from "./GmailButton";
import DevCommunityButton from "./DevCommunity";
import ResumeButton from "./ResumeButton";

const NavBar = () => {
  return (
    <nav
      className={`fixed z-10 flex min-w-full items-center justify-between py-4 px-4 backdrop-blur-[20px] backdrop-saturate-[1.8] backdrop-filter sm:px-10`}
    >
      <div className={"mx-auto flex w-full max-w-6xl justify-between"}>
        <div
          className={`navbar flex items-center space-x-3 text-xs sm:space-x-8 sm:text-lg`}
        >

          <Logo />
          <Link href={`/work`}>
            ./work
          </Link>
          <Link href="/misc">
            ./misc
          </Link>
          <Link href={`/posts`}>
            ./posts
          </Link>
        </div>
        <div className={`navbar flex items-center space-x-2 sm:space-x-6`}>
          <DarkModeToggle />
          <LinkedInButton />
          <GitHubButton />
          <GmailButton />
          <ResumeButton />
          <DevCommunityButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
