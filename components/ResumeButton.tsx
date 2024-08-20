
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

const ResumeButton = () => {
  return (
    <a
      href="/ojus_cv.pdf"
      target="_blank"
      rel="noreferrer"
      className="group relative inline-block h-5 w-5 sm:h-6 sm:w-6"
      aria-label="View Resume"
    >
      <BsFillFileEarmarkPdfFill className="h-full w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
      <svg className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" viewBox="0 0 16 16">
        <defs>
          <linearGradient id="resume-hover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#8BC34A" />
          </linearGradient>
        </defs>
        <BsFillFileEarmarkPdfFill fill="url(#resume-hover-gradient)" />
      </svg>
    </a>
  );
};

export default ResumeButton;