import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckErrormsg } from '../utils/validate'
const Login = () => {
  const [IsSignInform , settoggleSignInform] = useState(true)
  //for error msg
  const [Errormsg, setErrormsg]= useState(null)
  //if the button is signinform changeup to signup form if settoggleSignInform true IsSignInform will false if IsSignInform true settoggleSignInform false
  const toggleSignInform =()=>{
    settoggleSignInform(!IsSignInform)
  }
  const handleButtonClick =()=>{
    // validate if validate fails gives error msg(ERROR MSG)
    //when click on email and pass i want to get data from both how to do?
    // console.log(email)
    // console.log(password)
    // console.log(email.current.value);
    // console.Log(password.current.value);
    const message = CheckErrormsg(email.current.value, password.current.value, name.current.value)
    setErrormsg(message)  
  
  }
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
        <p className='font-semibold text-red-700 text-md'>{Errormsg}</p>
        <button className='w-full p-3 my-6 text-white bg-red-600 rounded-lg' onClick={handleButtonClick}>{IsSignInform? "Sign In" : "Sign Up"}</button> 
        <p className='font-thin cursor-pointer text-slate-400'onClick={toggleSignInform}> {IsSignInform? "New to Netflix? Sign up now." : "Already registered? Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login