import React from "react";
import { FiLink } from "react-icons/fi";

const Exp = () => {
  return (
    <>
      <div>
        {/* <h1 className="mb-6 text-4xl font-semibold">./experience</h1> */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center">
              Noviga Automation
              <a
                href="https://noviga.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-white ml-2"
              >
                <FiLink className="w-6 h-6" size={30} />
              </a>
            </h3>
          </div>
          <p className="text-xl text-gray-300">Frontend Developer</p>
          <p className="text-sm text-gray-400 mb-2">sept 2024 - present</p>
          <p className="">
            Understanding client's requirement for developing an internal asset
            management system whilst maintaining the quality of the codebase.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center">
              Meta CraftLab
              <a
                href="https://craftlab.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-white ml-2"
              >
                <FiLink className="w-6 h-6" size={30} />
              </a>
            </h3>
          </div>
          <p className="text-xl text-gray-300">Full-Stack Developer Intern</p>
          <p className="text-sm text-gray-400 mb-2">june 2024 - present</p>
          <p className="">
            Collaborated in building a Meta CraftLab product "devstar" a
            developer toolkit helps in increasing developers productivity.
          </p>
        </div>
      </div>

      <div>
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center">
              National Institute of Electronics and Information Technology -
              Chennai
              <a
                href="https://nva.nielit.gov.in/"
                target="_blank"
                className="text-dark-500 hover:text-white ml-2"
              >
                <FiLink className="w-6 h-6" size={30} />
              </a>
            </h3>
          </div>
          <p className="text-xl text-gray-300">IoT and Data Analysis Intern</p>
          <p className="text-sm text-gray-400 mb-2">june 2024 - present</p>
          <p className="">
            As the part of my summer training I was mostly implementing
            hour-glass architecture, analyzing data from different components
            and sensors & delivering application services to end user.
          </p>
        </div>
      </div>
      
      <div>
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center">
              Google Developers Student Club - IKGPTU
              <a
                href="https://gdsc.community.dev/ik-gujral-punjab-technical-university-jalandhar-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-white ml-2"
              >
                <FiLink className="w-6 h-6" size={30} />
              </a>
            </h3>
          </div>
          <p className="text-xl text-gray-300">Core Team Member</p>
          <p className="text-sm text-gray-400 mb-2">august 2023 - present</p>
          <p className="">
            During my time in the GDSC, I had a chance to collaborate on
            front-end projects with my team mates also help in organizing and
            participating in workshops and events. I significantly enhanced my
            technical and interpersonal skills and reinforced my passion for
            community building.
          </p>
        </div>
      </div>
    </>
  );
};

export default Exp;
