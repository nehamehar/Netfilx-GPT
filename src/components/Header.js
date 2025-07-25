import React from 'react'
import { useSelector } from 'react-redux';
//import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../supabaseClient';
//import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { Netflix_logo } from '../utils/constants';
import { useState } from 'react';
import { USER_AVTAR } from '../utils/constants';
import { toogleGptSerachView } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import {changeLanguage} from "../utils/configSlice";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
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
   const handleGPTSerach =()=>{
      // toggle gpt
      dispatch(toogleGptSerachView())
    }
    const handleLanguageChange =(e)=>{
      //console.log(e.target.value)
      dispatch(changeLanguage(e.target.value))
    }
  
  return (
    <div className="absolute z-10 flex justify-between w-screen px-20 py-1 bg-gradient-to-b from-black"> 
    <img 
        className='w-36' // Only the width class is needed here
        src={Netflix_logo}
        alt='logo' />
        {user && (
        <div className="relative flex justify-between">
          <div>
           {showGptSearch && (<select className='p-2 m-3 text-white bg-black' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier}value={lang.identifier}>{lang.name}</option>)}
              </select>)}
          <button className='right-0 px-2 py-2 mt-5 text-base font-semibold text-white bg-red-600 rounded-lg' onClick={handleGPTSerach}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
        </div>
          {/* 2. Toggle the dropdown when the image is clicked */}
          <img 
            className="w-12 h-12 m-4 rounded-lg cursor-pointer"
            src={user.photoURL || USER_AVTAR} 
            alt="User Avatar"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {/* 3. Conditionally render the dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 w-24 py-1 mt-16 rounded-lg bg-slate-500">
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-600"
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