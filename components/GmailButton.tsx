// const GmailButton = () => {
//   return (
//     <a 
//       href="mailto:guptaojas75@gmail.com"
//       className="group relative inline-block h-5 w-5 sm:h-6 sm:w-6"
//     >
//       <svg
//         className="h-full w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path
//           d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
//         />
//       </svg>
//       <svg
//         className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
//         viewBox="0 0 24 24"
//       >
//         <defs>
//           <linearGradient id="gmail-hover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#EA4335" />
//             <stop offset="50%" stopColor="#FBBC05" />
//             <stop offset="100%" stopColor="#34A853" />
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#gmail-hover-gradient)"
//           d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
//         />
//       </svg>
//     </a>
//   );
// };






// export default GmailButton;



const GmailButton = () => {
  return (
    <a
      href="mailto:guptaojas75@gmail.com"
      className="group relative inline-block h-5 w-5 sm:h-8 sm:w-8"
    >
      <svg
        className="h-full w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z" />
        <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z" />
      </svg>
      <svg
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        viewBox="0 0 512 512"
      >
        <defs>
          <linearGradient id="gmail-hover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#088395" />
            <stop offset="50%" stopColor="#37B7C3" />
            <stop offset="100%" stopColor="#EBF4F6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gmail-hover-gradient)"
          d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"
        />
        <path
          fill="url(#gmail-hover-gradient)"
          d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"
        />
      </svg>
    </a>
  );
};

export default GmailButton;