import React, { useRef, useState, useEffect } from 'react'
import Header from './Header'
import { CheckErrormsg } from '../utils/validate'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const [IsSignInform , settoggleSignInform] = useState(true)
  //for error msg
  const [Errormsg, setErrormsg]= useState(null)
  useEffect(() => {
    // Now this code will work because 'user' is defined
    if (user) {
      navigate("/browse");
    }
  }, [user, navigate]);

  //if the button is signinform changeup to signup form if settoggleSignInform true IsSignInform will false if IsSignInform true settoggleSignInform false
  const toggleSignInform =()=>{
    settoggleSignInform(!IsSignInform)
  }
  
  const handleButtonClick = async () => {
  const message = CheckErrormsg(
    email.current.value,
    password.current.value,
    IsSignInform ? null : name.current.value
  );

  setErrormsg(message);

  if (message) {
    return;
  }


  if (!IsSignInform) {
    // Sign Up
    const { data, error } = await supabase.auth.signUp({
      email: email.current.value,
      password: password.current.value,
      options: {
        data: {
          full_name: name.current.value,
        },
      },
    });

    console.log("Supabase sign up data:", data);
    console.log("Supabase sign up error:", error);

    if (error) {
      setErrormsg(error.message);
    } else {
      setErrormsg("Sign Up successful! Please check your email to verify.");
    }
  } else {
    // Sign In
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.current.value,
      password: password.current.value,
    });

    console.log("Supabase signin data:", data);
    console.log("Supabase signin error:", error);

    if (error) {
      setErrormsg(error.message);
    } else {
      setErrormsg("Sign In successful!");
    }
  }
};

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  return (
    <div>
      <Header/>
    <div className='absolute' >
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_medium.jpg'
    alt='logo'/>
    </div>
    {/* making box of login with form */}
      <form onSubmit={(e) => e.preventDefault()} className='absolute left-0 right-0 w-4/12 mx-auto bg-black rounded-sm p-14 my-28 bg-opacity-85' >
      <h1 className='py-4 text-3xl font-bold text-white'>{IsSignInform? "Sign In" : "Sign Up"}</h1>
      {!IsSignInform &&( <input ref={name} type='text' placeholder='Full Name' className='w-full p-3 my-4 text-white bg-black border rounded-md bg-opacity-65 border-slate-600'/>)}
        <input ref={email} type='text' placeholder='Email or mobile number' className='w-full p-3 my-4 text-white bg-black bg-opacity-100 border rounded-md border-slate-600'/>
        <input ref={password} type='password' placeholder='Password' className='w-full p-3 my-4 text-white bg-black border rounded-md bg-opacity-65 border-slate-600'/>
        <p className='font-thin text-red-700 text-md'>{Errormsg}</p>
        <button className='w-full p-3 my-6 text-white bg-red-600 rounded-lg' onClick={handleButtonClick}>{IsSignInform? "Sign In" : "Sign Up"}</button> 
        <p className='font-thin cursor-pointer text-slate-400'onClick={toggleSignInform}> {IsSignInform? "New to Netflix? Sign up now." : "Already registered? Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login 