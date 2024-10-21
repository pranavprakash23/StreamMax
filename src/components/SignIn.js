import GOOGLE_IMG from '../images/google-line.svg';
import { useState, useRef } from 'react';
import {checkValidDataSignIn} from '../utils/Validate.js';

const SignIn = () =>{
    
    const [errorMsg, setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    
    const handleButtonClick = () => {
        const message = checkValidDataSignIn(email.current.value,password.current.value);
        setErrorMsg(message);
    }
  
    return (
        <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl mt-24 md:mt-2'>Sign In</h1>
             <form className='flex flex-col gap-2 mt-8'>
               <div id="mailMobileContainer" className=' border border-gray-300 rounded-md'>
                 <input ref = {email} type="text" name="userLoginId" id="userLoginId" placeholder='Email or Mobile Number' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div id="passwordContainer" className='border border-gray-300 rounded-md mt-2'>
                 <input ref = {password} type="password" name="password" id="password" placeholder='Password' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <p className='text-sm text-red-500 font-semibold'>{errorMsg}</p>

               <div className='w-full flex justify-between p-2 text-xs'>
                 
                 <div className='flex gap-2'>
                   <input type="checkbox" name="rememberMe" id="rememberMe" className='cursor-pointer'/>
                   <p className="items-center">Remember Me</p>
                 </div>
                 <p className='cursor-pointer hover:underline'>Forgot Password ?</p>
               </div>

               <button type="submit" onClick={()=>{
                handleButtonClick()
               }} className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-gray-200 text-black font-semibold mt-6'>Sign In</button>
               
               <p className='text-center'>OR</p>

               <button type="submit" className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-black text-white font-normal flex gap-2 items-center justify-center'>
                 <img src={GOOGLE_IMG} alt="gmailImg" className='w-5 h-5 bg-white text-center rounded-xl' />
                 <p>Sign In With Google</p>
               </button>
             </form>
        </div>

    )
}

export default SignIn;