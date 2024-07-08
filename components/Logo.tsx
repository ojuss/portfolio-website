// import Link from "next/link";

// const Logo = () => {
//   return (
//     <Link href="/" className="group">
//       <svg width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
//         <g fill="currentColor">
//           <path d="M512 242.329c0-22.724-18.488-41.213-41.212-41.213-19.929 0-36.596 14.221-40.396 33.048l-71.241-.109c-4.452 0-8.064 3.606-8.07 8.058-.006 4.457 3.601 8.076 8.057 8.082l71.232.109c2.698 13.701 12.205 24.982 24.84 30.165l-15.18 78.545c-19.12.118-35.19 13.317-39.695 31.081l-84.726-4.335c-2.685-18.336-17.485-32.781-35.987-34.931l-5.608-69.292c14.701-4.201 26.069-16.369 29.102-31.522l28.006.115c4.441 0 8.051-3.592 8.069-8.037.018-4.457-3.58-8.085-8.037-8.104l-28.063-.115c-3.751-18.888-20.444-33.173-40.417-33.173-4.177 0-8.21.629-12.013 1.79l-24.285-45.221c9.148-7.565 14.988-18.997 14.988-31.768 0-22.724-18.488-41.213-41.213-41.213-18.746 0-34.599 12.588-39.577 29.752l-78.442-6.663C98.815 90.324 81.336 74.29 60.176 74.29 37.452 74.29 18.964 92.777 18.964 115.502s18.488 41.212 41.213 41.212c18.746 0 34.598-12.587 39.577-29.751l78.442 6.663c2.306 20.556 19.784 36.59 40.945 36.59 4.178 0 8.211-.629 12.014-1.792l24.285 45.22c-9.149 7.565-14.989 18.998-14.989 31.769 0 21.106 15.951 38.546 36.43 40.925l5.608 69.291c-17.243 4.927-29.907 20.819-29.907 39.623 0 22.724 18.487 41.213 41.21 41.213 19.232 0 35.426-13.243 39.95-31.087l84.726 4.335c2.913 19.893 20.084 35.218 40.775 35.218 22.722 0 41.209-18.488 41.209-41.213 0-17.21-10.606-31.981-25.622-38.142l15.179-78.544C493.65 283.397 512 264.968 512 242.329z"/>
//           <circle cx="106.042" cy="225.763" r="16.571"/>
//           <path d="M340.101 162.15c9.149 0 16.569-7.42 16.569-16.572 0-9.152-7.42-16.571-16.569-16.571-9.156 0-16.573 7.42-16.573 16.571 0 9.151 7.417 16.572 16.573 16.572z"/>
//           <circle cx="170.549" cy="306.841" r="8.285"/>
//           <circle cx="285.457" cy="78.854" r="8.285"/>
//         </g>
//       </svg>
//     </Link>
//   );
// };

// export default Logo;

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
    >
      <Image  
        src="/blue.ico" 
        alt="Pit" 
        width={76}
        height={76}
      />
    </Link>
  );
};

export default Logo;