import GOOGLE_IMG from '../images/google-line.svg';

const SignIn = () =>{
    
    return (
        <div>
            <h1 className='text-5xl'>Sign In</h1>
             <form className='flex flex-col gap-2 mt-12'>
               <div id="mailMobileContainer" className=' border border-gray-300 rounded-md'>
                 <input type="text" autocomplete="email" name="userLoginId" id="" placeholder='Email or Mobile Number' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div id="passwordContainer" className='border border-gray-300 rounded-md mt-2'>
                 <input type="password" name="password" id="" placeholder='Password' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div className=' w-full flex justify-between px-2'>
                 
                 <div className='flex gap-2'>
                   <input type="checkbox" name="rememberMe" id="rememberMe" />
                   <span>Remember Me</span>
                 </div>
                 <p className='hover:underline'>Forgot Password ?</p>
               </div>

               <button type="submit" className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-gray-200 text-black font-semibold mt-6'>Sign In</button>
               
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