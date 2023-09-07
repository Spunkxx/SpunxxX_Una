
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 " 
    style={{ position: "sticky", top: "0" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Change the Link to desired Page if required, Also the Image/logo , Title too will be change to the original */}

        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flast Spunxxx
          </span>
        </Link>
        <div className="flex md:order-2">
        <Link to="/login">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2 text-center mr-3 md:mr-0 dark:bg-blue-900 dark:hover:bg-green-700  dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2 text-center mr-3 md:mr-0 dark:bg-blue-900 dark:hover:bg-green-700  dark:focus:ring-blue-800"
              style={{ marginLeft: "10px" }}
            >
              Signup
            </button>
          </Link>
          {/* Mobile Menu toggle area on this part */}
          {/* <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Offers"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import { useState } from 'react';

// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="  dark:bg-gray-900">
//       <div className=" max-w-screen-xl mx-auto p-4">
//         <div className="flex flex-auto justify-between items-center">
//           <Link to="/" className="text-2xl font-semibold text-black dark:text-white">
//             Flast-Ai
//           </Link>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-gray-600 dark:text-gray-400 focus:outline-none"
//           >
//             <svg
//               className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//               />
//             </svg>
//           </button>

//           {/* Desktop navigation */}
//           <ul className="hidden md:flex space-x-6">
//             <li>
//               <Link
//                 to="/home"
//                 className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile navigation */}
//         {menuOpen && (
//           <div className="mt-4 md:hidden">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="/home"
//                   className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="block text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
