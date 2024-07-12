import NavBar from "@/components/NavBar";
import React from "react";

type PageLayoutProps = {
  full?: boolean;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  full = false,
  children,
}) => {
  return (
    <div className={`w-full ${full ? 'bg-white' : 'dark:bg-dark-900'}`}>
      <NavBar />
      <div
        className={`mx-auto flex max-w-3xl flex-col px-4 py-12 pt-16 lg:max-w-4xl ${
          full ? 'min-h-screen justify-center' : 'justify-between'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;