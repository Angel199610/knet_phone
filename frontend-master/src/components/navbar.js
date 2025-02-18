import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';
import companyLogo from '../components/images/logo.jpg'; // Adjust path and filename

const Navbar = ({ userName, onLogout }) => { // Accept userName and onLogout as props
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={companyLogo} alt="Company Logo" className="navbar-logo-image" />
        <div className="navbar-title">KNET PHONE WORLD</div>
        <div className="navbar-slogan">Quality Phones, Unmatched Service!</div>
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        {userName ? (
          <>
            <li>Welcome back, {userName}! You are logged into your account.</li> {/* Show the user's name and account status */}
            <li>
              <button onClick={onLogout} className="logout-button">Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
              Login
            </NavLink>
          </li>
        )}
        {/* <li>
          <NavLink to="/adminDashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Admin Dashboard
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

























// import React from "react";
// import { NavLink } from "react-router-dom";
// import '../styles/navbar.css';
// import companyLogo from '../components/images/logo.jpg'; // Adjust path and filename

// const Navbar = ({ userName }) => { // Accept userName as a prop
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={companyLogo} alt="Company Logo" className="navbar-logo-image" />
//         <div className="navbar-title">KNET PHONE WORLD</div>
//         <div className="navbar-slogan">Quality Phones, Unmatched Service!</div>
//       </div>
//       <ul className="navbar-menu">
//         <li>
//           <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
//             Product
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
//             About
//           </NavLink>
//         </li>
//         {userName ? (
//           <li>Welcome, {userName}!</li> // Show the user's name
//         ) : (
//           <li>
//             <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
//               Login
//             </NavLink>
//           </li>
//         )}
//         <li>
//           <NavLink to="/adminDashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
//             Admin Dashboard
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;





















// import React from "react";
// import { NavLink } from "react-router-dom";
// // import { useUser } from './UserContext'; // Import the useUser hook
// import '../styles/navbar.css';
// import companyLogo from '../components/images/logo.jpg'; // Adjust path and filename

// const Navbar = () => {
//   // const { user } = useUser(); // Get the user data from context

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={companyLogo} alt="Company Logo" className="navbar-logo-image" />
//         <div className="navbar-title">KNET PHONE WORLD</div>
//         <div className="navbar-slogan">Quality Phones, Unmatched Service!</div>
//       </div>
//       <ul className="navbar-menu">
//         <li>
//           <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : '')}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
//             Product
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/adminDashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
//             AdminDashboard
//           </NavLink>
//         </li>
//       </ul>
//       {/* Display user's name if logged in
//       {user && <div className="navbar-user">Welcome, {user.name}!</div>} */}
//     </nav>
//   );
// };

// export default Navbar;
