import React from 'react'
import { useSelector } from 'react-redux';
//import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../supabaseClient';
//import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  //const dispatch = useDispatch();
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      // You can dispatch removeUser here for an instant UI update,
      // though your onAuthStateChange listener will also catch it.
      navigate("/");
      //dispatch(removeUser())
    } else {
      console.error('Error signing out:', error);
    }
    
  };
  return (
    <div className="absolute z-10 flex justify-between w-screen py-1 px-28 bg-gradient-to-b from-black"> 
        <img className='text-4xl font-extrabold w-52' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'/>
        {user && (
        <div className="relative">
          {/* 2. Toggle the dropdown when the image is clicked */}
          <img 
            className="w-12 h-12 rounded-lg cursor-pointer"
            src={user.photoURL || 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'} 
            alt="User Avatar"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {/* 3. Conditionally render the dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 w-48 py-1 mt-2 bg-black rounded-md shadow-lg bg-opacity-80">
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-700"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header