import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">

<Link className="navLink" to="/home">
              Home
            </Link>

        {/* ORIGINAL */}
        {/* If a user is logged in, show these links */}
        <div>
        {user.id && (
          <>
      <Link className="navLink" to="/user">
        Admin Account
        </Link>    
          </>
        )}


      </div>




      <Link to="/home">
        <img src = "ML.png" className='nav_title'></img>
      </Link>

      <Link className="navLink" to="/about">
          About
        </Link>
     
       <div> 
        {/* ORIGINAL */}
        {/* If no user is logged in, show these links */}
         {!user.id && ( 
            // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
          Admin Login
         </Link>
         )} 

                {/* If a user is logged in, show these links */}
         {user.id && (
          <>
  
            <LogOutButton className="navLink" />
          </>
        )}


      </div> 
        
      
        {/* ORIGINAL */}
        {/* If a user is logged in, show these links */}
        {/* {user.id && (
          <>
     

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}


      </div> */}
    </div>
  );
}

export default Nav;
