import GOOGLE_IMG from '../images/google-line.svg';
import { useState, useRef } from 'react';
import {checkValidDataSignUp} from '../utils/Validate.js';

const SignUp = () => {

    const [errorMsg, setErrorMsg] = useState(null);
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const handleButtonClick = () => {
        const message = checkValidDataSignUp(name.current.value,email.current.value,password.current.value);
        setErrorMsg(message);
    }

    return (
        <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl mt-24 md:mt-2'>Sign Up</h1>
             <form className='flex flex-col gap-2 mt-8'>
                <div id="nameContainer" className=' border border-gray-300 rounded-md'>
                    <input ref = {name} type="text" name="userLoginId" id="name" placeholder='Name' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
                </div>

               <div id="mailMobileContainer" className=' border border-gray-300 rounded-md'>
                 <input ref = {email} type="text" autocomplete="email" name="userLoginId" id="userLoginId" placeholder='Email' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div id="passwordContainer" className='border border-gray-300 rounded-md'>
                 <input ref = {password} type="password" name="password" id="password" placeholder='Password' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div id="mobileContainer" className=' border border-gray-300 rounded-md'>
                 <input type="text"  name="userMobNo" id="" placeholder='Mobile Number' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

                <p className='text-sm text-red-500 font-semibold'>{errorMsg}</p>

               <button type="submit"  onClick={()=>{
                handleButtonClick()
               }} className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-gray-200 text-black font-semibold mt-6'>Sign Up</button>
               
               <p className='text-center'>OR</p>

               <button type="submit" className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-black text-white font-normal flex gap-2 items-center justify-center'>
                 <img src={GOOGLE_IMG} alt="gmailImg" className='w-5 h-5 bg-white text-center rounded-xl' />
                 <p>Sign Up With Google</p>
               </button>
             </form>
        </div>
    )
}

export default SignUp;