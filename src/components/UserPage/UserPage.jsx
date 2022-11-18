import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <h2>Welcome, {user.username}!</h2>

    <div className="usercontainer">
      

      

       <h3 className = 'flex-item1' >Favorites</h3>

       <h3 className = 'flex-item2'>Profile Picture</h3> 


      {/* From Original */}
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
