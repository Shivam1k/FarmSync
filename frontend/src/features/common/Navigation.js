
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBarToggle, setNavBarToggle] = useState(false);
  const user = false;  // Update with actual authentication state

  // Refs for handling click outside menu
  const toggleNavBarRef = useRef(null);
  const dropdownNavBarRef = useRef(null);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleCloseNavBarMenu = (event) => {
      if (
        toggleNavBarRef.current &&
        !toggleNavBarRef.current.contains(event.target) &&
        dropdownNavBarRef.current &&
        !dropdownNavBarRef.current.contains(event.target)
      ) {
        setNavBarToggle(false);
      }
    };

    document.addEventListener("click", handleCloseNavBarMenu);

    return () => {
      document.removeEventListener("click", handleCloseNavBarMenu);
    };
  }, []);

  return (
    <nav className="bg-dark fixed-top w-full shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-2">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <h1 className="text-white text-xl font-semibold italic">Farm Sync</h1>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

              <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white  no-underline">
                  Home
                </Link>
                
                {/* <Link to="/team" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">
                  Team
                </Link> */}
                <Link to="/game" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">
                  Game
                </Link>
                <Link to="/calendar" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">
                  Calendar
                </Link>
                <Link to="/financial-tracker" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">
                Financial-tracker
                </Link>
               
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative">
              <Link to={user ? "/profile" : "/signup"} className="text-white py-2 px-4 hover:bg-gray-700 rounded-md no-underline">
                {user ? "Profile" : "Sign In"}
              </Link>
            </div>
          </div>

          {/* Toggle for mobile nav */}
          <div ref={toggleNavBarRef} className="navbar-toggler sm:hidden">
            <button
              type="button"
              className="navbar-toggler-icon"
              onClick={() => setNavBarToggle(!navBarToggle)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navBarToggle && (
        <div ref={dropdownNavBarRef} className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/dashboard" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
              Dashboard
            </Link>
            {/* <Link to="/team" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Team
            </Link> */}
            <Link to="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Projects
            </Link>
            <Link to="/calendar" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Calendar
            </Link>
            {!user && (
              <Link to="/sign-up" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Sign Up
              </Link>
            )}
            <Link to={user ? "/profile" : "/sign-in"} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              {user ? "Profile" : "Sign In"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;





// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Navigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [navBarToggle, setNavBarToggle] = useState(false);
//   const user = false;  // Update with actual authentication state

//   // Refs for handling click outside menu
//   const toggleNavBarRef = useRef(null);
//   const dropdownNavBarRef = useRef(null);

//   // Close navbar when clicking outside
//   useEffect(() => {
//     const handleCloseNavBarMenu = (event) => {
//       if (
//         toggleNavBarRef.current &&
//         !toggleNavBarRef.current.contains(event.target) &&
//         dropdownNavBarRef.current &&
//         !dropdownNavBarRef.current.contains(event.target)
//       ) {
//         setNavBarToggle(false);
//       }
//     };

//     document.addEventListener("click", handleCloseNavBarMenu);

//     return () => {
//       document.removeEventListener("click", handleCloseNavBarMenu);
//     };
//   }, []);

//   return (
//     <nav className="bg-dark fixed-top w-full shadow-md">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-2">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Mobile Menu Button */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={menuOpen}
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <span className="sr-only">Open main menu</span>
//               {menuOpen ? (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Logo and Navigation Links */}
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <h1 className="text-white text-xl font-semibold italic">Farm Sync</h1>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 <Link to="/dashboard" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
//                   Dashboard
//                 </Link>
//                 <Link to="/team" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//                   Team
//                 </Link>
//                 <Link to="/projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//                   Projects
//                 </Link>
//                 <Link to="/calendar" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//                   Calendar
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Profile Section */}
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <div className="relative">
//               <Link to={user ? "/profile" : "/sign-in"} className="text-white py-2 px-4 hover:bg-gray-700 rounded-md">
//                 {user ? "Profile" : "Sign In"}
//               </Link>
//             </div>
//           </div>

//           {/* Toggle for mobile nav */}
//           <div ref={toggleNavBarRef} className="navbar-toggler sm:hidden">
//             <button
//               type="button"
//               className="navbar-toggler-icon"
//               onClick={() => setNavBarToggle(!navBarToggle)}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {navBarToggle && (
//         <div ref={dropdownNavBarRef} className="sm:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             <Link to="/dashboard" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
//               Dashboard
//             </Link>
//             <Link to="/team" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//               Team
//             </Link>
//             <Link to="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//               Projects
//             </Link>
//             <Link to="/calendar" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//               Calendar
//             </Link>
//             {!user && (
//               <Link to="/sign-up" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//                 Sign Up
//               </Link>
//             )}
//             <Link to={user ? "/profile" : "/sign-in"} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
//               {user ? "Profile" : "Sign In"}
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
