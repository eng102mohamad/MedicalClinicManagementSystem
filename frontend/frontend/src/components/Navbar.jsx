import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import { AuthContext } from './context/AuthContext';


function Navbar(){
const {user,logout}= useContext(AuthContext)
    return(
 <nav className="bg-white shadow-md text-[#008e9b] flex justify-between items-center px-6">
  <div>
    <img className="w-32" src={logo} alt="siiiiiu" />
  </div>
  <ul className="flex space-x-6 items-center">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Services</Link></li>
      <li><Link to="/">About</Link></li>

      {user && user.role === 'admin'&&(
        <>
         <li><Link to="/AddDoctor">Add Doctor</Link></li>
      <li><Link to="/">Add Department</Link></li>
        </>
      )}
      {user && user.role ==='user'&&(
        <>
              <li><Link to="/addAppointment">Add Appointment</Link></li>
              <li><Link to="/my-appointment">My Appointment</Link></li>

        </>
      )}
      {!user &&(
        <>
              <li><Link to="/login">LogIn</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    </>

      )}
      {user && user.role && <li><button onClick={logout}>LogOut</button></li>}
  </ul>
</nav>

)};
export default Navbar;