// import { link } from 'fs';
// import React from 'react';
// import { FiLink } from 'react-icons/fi';
// import { FcBrokenLink } from "react-icons/fc";

// interface ExperienceItem {
//   company: string;
//   position: string;
//   duration: string;
//   achievements: string;
//   link: string;
// }

// const experiences: ExperienceItem[] = [
//   {
//     company: "Meta CraftLab",
//     position: "Full-Stack Developer Intern ",
//     duration: "June 2024 - Present",
//     achievements:
//       "Collaborated in building a physical Meta CraftLab product </devstar> a developer toolkit helps in increasing developers productivity.",
//     link: "https://craftlab.ai/"
//   },
//   {
//     company: "National Institute of Electronics and Information Technology - Chennai",
//     position: "IoT and Data Analysis Intern",
//     duration: "June 2024 - Present",
//     achievements: "Implementing hour-glass architecture. Analyzing data from different components and sensors. Delivering application services to end user.",
//     link: "https://nva.nielit.gov.in/"
//   },
//   {
//     company: "Google Developers Student Club - IKGPTU",
//     position: "Core Team Member",
//     duration: "August 2023 - Present",
//     achievements: "During my time in the GDSC, I had a chance to collaborate on front-end projects with my team mates also help in organizing and participating in workshops and events. I significantly enhanced my technical and interpersonal skills and reinforced my passion for community building.",
//     link: "https://gdsc.community.dev/ik-gujral-punjab-technical-university-jalandhar-india/"
//   },
//   // Add more experiences 
// ];

// const Experience: React.FC = () => {
//   return (
//     <div >
//       <h1 className={"mb-6 text-4xl font-semibold"}> ./experience</h1>
//       {experiences.map((exp, index) => (
//         <div key={index} className="mb-8">
//           <div className='flex items-center gap-2'>
//             <h3 className="text-2xl font-semibold text-blue-400">{exp.company}</h3>
//             <a href= {exp.link} target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:text-white">
//               <FiLink className="w-6 h-6" size={30}/>
//             </a>
//           </div>
          
//           <p className="text-xl text-gray-300">{exp.position}</p>
//           <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
//           <p className= "">{exp.achievements}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Experience;