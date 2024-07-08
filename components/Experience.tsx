import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Meta CraftLab",
    position: "Developer Intern (Full Stack)",
    duration: "June 2024 - Present",
    achievements: [
      "Tech Stack : Tailwind CSS, ",
      "In 2022, promoted to VP of Developer Experience. Created a new free course to teach Next.js, which had 17 million page views that year.",
      "In 2023, promoted to VP of Product, now also leading Product Management.",
      "Since joining in 2020, Next.js active developers have grown 1000%, now at ~900k.",
      "Next.js is now a top 10 software project on GitHub with 122k stars. Used by Walmart, ChatGPT, Starbucks, Okta, Datastax, Notion, and more.",
    ],
  },
  {
    company: "Meta CraftLab",
    position: "Developer Intern (Full Stack)",
    duration: "June 2024 - Present",
    achievements: [
      "Tech Stack : Tailwind CSS, ",
      "In 2022, promoted to VP of Developer Experience. Created a new free course to teach Next.js, which had 17 million page views that year.",
      "In 2023, promoted to VP of Product, now also leading Product Management.",
      "Since joining in 2020, Next.js active developers have grown 1000%, now at ~900k.",
      "Next.js is now a top 10 software project on GitHub with 122k stars. Used by Walmart, ChatGPT, Starbucks, Okta, Datastax, Notion, and more.",
    ],
  },
  {
    company: "Meta CraftLab",
    position: "Developer Intern (Full Stack)",
    duration: "June 2024 - Present",
    achievements: [
      "Tech Stack : Tailwind CSS, ",
      "In 2022, promoted to VP of Developer Experience. Created a new free course to teach Next.js, which had 17 million page views that year.",
      "In 2023, promoted to VP of Product, now also leading Product Management.",
      "Since joining in 2020, Next.js active developers have grown 1000%, now at ~900k.",
      "Next.js is now a top 10 software project on GitHub with 122k stars. Used by Walmart, ChatGPT, Starbucks, Okta, Datastax, Notion, and more.",
    ],
  },
  // Add more experiences 
];

const Experience: React.FC = () => {
  return (
    <div >
      <h1 className={"mb-6 text-4xl font-semibold"}>Experiences</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-400">{exp.company}</h3>
          <p className="text-xl text-gray-300">{exp.position}</p>
          <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
          <ul className="list-disc pl-5">
            {exp.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="mb-2">{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;